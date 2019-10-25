import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import './App.css';
import {usePosition} from "./components/location";

export const App = () => {
  const {latitude, longitude, error} = usePosition();

  return (
      <div className="App">


        <code>
          latitude: {latitude}<br/>
          longitude: {longitude}<br/>
          error: {error}
        </code>
      </div>
  );
};

export default App;