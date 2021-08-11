
const express = require("express");
const app = express();
const data = require("./data/weather.json");

let newArray=[];

app.get("/", function (req, res) {
  res.send("hello ");
});
app.get("/weather", function (req, res) {
  let queryCity;
  req.query["q"]?queryCity=req.query["q"].toLowerCase():queryCity=''
  let theCity = data.find((city) => {
    return (
      Number(req.query["lat"]) === city.lat||
      Number(req.query["lon"]) === city.lon ||
      queryCity === city.city_name.toLowerCase() &&
      city
    );
  });
    if(!theCity){res.status(500).send("The City You Search About It Not Found")}
  else
 { theCity.data.forEach(elem=>{

    newArray.push(new Forecast(`elem.valid_date,low of ${elem.low_temp} high of ${elem.max_temp}  ${elem.weather.description}`));
  })

   res.json(newArray); }


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


