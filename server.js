const express=require('express')
const app=express()
const data=require('./data/weather.json')

app.get('/',
function (req,res){
    res.send('hello ')
})
app.get('/weather',
function (req,res){

   let theCity= data.find(city=>{
          console.log(city.lat)
          console.log('query',req.query['lat']);
      return Number(req.query['lat']) === Number(city.lat)&& city

    })
    console.log(theCity[0])
    res.json(theCity)
})

app.listen(8000,()=>{
    console.log('yehya')
})