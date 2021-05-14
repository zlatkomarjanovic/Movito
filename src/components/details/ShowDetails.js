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


const IMAGESHW = "https://image.tmdb.org/t/p/w1280"


const ShowDetails = (props) => {
    const {name, overview, first_air_date, poster_path,vote_average, vote_count} = props.currentshow; 
    return (
        <Fragment>
            
            <div className = "goback" onClick = {props.closeShowInfo}>
                <i className = "fa fa-arrow-left"> </i>
                <span style = {{marginLeft: 10}}> Go Back </span>
            </div>

            <div className = "container">

                <div className = "background"> 
                <img 
                    src = {
                        poster_path 
                        ? IMAGESHW+poster_path 
                        : 'https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt = {name} /> 
                </div>

                <div className = "content"> 
                <div className = "contentimage"> 
                    <img 
                        src = {
                            poster_path 
                            ? IMAGESHW+poster_path 
                            : 'https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt = {name} /> 
                </div> 
                    <div className = "content-text"> 
                        <h2>{name}</h2>
                        <p>{overview}</p> <br/> <br/> 
                        <span className = "release-date"><p>Pilot date : {first_air_date}</p></span>
                        <div className = "move-span">
                            <span className = {`tag ${setVoteClass(vote_average)}`}> SCORE =  {vote_average} | VOTE COUNT = {vote_count} </span>
                        </div> <br />
                        
                        
                        
                    </div>
                </div> 
                
            </div>
                

            
        </Fragment>
    )
}

export default ShowDetails
