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
  module.exports=Movies