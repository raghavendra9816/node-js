require("dotenv").config();

const bcryptjs = require("bcryptjs");
const encryptpassword = (password) =>
  bcryptjs.hashSync(password, Number(process.env.SALT_ROUND));
console.log(encryptpassword("achyut")); //hash generate garcha

const verifypass = (hashpw, password) => bcryptjs.compareSync(password, hashpw);

const hpw = encryptpassword("achyut"); //password same xa ki xaina verify garcha
console.log(verifypass(hpw, "achyut"));
