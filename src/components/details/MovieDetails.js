import React, {Fragment} from 'react' 
// You will frequently see usage of fragments since I don't like to have 
//unneccesary divs all around the place. 
//The exact same logic goes for ShowDetails.js file so I decided to not comment it out.

//Instead of writing this function in a seperate component you will also see it in multiple files 
// since i figured out it works better when its called from the same component. I didn't test enough to 
// see why that is the case but it is.
const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if(vote >= 6) {
        return 'orange'
    } else {
        return 'red'; 
    }
}

// Why are my api urls here ? Why did I not put them in seperate files ? 
// I understand perfectly well that API keys and API urls should be put in a seperate env files 
// But the reason I didn't do that for this project is because it's a demo project
// and due to ease of use. It will be a lot easier for you to run this project on your devices 
// without having to do extra work with puting your own API keys and urls in env files.
const IMAGEM = "https://image.tmdb.org/t/p/w1280"


//This is a Movie details arrow functions that takes in props from Movies tab 
//This functions displays detailed page view of movies.
//The logic behind is fairly simple and obvious. 
const MovieDetails = (props) => {
    const {title, overview, release_date, poster_path,vote_average, vote_count} = props.currentMovie; 
    //Destructuring our props so that we don't always have to do props.currentMovie as it is annoying to do so.
    return (
        <Fragment>
            
            {/*Go back functions just sets the state back to "null" and the movie displays top 10 again*/}
            <div className = "goback" onClick = {props.closeMovieInfo}>
                <i className = "fa fa-arrow-left"> </i>
                <span style = {{marginLeft: 10}}> Go Back </span>
            </div>

            <div className = "container">

                <div className = "background"> 
                {/*What if our movie doesn't have a poster ? No problem just use pexels free stock photo !*/}
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
