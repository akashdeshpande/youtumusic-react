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
                <YoutubeVideo
                youtubeVideoId={this.props.youtubeVideoId}
                updateNowPlayingSongName={this.props.updateNowPlayingSongName}
                updateNowPlayingArtist={this.props.updateNowPlayingArtist}
                updateCurrentTime={this.props.updateCurrentTime}
                updateDuration={this.props.updateDuration}
                />
            </div>
        );
    }
}
 
export default LeftNav;