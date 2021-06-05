import './ProgressbarContainer.css'
import React, { Component } from 'react';

class ProgressbarContainer extends Component {
    
    constructor(props) {
        super (props);

        this.setSeek = this.setSeek.bind(this);
    }

    setSeek(event) {
        // event.target.value will be out 100, since range is 0 to 100
        // so calculate number in seconds and call seekTo function, hailing from props

        this.props.playerEvent.target.seekTo(Math.floor((event.target.value * this.props.playerEvent.target.getDuration()) / 100));

    }

    addZeroIfSingleDigit(timeInSeconds) {
        let timeInSec = timeInSeconds
        if(Math.floor(timeInSec/10) === 0) {
            timeInSec = `0${timeInSec}`;
        }
        return timeInSec;
    }



    render() { 

        
        let progressbarValue = 0;

        // setting its style
        let inlineStyle = {
            background: `linear-gradient(90deg, var(--accent) ${0}%, var(--slider-color) ${0}%)`
        };


        // for elapsed time and duration
        let elapsedTimeInMinutes = 0;
        let elapsedTimeInSeconds = 0;
        let timeDurationInMinutes = 0;
        let timeDurationInSeconds = 0;

        //updating time variables
        if(this.props.playerEvent.target !== undefined) {

            //updating timers
            elapsedTimeInMinutes = Math.floor(this.props.playerEvent.target.getCurrentTime() / 60);
            elapsedTimeInSeconds = Math.floor(this.props.playerEvent.target.getCurrentTime() % 60);
            timeDurationInMinutes = Math.floor(this.props.playerEvent.target.getDuration() / 60);
            timeDurationInSeconds = Math.floor(this.props.playerEvent.target.getDuration() % 60);

            //add zero before single digit
            elapsedTimeInMinutes = this.addZeroIfSingleDigit(elapsedTimeInMinutes);
            elapsedTimeInSeconds = this.addZeroIfSingleDigit(elapsedTimeInSeconds);
            timeDurationInMinutes = this.addZeroIfSingleDigit(timeDurationInMinutes);
            timeDurationInSeconds = this.addZeroIfSingleDigit(timeDurationInSeconds);

            // progressbar value calculation to set value on input type=range and updating its style
            progressbarValue = (this.props.playerEvent.target.getCurrentTime() / this.props.playerEvent.target.getDuration()) * 100;
            if(isNaN(progressbarValue)) {
                progressbarValue = 0;
            }
            inlineStyle = {
                background: `linear-gradient(90deg, var(--accent) ${progressbarValue}%, var(--slider-color) ${progressbarValue}%)`
            };
            
        }

        return (
            <div className="progressbar-container">
                <input
                    type="range"
                    name="progressbar"
                    id="progressbar"
                    min="0"
                    max="100"
                    value={progressbarValue}
                    onChange={this.setSeek}
                    style={inlineStyle}
                />
                <div className="time-container">
                    <div className="time-elapsed" id="time-elapsed">
                        {elapsedTimeInMinutes + ':' + elapsedTimeInSeconds}
                    </div>
                    <div className="time-duration" id="time-duration">
                        {timeDurationInMinutes + ':' + timeDurationInSeconds}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProgressbarContainer;