import './MainSpace.css'
import React, { Component } from 'react';
import LeftNav from './../LeftNav/LeftNav';

class MainSpace extends Component {
    render() { 
        return (
            <div id="main-space">
                <LeftNav
                youtubeVideoId={this.props.youtubeVideoId}
                updateNowPlayingSongName={this.props.updateNowPlayingSongName}
                updateNowPlayingArtist={this.props.updateNowPlayingArtist}
                />
                <div className="wheat-color">
                    Remaining space
                </div>
            </div>

        );
    }
}
 
export default MainSpace;