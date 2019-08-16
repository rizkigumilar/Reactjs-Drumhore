import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Nav from './Components/Nav';
import store from './Publics/redux/store';
import HomePage from './Screens/HomePage';
import Login from './Screens/login'
import Logout from './Screens/logout';
import update from './Components/update';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='background'>
          <Router>
            <Nav />
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/login/'} component={Login} />
            <Route path={'/logout/'} component={Logout} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
