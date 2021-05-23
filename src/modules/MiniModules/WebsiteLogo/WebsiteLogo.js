import './WebsiteLogo.css'
import logoAndName from './module-assets/logo/logoAndName.png'
import React, { Component } from 'react';

class WebsiteLogo extends Component {

    render() { 
        return (
            <div class="logo-container">
                <img class="nav-logo" src={logoAndName} alt="Logo" />
            </div>
        );
    }
}
 
export default WebsiteLogo;