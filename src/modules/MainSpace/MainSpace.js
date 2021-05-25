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
                updateCurrentTime={this.props.updateCurrentTime}
                updateDuration={this.props.updateDuration}
                setPlayerEvent={this.props.setPlayerEvent}
                setPlayerReady={this.props.setPlayerReady}
                />
                <div className="content">
                    <div className="top">
                        <input type="text" id="search-bar" placeholder="Search..."/>
                        <div id="user-profile">

                        </div>
                    </div>
                    <div className="info-message">
                        <div>
                            I am a message
                        </div>
                        <div>
                            X
                        </div>
                    </div>
                    <div className="workspace">
                        I am a workspace
                    </div>
                </div>
            </div>

        );
    }
}
 
export default MainSpace;