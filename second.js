const today = () => {
  const d = new Date();
  return d;
};
const getDay = () => {
  const now = new Date().getDay();
  const day = [
    "sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "friday",
    "saturday",
  ];
  return day[now];
};
// const propercase = (input) => {
//   return input.charAt(0).toUpperCase() + slice(1);
// };

//write a ja module to create string function

//-convert to proper case ;"achyut adhikari"=>"Achyut Adhikari"
const proper = (str1) => {
  const arr = str1
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return arr.join(" ");
};

//- convert to turnicate; "Achyut is a good boy"=>"Achyut is good ..."

const turn = (str1) => {
  const s = str1.slice(0, 16) + "...";
  return s;
};

//-join two string ;"Achyut" "Adhikari"=>Achyut Adhikari
const strconcatinate = (str1, str2) => {
  return str1 + str2;
};

module.exports = { today, getDay, proper, strconcatinate, turn };
