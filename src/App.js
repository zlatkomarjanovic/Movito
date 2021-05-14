import React, {Fragment} from 'react'
import './index.css';
import Navbar from './components/layout/Navbar';
import Section  from './components/layout/Section';
import {BrowserRouter as Router, Switch} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
         
        <Switch >
          <Section /> 
        </Switch> 
      </Fragment>
    </Router> 
  );
}

export default App;
