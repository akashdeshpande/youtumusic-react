import './App.css';
import YouTube from 'react-youtube';
import React, { Component } from 'react';
import AppTestYtReact from './AppTestYtReact';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      event : {}
    }
    this.videoOnReady = this.videoOnReady.bind(this);
    this.playMyVideo = this.playMyVideo.bind(this);
  }

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    //console.log(event.target);
    this.setState({
      event: event
    });
    //console.log(this.state.event);
  }

  playMyVideo() {
    this.state.event.target.playVideo();
  }

  render() { 
    const opts = {
      height: '390',
      width: '640',
    };

    return ( 
      <div>
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this.videoOnReady} />
        <AppTestYtReact playMyVideo={this.playMyVideo}/>
      </div>
    );
  }
}
 
export default App;