import './ControlsContainer.css'
import React, { Component } from 'react';
import ProgressbarContainer from './ProgressbarContainer/ProgressbarContainer';
import ControlButtonsContainer from './ControlButtonsContainer/ControlButtonsContainer';

class ControlsContainer extends Component {
    render() { 
        return (
            <div className="controls-container">
                <ProgressbarContainer
                    playerEvent={this.props.playerEvent}
                    playerReady={this.props.playerReady}
                />
                <ControlButtonsContainer />
            </div>
        );
    }
}
 
export default ControlsContainer;