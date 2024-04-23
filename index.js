// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, "Content-Type", "text/html");
//     res.end("hello node js");
//   })
//   .listen(8080);
// console.log("running on port ");
 //write a NODEjs functiion thatn uses os module to get your computer ram in gb

// const os = require("os");
// const reqmemory = (os.totalmem() / 1024) * 1024 * 1024 + "GB";
// console.log({ reqmemory });

// //write a node js  function that reads the content of text file
// const fs = require("fs");
// const readfile = fs.readFileSync("./nodejs.txt", { encoding: "utf-8" });
// console.log({ readfile });
// const turnicate = (str, num) => {
//   return str;
// };
// const proper = (str1) => {
//   const arr = str1.split("").map((word) => {
//     return word[0].toUpperCase() + word.substring(1).toLowerCase();
//   });
//   return arr.join("");
// };
// console.log(proper("hello"));

// console.log(turn("this ia achyut adhikari"));

//-------------------------------
//--proper case
const propercase1 = require("proper-upper-case");
console.log(propercase1("achyut adhikari"));

//------------------------------------


