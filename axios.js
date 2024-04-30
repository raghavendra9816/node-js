//get data from weayher api
//print its temperature
const axios = require("axios");
const getMyWeather = async (url) => {
  const {
    data: { hourly },
  } = await axios.get(url);
  console.log(hourly);
};
getMyWeather(
  "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
);

//Method
// 1.get=>if server bata data laune frontend ma
// 2.post=> add new content garnu xa
// 3.put=>user lai update garna kam garcha
//put testo bela ma use garne if more than 2  value haru update garnu xa

// 4.patch=>user lai update garne kam garcha
//patch chai testo bela ma use garne jaha single code matra update garnu chha vana*
// 5.delete=>user lai delete garrne kam garcha
