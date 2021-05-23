import albumart from './images/4URA-FindYou.jpg';
import './YoutubeVideo.css'
import React, { Component } from 'react';

class YoutubeVideo extends Component {
    state = {  }
    render() { 
        return (
            <img src={albumart} className="ytimage" alt="Youtube album art" />
        );
    }
}
 
export default YoutubeVideo;