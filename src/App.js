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
      currentTime: 0,
      duration: 0,
      playerEvent: {},
      playerReady: false
    }
  this.updateNowPlayingSongName = this.updateNowPlayingSongName.bind(this);
  this.updateNowPlayingArtist = this.updateNowPlayingArtist.bind(this);
  this.updateCurrentTime = this.updateCurrentTime.bind(this);
  this.updateDuration = this.updateDuration.bind(this);
  this.setPlayerEvent = this.setPlayerEvent.bind(this);
  this.setPlayerReady = this.setPlayerReady.bind(this);
  }

  updateCurrentTime(timeInSeconds) {
    this.setState({
      currentTime: timeInSeconds
    });
  }

  updateDuration(timeInSeconds) {
    this.setState({
      duration: timeInSeconds
    });
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
          updateCurrentTime={this.updateCurrentTime}
          updateDuration={this.updateDuration}
          setPlayerEvent={this.setPlayerEvent}
          setPlayerReady={this.setPlayerReady}
        />
        <Player
          nowPlayinSongName={this.state.nowPlayinSongName}
          nowPlayingArtist={this.state.nowPlayingArtist}
          currentTime={this.state.currentTime}
          duration={this.state.duration}
          playerEvent={this.state.playerEvent}
          playerReady={this.state.playerReady}
        />
      </div>
    );
  }
}

 
export default App;