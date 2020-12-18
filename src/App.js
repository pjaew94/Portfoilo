import './App.scss';
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <Router>
      <Fragment>

   
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
 