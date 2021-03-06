import './YoutubeVideo.css'
import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opts: {
                height: '169',
                width: '300',
                playerVars: {
                    autoplay: 0,
                }
            },
        }
        this.videoOnReady = this.videoOnReady.bind(this);
    }

    videoOnReady(event) {

        this.props.setPlayerReady(true);
        this.props.setPlayerEvent(event);

        this.updateNowPlayingSongName("4URA - Find You");
        this.updateNowPlayingArtist("Frequency Music");
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