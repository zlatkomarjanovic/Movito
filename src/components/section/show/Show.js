import React, {Fragment} from 'react'
import '../../../index.css'

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if(vote >= 6) {
        return 'orange'
    } else {
        return 'red'; 
    }
}


const IMAGESHW = "https://image.tmdb.org/t/p/w1280"

const Show = ({ name, poster_path, overview, vote_average, viewShowInfo, showId }) => {
    return (
        <Fragment>
        <div onClick = {() => viewShowInfo(showId)} className = "movie">
        <img src = {
                    poster_path 
                    ? IMAGESHW+poster_path 
                    : 'https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt = {name} /> 
            <div className = "movie-info">
                <h3>{name}</h3>
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

export default Show
