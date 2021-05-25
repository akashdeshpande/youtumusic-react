import './App.css';
//import YouTube from 'react-youtube';
import React, { Component } from 'react';
import MainSpace from './modules/MainSpace/MainSpace';
import Player from './modules/Player/Player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeVideoId: 'auZFGkxQSSk',
      nowPlayinSongName: '',
      nowPlayingArtist: ''
    }
  this.updateNowPlayingSongName = this.updateNowPlayingSongName.bind(this);
  this.updateNowPlayingArtist = this.updateNowPlayingArtist.bind(this);
  }

  updateNowPlayingSongName(songName) {
    this.setState({
      nowPlayinSongName: songName
    });
}

  updateNowPlayingArtist(artistName) {
    this.setState({
      nowPlayingArtist: artistName
    });
  }

  render() {
    
    return(
      <div id="app">
        <MainSpace
          youtubeVideoId={this.state.youtubeVideoId}
          updateNowPlayingSongName={this.updateNowPlayingSongName}
          updateNowPlayingArtist={this.updateNowPlayingArtist}
        />
        <Player
          nowPlayinSongName={this.state.nowPlayinSongName}
          nowPlayingArtist={this.state.nowPlayingArtist}
        />
      </div>
    );
  }
}

 
export default App;