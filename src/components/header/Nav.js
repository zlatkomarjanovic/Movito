import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../../index.css';

const Nav = (props) => {



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
