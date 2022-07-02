const nodemailer = require('nodemailer')

const sendMail = (req,res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // your email address
            pass: process.env.PASSWORD // your password
        }
    })
        
    // mail deitails
    const mailInfo = {
        from: process.env.EMAIL, // sender address(you)
        to: req.body.email, // receiver address
        subject: req.body.subject, // Subject line
        text: req.body.text, // plain text body
        //html: //html body,
        }
    
    // send mail with defined transport object
    transporter.sendMail(mailInfo , (err , info) => {
        if(err){
            console.log("Error occured ",err)
            res.render('main' , {message: 'Sorry there was an error occured!'})
        }else {
            console.log("Email send successfully ", info)
            res.render('main' , {message: 'Email Sended Successfully!'})
        }
    })     
}

module.exports = sendMail