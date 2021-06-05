import './SongDetailsContainer.css'
import React, { Component } from 'react';

class SongDetailsContainer extends Component {
    render() { 
        return (
            <div className="song-details-container">
                <div>
                    <div className="song-name">
                        {this.props.nowPlayingSongName}
                    </div>
                    <div className="artist-name">
                        {this.props.nowPlayingArtist}
                    </div>
                </div>
                <div className="song-detail-like-icon">
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}
 
export default SongDetailsContainer;