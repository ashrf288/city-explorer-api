
const express = require("express");
const axios=require('axios')
const app = express();
require('dotenv').config();
const cors=require('cors')
app.use(cors());
const port=process.env.PORT;
const movie_url=`https://api.themoviedb.org/3/movie/top_rated`
const movieKey=process.env.MOVIE_API_KEY;
let weatherController=require('./weather.controller')

app.get("/", function (req, res) {
  res.send("hello ");
});
app.get("/weather",weatherController);


app.get("/movie", function (req, res) {
  const urlMovie=`${movie_url}?api_key=${movieKey}`
  axios.get(urlMovie).then(item=>{
         console.log(item.data);
         let moviesArr=item.data.results;
         let result=moviesArr.map(movie=>{
                return new Movies(movie)
         })
         res.json(result)
  })
});




app.listen(port, () => {
  console.log("In 8000");
});



class Movies{
  constructor(movie){
    this.release_date=movie.release_date,
    this.title=movie.title,
    this.overview=movie.overview,
    this.vote_average=movie.vote_average,
    this.vote_count=movie.vote_count,
    this.popularity=movie.popularity,
    this.imgUrl=`https://image.tmdb.org/t/p/w500${movie.poster_path}`

  }
}

