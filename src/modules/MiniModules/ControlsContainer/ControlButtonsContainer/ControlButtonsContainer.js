import './ControlButtonsContainer.css'
import React, { Component } from 'react';

class ControlButtonsContainer extends Component {
    render() { 
        return (
            <div className="contol-buttons-container">
                <div className="left-buttons"></div>
                <div className="prev-play-next">
                    <i className="fa fa-step-backward prev-btn"></i>
                    <i className="fa fa-play play-btn"></i>
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