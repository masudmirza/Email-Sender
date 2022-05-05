require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const sendMail = require('./routes/sendMail');

const app = express();
const port = process.env.PORT || 5000;

// static folder
app.use(express.static(path.join(__dirname, './public')));

// bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set('view engine', 'hbs');
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: false,
    layoutsDir: path.join(__dirname, './views')
}));

app.get('/', (req, res) => {
    res.render('main');
});

app.post('/send', (req, res) =>{
    sendMail(req,res);
});

app.listen(port, (req, res) => console.log(`Server running on ${port}`));

