const express = require("express");
const app = express();
const data = require("./data/weather.json");

let newArray=[];

app.get("/", function (req, res) {
  res.send("hello ");
});
app.get("/weather", function (req, res) {

  let theCity = data.find((city) => {
    return (
      Number(req.query["lat"]) === Number(city.lat) &&
      Number(req.query["lon"]) === Number(city.lon) &&
      req.query["searchQuery"].toLowerCase() === city.city_name.toLowerCase() &&
      city
    );
  });
    
  
  theCity.data.forEach(elem=>{
    
    newArray.push(new Forecast(elem.valid_date,`low of ${elem.low_temp} high of ${elem.max_temp}  ${elem.weather.description}`));
  })
  res.json(newArray);
//   if(newArray){res.json(newArray); }
//   else{res.status(500).send("something wrong in server")}
  
});



class Forecast  {
    constructor(date,description){
        this.date=date;
        this.description=description;
    }
}









app.listen(8000, () => {
  console.log("In 8000");
});


