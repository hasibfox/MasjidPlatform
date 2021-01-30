import React from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Signup from './components/pages/sign-up-folder/Signup';
import Dashboard from './components/pages/dashboard-folder/Dashboard';
import Signin from './components/pages/sign-in-folder/Signin';

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' exact component={Signup} /> 
          <Route path='/sign-in' exact component={Signin} /> 


        </Switch>
      </Router>
    </>
  );
}

export default App;
