
const data = require("./data/weather.json");
const axios=require('axios')
class Forecast  {
    constructor(item){
        this.date=item.valid_date;
        this.description=item.weather.description;
    }
}

let weatherController= function (req, res) {
  let name=req.query.city
  const urlMovie=`https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=${process.env.WEATHER_API_KEY}`
  axios.get(urlMovie).then(item=>{
         console.log(item.data);
         let weatherArr=item.data.data;
         let arr=[];
         weatherArr.map(item=>{
        arr.push(new Forecast(item))
      })
         res.json(arr)

    });
 }




  module.exports=weatherController;