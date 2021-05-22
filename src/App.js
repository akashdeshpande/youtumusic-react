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
    this.changeVideo = this.changeVideo.bind(this);
  }

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    console.log(event.target);

    console.log(event.target.clearVideo()); // speed

    this.setState({
      event: event,
      videoId: "2g811Eo7K8U"
    });
    //console.log(this.state.event);
  }

  playMyVideo() {
    this.state.event.target.playVideo();
  }

  changeVideo() {
    //auZFGkxQSSk
    //document.querySelector('#myPlayer').setAttribute("videoId", "auZFGkxQSSk");
    this.setState({
      videoId: "auZFGkxQSSk"
    });
  }

  render() { 
    const opts = {
      height: '390',
      width: '640',
    };

    return ( 
      <div>
        <YouTube videoId={this.state.videoId} opts={opts} onReady={this.videoOnReady} id="myPlayer" />
        <AppTestYtReact
        playMyVideo={this.playMyVideo}
        changeVideo={this.changeVideo}/>
      </div>
    );
  }
}
 
export default App;