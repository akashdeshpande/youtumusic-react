import './App.css';
//import YouTube from 'react-youtube';
import React, { Component } from 'react';
import MainSpace from './modules/MainSpace/MainSpace';
import Player from './modules/Player/Player';

class App extends Component {

  render() {
    return(
      <div id="app">
        <MainSpace />
        <Player />
      </div>
    );
  }
}

 
export default App;