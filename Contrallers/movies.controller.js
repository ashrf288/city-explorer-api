
const Movies=require('../Moduls/movies')
require('dotenv').config();
const movie_url=`https://api.themoviedb.org/3/search/movie`
const movieKey=process.env.MOVIE_API_KEY;
const axios=require('axios');
const Cache = require('../helpers/ForeCastCache.helper');
const foreCastCaching=new Cache([])
const  movieController = function  (req, res) {

   if(foreCastCaching.forcecastData.length){
          res.json({message:'from cache',data:foreCastCaching.forcecastData})
   }else{
       let name=req.query.query
       const urlMovie=`${movie_url}?api_key=${movieKey}&query=${name}`
       axios.get(urlMovie).then(item=>{
              let movieArray=[];
              let moviesArr=item.data.results;
                moviesArr.map(movie=>{
                     movieArray.push( new Movies(movie))

              })

              foreCastCaching.forcecastData=movieArray;
              res.json({message:'from api',data:movieArray})
       })

     }


   }


  module.exports=movieController;

  //