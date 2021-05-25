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
                    currentTime={this.props.currentTime}
                    duration={this.props.duration}
                    playerEvent={this.props.playerEvent}
                />
            </div>
        );
    }
}
 
export default Player;