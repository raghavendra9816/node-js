const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, "Content-Type", "text/html");
    res.end("hello node js");
  })
  .listen(8080);
console.log("running on port ");
//write a NODEjs functiion thatn uses os module to get your computer ram in gb

const os = require("os");
const reqmemory = (os.totalmem() / 1024) * 1024 * 1024 + "GB";
console.log({ reqmemory });

//write a node js  function that reads the content of text file
const fs = require("fs");
const readfile = fs.readFileSync("./nodejs.txt", { encoding: "utf-8" });
console.log({ readfile });
