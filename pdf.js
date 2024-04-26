
const http=require("http");
const PDFDocument = require('pdfkit');
const fs = require('fs');

http
  .createServer(async (req, res) => {

    console.log(req.url)
    if (req.url.split("=")[1] !== undefined) {
      const qr = await QRCode.toDataURL(req.url.split("=")[1]);
      const imgsrc = `<img src="${qr}"/>`;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("pdf generated");
    }
  })
  .listen(8000);
console.log("running on port 8000");






const createpdf=(userinput)=>{

}
const doc = new PDFDocument();
doc
  .font('fonts/PalatinoBold.ttf')
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100);
