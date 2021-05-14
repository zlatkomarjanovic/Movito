import React, {useEffect, useState, Fragment} from 'react'
import Movie from './movie/Movie'; 
import '../../index.css'
import Search from '../search/Search'; 
import MovieDetails from '../details/MovieDetails';

const TOP10M = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=40cfd6f06d23fa390065f3fa55c03d54&page=1"



const SEARCHM = "https://api.themoviedb.org/3/search/movie?&api_key=40cfd6f06d23fa390065f3fa55c03d54&query="


const Movies = (props) => {

  //Movies list, top 10 movies 
  const [movies, setMovies] = useState([]); 

  //search
  const [searchTerm, setSearchTerm] = useState(''); 
  const [currentmovie, setCurrentMovie] = useState(null); 
  
  
  // Movie list of top 10
  useEffect(() => {
    getMovies(TOP10M)
  }, [TOP10M]) 
  


  //Movies top 10 
  const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results); 
    })
  }
  



  // To handle changes in second search
  const handleOnChange = (e) => {
    e.preventDefault(); 
    setSearchTerm(e.target.value); 
    

  
      if(searchTerm.length >= 2) {
        getMovies(SEARCHM + searchTerm);
      } else if(searchTerm ==="   ") {
        alert('Stop entering empty spaces'); 
      } else {
        getMovies(TOP10M); 
      }
    
  }


  const viewMovieInfo = (id) => {
    const filteredMovie = movies.filter(movie => movie.id === id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    setCurrentMovie(newCurrentMovie)
  }

  const closeMovieInfo = () => {
    setCurrentMovie(null); 
  }
  

return(
  <Fragment> 
    {currentmovie === null ? <div>


      <Search 
      searchTerm = {searchTerm} 
      setSearchTerm = {setSearchTerm} 
      handleOnChange = {handleOnChange}
      />

      <div className = "movie-container">
       {movies.length > 0 && movies.map((movie)=> (<Movie movieId = {movie.id} viewMovieInfo = {viewMovieInfo} key = {movie.id} {...movie}/> ))}
      </div>



    </div> 

      : 

      <MovieDetails 
        currentMovie = {currentmovie} 
        closeMovieInfo={closeMovieInfo} /> 
        
      }

    
  
  </Fragment>
  
  )
}
export default Movies
