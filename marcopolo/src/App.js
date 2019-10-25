import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import './App.css';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
 
class App extends Component {
  
  
  render() {
    
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;