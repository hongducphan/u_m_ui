import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/home" name="Home Page" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
