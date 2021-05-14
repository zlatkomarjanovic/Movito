import React, {Fragment} from 'react'
import '../../index.css'
import Logo from '../header/Logo';
import Nav from '../header/Nav';


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
