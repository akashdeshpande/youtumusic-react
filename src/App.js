import './App.css';
import YouTube from 'react-youtube';
import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerPlayVideo: {}
    }
    this.videoOnReady = this.videoOnReady.bind(this);
  }

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    this.setState({
      playerPlayVideo: event.target
    });
  }

  render() { 
    const opts = {
      height: '390',
      width: '640',
    };

    return ( 
      <div>
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this.videoOnReady} />
        <button onClick={() => this.state.playerPlayVideo.playVideo()}>play</button>
      </div>
    );
  }
}
 
export default App;