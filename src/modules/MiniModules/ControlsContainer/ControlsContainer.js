import './ControlsContainer.css'
import React, { Component } from 'react';
import ProgressbarContainer from './ProgressbarContainer/ProgressbarContainer';
import ControlButtonsContainer from './ControlButtonsContainer/ControlButtonsContainer';

class ControlsContainer extends Component {
    render() { 
        return (
            <div className="controls-container">
                <ProgressbarContainer
                    currentTime={this.props.currentTime}
                    duration={this.props.duration}
                />
                <ControlButtonsContainer />
            </div>
        );
    }
}
 
export default ControlsContainer;