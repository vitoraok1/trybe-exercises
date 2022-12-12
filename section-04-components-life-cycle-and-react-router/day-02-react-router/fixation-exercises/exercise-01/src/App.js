import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/users:id" render={ (props) => <Users {...props} greetingMessage="Good Morning"/> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
