import './ProgressbarContainer.css'
import React, { Component } from 'react';

class ProgressbarContainer extends Component {
    
    constructor(props) {
        super (props);
        this.state = {
            pageInterval: () => {  },
            currentTime: 0,
            duration: 0,
            localPlayerReadyState: false,
            progressbarValue: 0
        }
        this.setSeek = this.setSeek.bind(this);
        this.updateCurrentTime = this.updateCurrentTime.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateLocalPlayerReadyState = this.updateLocalPlayerReadyState.bind(this);
        this.updateProgressbarValue = this.updateProgressbarValue.bind(this);
    }

    componentDidMount() {
        this.startSetInterval();
    }

    startSetInterval() {
        if(this.props.playerReady){
            this.setState({
                pageInterval: setInterval(() => {
                                    this.updateCurrentTime(this.props.playerEvent);
                                    this.updateDuration(this.props.playerEvent);
                                    this.updateLocalPlayerReadyState(this.props.playerReady);
                                    this.updateProgressbarValue(this.props.playerEvent);
                              }, 100)
            });
        }
    }

    updateCurrentTime(event) {
        this.setState({
            currentTime: event.target.getCurrentTime()
        });
    }

    updateDuration(event) {
        this.setState({
            duration: event.target.getDuration()
        });
    }

    updateLocalPlayerReadyState(value) {
        this.setState({
            localPlayerReadyState: value
        });
    }

    updateProgressbarValue(event){
        // progressbar value calculation to set value on input type=range
        this.setState({
            progressbarValue: (event.target.getCurrentTime() / event.target.getDuration()) * 100
        });
    }

    setSeek(event) {
        // event.target.value will be out 100, since range is 0 to 100
        // so calculate number in seconds and call seekTo function, hailing from props
        
        //Math.floor((event.target.value * this.props.duration) / 100)
        this.props.playerEvent.target.seekTo(Math.floor((event.target.value * this.props.duration) / 100));
    }

    render() { 
        // progressbar value calculation to set value on input type=range

        // setting its style
        if(this.state.localPlayerReadyState) {
            let progressbarProgressStyleString = `linear-gradient(90deg, var(--accent) ${this.state.progressbarValue}%, var(--slider-color) ${this.state.progressbarValue}%)`;
            document.getElementById("progressbar").style.background = progressbarProgressStyleString;
        }
        

        // for elapsed time and duration
        let elapsedTimeInMinutes = Math.floor(this.state.currentTime / 60);
        let elapsedTimeInSeconds = Math.floor(this.state.currentTime % 60);
        let timeDurationInMinutes = Math.floor(this.state.duration / 60);
        let timeDurationInSeconds = Math.floor(this.state.duration % 60);

        // set seek on inout change


        return (
            <div className="progressbar-container">
                <input
                    type="range"
                    name="progressbar"
                    id="progressbar"
                    min="0"
                    max="100"
                    value={this.state.progressbarValue}
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