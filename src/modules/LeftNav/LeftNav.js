import './LeftNav.css'
import React, { Component } from 'react';
import WebsiteLogo from '../MiniModules/WebsiteLogo/WebsiteLogo';
import NavLibrary from '../MiniModules/NavLibrary/NavLibrary';
import YoutubeVideo from '../MiniModules/YoutubeVideo/YoutubeVideo';

class LeftNav extends Component {

    render() { 
        return (
            <div id="left-nav">
                <WebsiteLogo />
                <NavLibrary />
                <YoutubeVideo />
            </div>
        );
    }
}
 
export default LeftNav;