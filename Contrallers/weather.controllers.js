
const axios=require('axios')
const Forecast=require('../Moduls/moduls.js')
require('dotenv').config();

let weatherController= function (req, res) {
  let name=req.query.city
  const urlMovie=`https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=${process.env.WEATHER_API_KEY}`
  axios.get(urlMovie).then(item=>{
         let weatherArr=item.data.data;
         let arr=[];
         weatherArr.map(item=>{
        arr.push(new Forecast(item))
      })
         res.json(arr)

    });
 }


  module.exports=weatherController;