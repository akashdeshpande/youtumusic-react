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
      nowPlayingArtist: '',
      playerEvent: {},
      playerReady: false
    }
  this.updateNowPlayingSongName = this.updateNowPlayingSongName.bind(this);
  this.updateNowPlayingArtist = this.updateNowPlayingArtist.bind(this);
  this.setPlayerEvent = this.setPlayerEvent.bind(this);
  this.setPlayerReady = this.setPlayerReady.bind(this);
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

  setPlayerEvent(event) {
    this.setState({
      playerEvent: event
    });
  }

  setPlayerReady(boolValue) {
    this.setState({
      playerReady: boolValue
    });
  }

  render() {
    return(
      <div id="app">
        <MainSpace
          youtubeVideoId={this.state.youtubeVideoId}
          updateNowPlayingSongName={this.updateNowPlayingSongName}
          updateNowPlayingArtist={this.updateNowPlayingArtist}
          setPlayerEvent={this.setPlayerEvent}
          setPlayerReady={this.setPlayerReady}
          playerEvent={this.state.playerEvent}
        />
        <Player
          nowPlayinSongName={this.state.nowPlayinSongName}
          nowPlayingArtist={this.state.nowPlayingArtist}
          playerEvent={this.state.playerEvent}
          playerReady={this.state.playerReady}
        />
      </div>
    );
  }
}

 
export default App;