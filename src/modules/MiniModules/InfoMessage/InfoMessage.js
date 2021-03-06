import './InfoMessage.css'
import React, { Component } from 'react';


class InfoMessage extends Component {

    constructor(props) {
        super(props);
        this.closeMessage = this.closeMessage.bind(this);
    }

    closeMessage(event) {
        document.querySelector(".info-message").style.display = "none";
    }

    render() { 
        return (
            <div className="info-message">
                <div className="message-body">
                    In case of any error or info, this bar will be displayed
                </div>
                <div>
                    <i
                    className="fa fa-times message-close"
                    onClick={this.closeMessage}
                    ></i>
                </div>
            </div>
        );
    }
}
 
export default InfoMessage;