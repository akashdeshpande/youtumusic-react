import './ControlButtonsContainer.css'
import React, { Component } from 'react';

class ControlButtonsContainer extends Component {
    constructor(props){
        super(props);
        this.playPause = this.playPause.bind(this);
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
                    <i className="fa fa-volume-up"></i>
                    <i className="fa fa-align-justify"></i>
                </div>
            </div>
        );
    }
}
 
export default ControlButtonsContainer;