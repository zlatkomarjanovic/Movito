import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../../index.css';

const Nav = (props) => {


//Perfect example of Link usage from react-router-dom. This is so efficent that I am in love 
// with it. Works well, fast, much better than href in jsx.
return(
  <Fragment>
    <ul>
      <li><Link to = "/tvshows">TV Shows</Link></li>
      <li><Link to = "/movies">Movies</Link></li>
      
      <li></li>
    </ul>
    
  </Fragment>
  )
}
export default Nav
