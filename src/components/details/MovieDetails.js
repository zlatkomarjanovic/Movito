import React, {Fragment} from 'react'


const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if(vote >= 6) {
        return 'orange'
    } else {
        return 'red'; 
    }
}

const MOVIE = "https://api.themoviedb.org/3/movie/181812?api_key=40cfd6f06d23fa390065f3fa55c03d54&language=en-US"
const MOVIETEMP = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US"
const IMAGEM = "https://image.tmdb.org/t/p/w1280"


const MovieDetails = (props) => {
    const {title, overview, release_date, poster_path,vote_average, vote_count} = props.currentMovie; 
    return (
        <Fragment>
            
            <div className = "goback" onClick = {props.closeMovieInfo}>
                <i className = "fa fa-arrow-left"> </i>
                <span style = {{marginLeft: 10}}> Go Back </span>
            </div>

            <div className = "container">

                <div className = "background"> 
                <img 
                    src = {
                        poster_path 
                        ? IMAGEM+poster_path 
                        : 'https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt = {title} /> 
                </div>

                <div className = "content"> 
                <div className = "contentimage"> 
                    <img 
                        src = {
                            poster_path 
                            ? IMAGEM+poster_path 
                            : 'https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt = {title} /> 
                </div> 
                    <div className = "content-text"> 
                        <h2>{title}</h2>
                        <p>{overview}</p> <br/> <br/> 
                        <span className = "release-date"><p>Release date : {release_date}</p></span>
                        <div className = "move-span">
                            <span className = {`tag ${setVoteClass(vote_average)}`}> SCORE =  {vote_average} | VOTE COUNT = {vote_count} </span>
                        </div> <br />
                        
                        
                        
                    </div>
                </div> 
                
            </div>
                

            
        </Fragment>
    )
}

export default MovieDetails
