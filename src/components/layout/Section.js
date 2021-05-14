import '../../index.css'
import React from 'react'
import Tvshows from '../section/Tvshows';
import Movies from '../section/Movies';
import Developer from '../section/Developer';
import MovieDetails from '../details/MovieDetails'
import {Route} from 'react-router-dom';

const Section = (props) => {
return(
  <section>
    <Route exact path = "/tvshows" component={Tvshows} />
    <Route exact path = "/movies" component={Movies} />
    
  </section>
  )
}
export default Section
