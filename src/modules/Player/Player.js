import './Player.css'
import React, { Component } from 'react';
import SongDetailsContainer from '../MiniModules/SongDetailsContainer/SongDetailsContainer';
import ControlsContainer from '../MiniModules/ControlsContainer/ControlsContainer';

class Player extends Component {
    render() { 
        return (
            <div id="player">
                <SongDetailsContainer
                    nowPlayinSongName={this.props.nowPlayinSongName}
                    nowPlayingArtist={this.props.nowPlayingArtist}
                />
                <ControlsContainer
                    playerEvent={this.props.playerEvent}
                    playerReady={this.props.playerReady}
                />
            </div>
        );
    }
}
 
export default Player;