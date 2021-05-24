import './ProgressbarContainer.css'
import React, { Component } from 'react';

class ProgressbarContainer extends Component {
    state = {  }
    render() { 
        return (
            <div className="progressbar-container">
                <input type="range" name="progressbar" id="progressbar"></input>
                <div className="time-container">
                    <div className="time-elapsed" id="time-elapsed">
                        2:03
                    </div>
                    <div className="time-duration" id="time-duration">
                        5:05
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProgressbarContainer;