const nodeMailer = require("nodemailer");
const SMPT_MAIL='manindersingh29650@gmail.com';
exports.sendEmail = async (options) => {
    var transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "852afe27627594",
          pass: "7f152fadecc537"
        }
      });
    const mailOptions = {
        from: SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    }
    await transporter.sendMail(mailOptions);
}