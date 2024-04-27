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
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"achyut Adhikari  👻" <raghavendra9816@email>', // sender address
    to: "achyuta019314@nec.edu.np", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<img src='cid:image'/>",

    attachments: [
      {
        path: "./output.pdf",
      },
      {
        filename: "bb.jpg",
        path: "./bb.jpg",
        cid: "image", //same cid value as in the html img src
      },
    ], // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

//1.write the node js module to encrypt and verify the  password using bcryptjs
//encrypt password
//verify password(hash pass)

//2. write node js module to create and verify jwt token usoing jsonwebtoken.
//createtoken():string
//verifytoken():boolean
