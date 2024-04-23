const second = require("./second.js");
const day = second.getDay();
console.log({ day });

const date = second.today();
console.log({ date });

// const turnicate = (str, num) => {
//   return str;
// };
// console.log(turnicate("achyutadhikari", 5));

const proper = second.proper();
const result = proper("hello world");
console.log({ result });

const strconcatinate = second.strconcatinate();
console.log(strconcatinate("achyut,", "adhikari"));

const turn = second.turn();
console.log(turn("this is achyut hello world"));
