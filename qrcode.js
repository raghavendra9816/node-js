const QRCode = require("qrcode");
const http = require("http");

http
  .createServer(async (req, res) => {
    if (req.url.split("=")[1] !== undefined) {
      const qr = await QRCode.toDataURL(req.url.split("=")[1]);
      const imgsrc = `<img src="${qr}"/>`;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(imgsrc);
    }
  })
  .listen(8000);
console.log("running on port 8000 https://localhost:8000");
