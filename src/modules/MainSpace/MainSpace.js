import './MainSpace.css'
import React, { Component } from 'react';
import LeftNav from './../LeftNav/LeftNav';
import SearchBar from '../MiniModules/SearchBar/SearchBar';
import UserProfile from '../MiniModules/UserProfile/UserProfile';
import InfoMessage from '../MiniModules/InfoMessage/InfoMessage';

class MainSpace extends Component {
    render() { 
        return (
            <div id="main-space">
                <LeftNav
                youtubeVideoId={this.props.youtubeVideoId}
                updateNowPlayingSongName={this.props.updateNowPlayingSongName}
                updateNowPlayingArtist={this.props.updateNowPlayingArtist}
                setPlayerEvent={this.props.setPlayerEvent}
                setPlayerReady={this.props.setPlayerReady}
                />
                <div className="content">
                    <div className="top">
                        <SearchBar />
                        <UserProfile />
                    </div>
                    <InfoMessage />
                    <div className="workspace">
                        I am a workspace
                    </div>
                </div>
            </div>

        );
    }
}
 
export default MainSpace;