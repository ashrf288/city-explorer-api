
const data = require("./data/weather.json");

class Forecast  {
    constructor(item){
        this.date=item.valid_date;
        this.description=item.weather.description;
    }
}

let weatherController= function (req, res) {
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
    let arr=[];
      theCity.data.map(item=>{
        arr.push(new Forecast(item))
      })

     res.json(arr); }




  module.exports=weatherController;