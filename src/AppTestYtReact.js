import React, { Component } from 'react';

class ApptestYtReact extends Component {
    
    render() { 
        return (
            <div>
                <button onClick={this.props.playMyVideo}>Play Video</button>
                <button onClick={this.props.changeVideo}>Change Video</button>
            </div>
            
        );
    }
}
 
export default ApptestYtReact;