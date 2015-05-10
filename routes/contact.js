var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET Contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', 
        { 
            page: 'Contact',
            title: 'The Art of Hacks',
            author: 'Alan Fitzpatrick',
            lastUpdated: '08/05/2015'
        });
});

router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: "alajfit@gmail.com",
        pass: 'H0neyC&ne123'
    });
    
    var mailOptions = {
        from: 'John Doe <johndoe@outlook.com>',
        to: 'alajfit@gmail.com',
        subject: 'Website Submission',
        // html is always the default
        text: "You have a new submission with the following Details... Name: "+req.body.name+ " - Email: "+req.body.email+" - Message: "+req.body.message,
        html: "<p>You got a new Website submission</p>"
    };
    
    // Important you are logged into Gmail to use this
    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
            res.redirect("/");
        } else {
            console.log("Message Sent: "+info.response);
            res.redirect("/");
        }
    });
});

module.exports = router;