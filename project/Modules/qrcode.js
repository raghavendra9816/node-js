const qrcode = require("qrcode");
const createqr = async (url) => {
  qrcode.toFile("./image.png", url);
};
module.exports = { createqr };
