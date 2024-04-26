
const http = require("http");
const PDFDocument = require("pdfkit");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url.split("=");
    const text = url[1];
    if (req.url.split("=")[1] !== undefined) {
      createpdf(text);
    }
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("pdf generated");
  })
  .listen(8000);
console.log("running on port 8000");

const createpdf = (userinput) => {
  //create document
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.text(userinput, 100, 100);
  doc.end();
};
