//create a http server that take user input as request and find
//a package that can convert user input to currencr
//1ust=>133npr

const http = require("http");
const cc = require("currency-converter-lt");

http
  .createServer(async (req, res) => {
    const url = req.url.split("=");
    const number = Number(url[1]); //number ||parseInt ||+url[1]
    const convert = await multiplyCurrency(number);

    res.writeHead(200, { "Content-Type": "text/html" });
    const string = `<p> The converted currency :NPR ${convert}</p>`;
    res.end(string);
  })
  .listen(8080);
console.log("port is running ");

const multiplyCurrency = async (number = 0) => {
  let currencyConverter = new cc({ from: "USD", to: "NPR", amount: number });
  let result = await currencyConverter.convert();
  return result;
};
