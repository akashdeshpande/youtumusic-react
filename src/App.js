import './App.css';
import YouTube from 'react-youtube';
import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerEvent: {},
      playerPlayVideo: () => {

      }
    }
    this.videoOnReady = this.videoOnReady.bind(this);
  }

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    console.log(event);

    this.setState({
      playerEvent: event,
      playerPlayVideo: event.target.playVideo
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
        <button onClick={this.state.playerPlayVideo}>play</button>
      </div>
    );
  }
}
 
export default App;