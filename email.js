require("dotenv").config();
//console.log(process.env.GMAIL_USERNAME);

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main({to,subject,text}) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"achyut Adhikari  👻" <raghavendra9816@email>', // sender address
    to: "achyuta019314@nec.edu.np", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main({to:"achyuta019314@nec.edu.np",subject:"hello",text:""}).catch(console.error);
