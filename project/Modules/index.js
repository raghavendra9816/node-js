const { createqr } = require("../Modules/qrcode");
const { createpdf } = require("../Modules/pdf");
const test = async () => {
  await createqr("https://google.com");
  await createpdf("../Modules/image.png");
};
test();
