
const Movies=require('../Moduls/movies')
require('dotenv').config();
const movie_url=`https://api.themoviedb.org/3/search/movie`
const movieKey=process.env.MOVIE_API_KEY;
const axios=require('axios')
const  movieController = function  (req, res) {
    let name=req.query.query
    const urlMovie=`${movie_url}?api_key=${movieKey}&query=${name}`
    axios.get(urlMovie).then(item=>{
           let moviesArr=item.data.results;
           let result=moviesArr.map(movie=>{
                  return new Movies(movie)
           })
           res.json(result)
    })
  }

  module.exports=movieController;

  //