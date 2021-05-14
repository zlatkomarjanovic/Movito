import React, {Fragment} from 'react'
import '../../../index.css'


//We again need our image url to display posters 
const IMAGEM = "https://image.tmdb.org/t/p/w1280"

//Set Vote Class is used to set classes of votes. If the vote is above or equal to 8 
//The vote itself changes color to green etc...
const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if(vote >= 6) {
        return 'orange'
    } else {
        return 'red'; 
    }
}

//This is our main Movie component
//This component renders out each movie on our screen that we see when the app loads.
//It takes in parameters such as title, poster_path and overview and displays them on our screen using JSX.
//Each one of this is wrapped in a div component that has an onClick listener that redirects us to movie details 
// if we click on it.
//Everything else is quite self-explanatory.
//The logic is same behind shows tab so I decided to not comment it out.
const Movie = ({ title, poster_path, overview, vote_average, viewMovieInfo, movieId }) => {
    return (
        <Fragment> {/* The reason I use Fragments is because I don't want to have unncessary divs all round the place.*/}
        <div onClick = {() => viewMovieInfo(movieId)} className = "movie"> 
            <img 
                src = {
                    poster_path 
                    ? IMAGEM+poster_path 
                    : 'https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt = {title} /> 
            <div className = "movie-info">
                <h3>{title}</h3>
                <span className = {`tag ${setVoteClass(vote_average)}`}> {vote_average} </span>
            </div>
         <div className  = "movie-over"> 
            <h2> Overview:  </h2>
            <p> {overview}</p>
         </div>
        </div>
        </Fragment>
    )
}

export default Movie
