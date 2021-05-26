import './ControlButtonsContainer.css'
import React, { Component } from 'react';

class ControlButtonsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            volumeControlValue: 100
        }
        this.playPause = this.playPause.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.muteVideo = this.muteVideo.bind(this);
        this.volumeHover = this.volumeHover.bind(this);
        this.volumeClick = this.volumeClick.bind(this);
    }

    playPause(event) {
        if(this.props.playerEvent.target) {
            let playBtn = document.querySelector(".play-btn");
            let currentPLayerState = this.props.playerEvent.target.getPlayerState();
            if(currentPLayerState === 1) {
                // video is playing
                this.props.playerEvent.target.pauseVideo();
                playBtn.classList.add("fa-play");
                playBtn.classList.remove("fa-pause");
            } else if (currentPLayerState === 2) {
                // video is paused
                this.props.playerEvent.target.playVideo();
                playBtn.classList.remove("fa-play");
                playBtn.classList.add("fa-pause");
            }
        }
    }

    setVolume(event) {
        //set volume
        this.props.playerEvent.target.setVolume(event.target.value);
        //update div
        document.querySelector("#volume-control").style.background = `linear-gradient(90deg, var(--accent) ${event.target.value}%, var(--slider-color) ${event.target.value}%)`;
        this.setState({
            volumeControlValue: event.target.value
        });
    }

    muteVideo(event) {
        //volume-mute
    }

    volumeHover() {
        document.querySelector(".volume-bar").style.display = "flex";
        setTimeout(() => {
            document.querySelector(".volume-bar").style.display = "none";
        }, 3000);
    }

    volumeClick(event){
        //set mute
        //this.props.playerEvent.isMuted();
        //this.props.playerEvent.mute();
        //this.props.playerEvent.unMute();
        //#volumeBtn
        if(this.props.playerEvent.target) {
            if(this.props.playerEvent.target.isMuted()) {
                //umnute player
                this.props.playerEvent.target.unMute();
                //update icon
                document.querySelector("#volumeBtn").classList.remove("fa-volume-mute");
                document.querySelector("#volumeBtn").classList.add("fa-volume-up");
            } else {
                //mute player
                this.props.playerEvent.target.mute();
                //update icon
                document.querySelector("#volumeBtn").classList.add("fa-volume-mute");
                document.querySelector("#volumeBtn").classList.remove("fa-volume-up");
            }
        }
        
        //update icon
    }

    render() { 
        return (
            <div className="contol-buttons-container">
                <div className="left-buttons"></div>
                <div className="prev-play-next">
                    <i className="fa fa-step-backward prev-btn"></i>
                    <i
                        className="fa fa-play play-btn"
                        onClick={this.playPause}
                    ></i>
                    <i className="fa fa-step-forward next-btn"></i>
                </div>
                <div className="right-buttons">
                    <div className="volume-section">
                        <div className="volume-bar">
                            <input
                            type="range"
                            id="volume-control"
                            min="0"
                            max="100"
                            value={this.state.volumeControlValue}
                            onChange={this.setVolume}
                            onClick={this.muteVideo}
                            ></input>
                        </div>
                        <div className="right-button">
                            <i
                            className="fa fa-volume-up"
                            id="volumeBtn"
                            onMouseOver={this.volumeHover}
                            onClick={this.volumeClick}
                            ></i>
                        </div>
                        
                    </div>
                    <div className="right-button">
                        <i className="fa fa-align-justify"></i>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ControlButtonsContainer;