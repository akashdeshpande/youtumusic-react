import './ControlsContainer.css'
import React, { Component } from 'react';
import ProgressbarContainer from './ProgressbarContainer/ProgressbarContainer';
import ControlButtonsContainer from './ControlButtonsContainer/ControlButtonsContainer';



class ControlsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keepRunning: true
        }
    }

    componentDidMount() {
        setInterval(() => {
            if(this.props.playerEvent.target) {
                this.setState({
                    keepRunning: true // just to keep it running to it updates state continuously, so it updates continuously
                }) 
            }
        }, 100);
    }
    
    render() { 
        return (
            <div className="controls-container">
                <ProgressbarContainer
                    playerEvent={this.props.playerEvent}
                    playerReady={this.props.playerReady}
                />
                <ControlButtonsContainer
                    playerEvent={this.props.playerEvent}
                />
            </div>
        );
    }
}
 
export default ControlsContainer;