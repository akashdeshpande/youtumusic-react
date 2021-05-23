import './App.css';
//import YouTube from 'react-youtube';
import React, { Component } from 'react';
import MainSpace from './modules/MainSpace/MainSpace';

class App extends Component {

  render() {
    return(
      <div id="app">
        <MainSpace />
        <div className="player-dummy">
          Player component dummy
        </div>
      </div>
    );
  }
}

 
export default App;