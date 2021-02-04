import React from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Signup from './components/pages/sign-up-folder/Signup';
import AccountSettings from './components/pages/dashboard-folder/AccountSettings';
import MasterEdit from './components/pages/dashboard-folder/MasterEdit';
import Signin from './components/pages/sign-in-folder/Signin';
import FaqDisplay from './components/pages/dashboard-folder/FaqDisplay';

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' exact component={Signup} /> 
          <Route path='/sign-in' exact component={Signin} /> 
          <Route path='/actset' exact component={AccountSettings} />
          <Route path='/masteredit' exact component={MasterEdit} />
          <Route path='/faq' exact component={FaqDisplay} />



        </Switch>
      </Router>
    </>
  );
}

export default App;
