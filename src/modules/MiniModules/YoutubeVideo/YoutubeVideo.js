import './YoutubeVideo.css'
import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends Component {
    constructor(props){
        super(props);
        this.state = {
            opts: {
                height: '169',
                width: '300',
                playerVars: {
                  autoplay: 0,
                },
            pageInterval: () => {  },
            
            }
        }
        this.videoOnReady = this.videoOnReady.bind(this);
    }

    videoOnReady(event) {
        //console.log(event.target.getPlayerState());

        this.props.setPlayerEvent(event);
        
        this.updateNowPlayingSongName("4URA - Find You");
        this.updateNowPlayingArtist("Frequency Music");
        this.setState({
            pageInterval: setInterval(() => {
                                this.updateCurrentTime(event.target.getCurrentTime());
                                this.updateDuration(event.target.getDuration());
                          }, 100)
        });
    }

    updateCurrentTime(timeInSeconds) {
        this.props.updateCurrentTime(timeInSeconds);
    }

    updateDuration(timeInSeconds) {
        this.props.updateDuration(timeInSeconds);
    }
    
    updateNowPlayingSongName(songName) {
        this.props.updateNowPlayingSongName(songName);
    }

    updateNowPlayingArtist(artistName) {
        this.props.updateNowPlayingArtist(artistName);
    }

    render() { 
        return (
            <div className="ytimage">
                <YouTube
                videoId={this.props.youtubeVideoId}
                opts={this.state.opts}
                onReady={this.videoOnReady}
                id="youtubePlayer" />
            </div>
        );
    }
}
 
export default YoutubeVideo;

/* 
updateCurrentTime={this.props.updateCurrentTime}
updateDuration={this.props.updateDuration}

setupInterval() {
    let pageInterval = setInterval(() => {
      console.log("helo");
    }, 5000);
  }

*/