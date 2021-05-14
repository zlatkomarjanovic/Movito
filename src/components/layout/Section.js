import '../../index.css'
import React from 'react'
import Tvshows from '../section/Tvshows';
import Movies from '../section/Movies';
import {Route, Switch} from 'react-router-dom';


//These are our routes. Link cannot send us to certain place if route for that palce 
// doesn't exist. So this is where we said that whenever someone clicks on tvshows or movies 
// They are being redirected to TvShows or Movies components. 
const Section = (props) => {
return(
  <section>

  <Switch>
      <Route exact path = "/" component={Tvshows}/>
      <Route exact path = "/tvshows" component={Tvshows}/>
      <Route exact path = "/movies" component={Movies} />
  </Switch>
    
  </section>
  )
}
export default Section
