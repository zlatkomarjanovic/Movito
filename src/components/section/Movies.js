import React, {useEffect, useState, Fragment} from 'react'
import Movie from './movie/Movie'; 
import '../../index.css'
import Search from '../search/Search'; 
import MovieDetails from '../details/MovieDetails';


//Movies API URL and keys 
//Again, the reason I put my API here is purely due to ease of use 
// It will be a lot easier for you to run this app without having to 
// go through extra work and put your own API Keys in.
// I used TOP10M(Movies) url to display most popular movies and sort them by popularity
//SEARCHM(Movies) is used for live search of an movies and shows. 
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
  // arrow function that takes in API as a parameter
  //fetches it and then converts data to json response and 
  //sets Movies to that data.
  const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results); 
    })
  }
  



  // To handle changes in the search
  const handleOnChange = (e) => {
    e.preventDefault(); 
    setSearchTerm(e.target.value); 
    

  
      if(searchTerm.length >= 2) { //Here is where the magic of live search happens. If you enter more than 3 characters search is initialized.
        getMovies(SEARCHM + searchTerm);
      } else if(searchTerm ==="   ") {
        alert('Stop entering empty spaces'); 
      } else {
        getMovies(TOP10M); 
      }
    
  }


  const viewMovieInfo = (id) => { // Okay so this function is passed down in the 
    //Movie component, if you go back through comments in the 
    //Movie component you will see its called on an onclick listener action.

      //We are now filtering movies according to a given ID of a specific movie
    const filteredMovie = movies.filter(movie => movie.id === id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    //We are setting our state to that new current movie and you can see that state in react redux dev tools in an inspect element.
    setCurrentMovie(newCurrentMovie)
  }

  const closeMovieInfo = () => {
    setCurrentMovie(null); //This simply sets everything back to null and takes us back to the top 10 movies page.
  }
  

return(
  <Fragment> 
    {currentmovie === null ? <div> {/* We are simply asking if the current movie is 
    equal to null. If it is go ahead and display our search component and our top 10 Movies */}


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

      {/* However if our currentmovie is not equal to null, meaning if there is something in our state then go ahead and display our movie 
      details component. The exact same logic goes for TV Shows so I decided to not comment it all out.*/}
  
  </Fragment>
  
  )
}
export default Movies
