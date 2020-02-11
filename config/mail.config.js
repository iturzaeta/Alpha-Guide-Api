const nodemailer = require('nodemailer');

const HOST = process.env.HOST || 'http://localhost:3000';

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{ user, pass }
});

module.exports.sendValidateEmail = (targetUser) => {
    transporter.sendMail({
        from:`Alpha-Guide App email validation`,
        to: targetUser.email,
        subject: `Welcome to Alpha-Guide App ${user}`,
        html: `<h1> Welcome to Alpha Guide </h1>
                <p> Click the link below to validate your account </p>
            <a href='${HOST}/users/${targetUser.validateToken}/validate'>Confirm account</a>
        `
    })
    .then(info => console.log(info))
    .catch(err => console.log(err))
}