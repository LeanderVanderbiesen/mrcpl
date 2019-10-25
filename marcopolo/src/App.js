import React from 'react';
import logo from './logo.svg';
import './App.css';
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