import './LargeThumbnailVideoContainer.css'
import React, { Component } from 'react';

class LargeThumbnailVideoContainer extends Component {
    constructor(props) {
        super(props);
        this.loadAndPlayVideo = this.loadAndPlayVideo.bind(this);
    }

    loadAndPlayVideo(event) {
        //ilt0gIhyPUQ is video id
        // also works: loadVideoByUrl

        //get that modules id, which is set to video id

        //load id to player
        this.props.playerEvent.target.loadVideoById(this.props.videoId);

        //update song name and channel name
        this.props.updateNowPlayingSongName(this.props.videoTitle);
        this.props.updateNowPlayingArtist(this.props.channelTitle);
    }

    /*
    getAlbumArtBackgroundString() {
        let string = `var(--mid-dark-grey) url("${this.props.imgUrl}") no-repeat center/cover`;
        return string;
    }
    */

    render() { 
        return (
            <div className="large-thumbnail-video-container" id="ilt0gIhyPUQ">
                <div className="album-art"
                style={{background: `var(--mid-dark-grey) url("${this.props.imgUrl}") no-repeat center/cover`}}>
                    <div className="album-art-overlay">
                        <div className="album-art-play">
                            <i
                                className="fa fa-play album-art-play-icon"
                                onClick={this.loadAndPlayVideo}
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="song-details">
                    <div className="song-name thumbnail-text-width">
                        {this.props.videoTitle}
                    </div>
                    <div className="artist-name thumbnail-text-width">
                        {this.props.channelTitle}
                    </div>
                </div>
            </div>

        );
    }
}
 
export default LargeThumbnailVideoContainer;