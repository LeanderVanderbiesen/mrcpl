import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import './App.css';

import { Home } from './components/Home/Home';
import { Wolf } from './components/Wolf/Wolf';
import { Sheep } from './components/Sheep/Sheep';
 
class App extends Component {
  
  
  render() {
    
    return (
      <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wolf" component={Wolf} />
            <Route exact path="/sheep" component={Sheep} />
          </Switch>
      </div>
    );
  }
}

export default App;