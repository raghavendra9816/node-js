const bcrypt = require("bcryptjs");
const encryptpass = (password) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("B4c0//", salt, function (err, hash) {
      // Store hash in your password DB.
    });
  });
};
const verifypass = () => {};

//home work
//HTML
// 
