var nodemailer = require('nodemailer');
var fs = require('fs');

// Create a Sendmail transport object
var transport = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});

// Your testing email path
var email_path = 'html/inline.html';

console.log('Sendmail Configured');

var html_content = fs.readFileSync(email_path, {encoding: 'utf8'}, function(err, data) {
    if (err) throw err;
    console.log('email template ' + email_path + ' loaded');
});

// Message object
var message = {

    // sender info
    from: 'Tester <test@test.com>',

    // Comma separated list of recipients
    to: '"Tester" <test@test.com>',

    // Subject of the message
    subject: 'Email Testing', //

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html: html_content
};

console.log('Sending Mail');

transport.sendMail(message, function(error){
    if(error){
        console.log('Error occured');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
});
