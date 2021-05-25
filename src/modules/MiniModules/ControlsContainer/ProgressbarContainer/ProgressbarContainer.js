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
        
        //Math.floor((event.target.value * this.props.duration) / 100)
        console.log(Math.floor((event.target.value * this.props.duration) / 100));

    }

    render() { 
        // progressbar value calculation to set value on input type=range
        let progressbarValue = (this.props.currentTime / this.props.duration) * 100;

        // setting its style
        //let progressbarProgressStyleString = `linear-gradient(90deg, var(--accent) ${progressbarValue}%, var(--slider-color) ${progressbarValue}%)`;
        //document.getElementById("progressbar").style.background = progressbarProgressStyleString;

        // for elapsed time and duration
        let elapsedTimeInMinutes = Math.floor(this.props.currentTime / 60);
        let elapsedTimeInSeconds = Math.floor(this.props.currentTime % 60);
        let timeDurationInMinutes = Math.floor(this.props.duration / 60);
        let timeDurationInSeconds = Math.floor(this.props.duration % 60);

        // set seek on inout change


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