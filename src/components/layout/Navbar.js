import React, {Fragment} from 'react'
import '../../index.css'
import Logo from '../header/Logo';
import Nav from '../header/Nav';

//So our app basically has two parts 
//Navbar section where our logo and tabs are 
//And section part where everything else is displayed. 
//So we put those parts in seperate components and called them here and this is what our 
//navbar is consisted of.
// Logo and Nav components. Clean, simple and works.


const Navbar = (props) => {
return(
  <Fragment>
    <header>
      <Logo />
      <Nav />
    </header>
  </Fragment>
  )
}
export default Navbar
