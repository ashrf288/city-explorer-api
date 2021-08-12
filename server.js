
const express = require("express");

const app = express();
require('dotenv').config();
const cors=require('cors')
app.use(cors());
const port=process.env.PORT;

let weatherController=require('./Contrallers/weather.controllers')
let movieController=require('./Contrallers/movies.controller')

app.get("/", function (req, res) {
  res.send("hello ");
});

app.get("/weather",weatherController);
app.get("/movie",movieController )


app.listen(port, () => {
  console.log("In 8000");
});


