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
  
  //write a ja module to create string function
  //-convert to proper case ;"achyut adhikari"=>"Achyut Adhikari"
  //- convert to turnicate; "Achyut is a good boy"=>"Achyut is good ..."
  //-join two string ;"Achyut" "Adhikari"=>Achyut Adhikari
  module.exports = { today, getDay };
  
  const propercase=()=>{
      
  }
  