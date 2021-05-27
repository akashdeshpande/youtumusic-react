import './MainSpace.css'
import React, { Component } from 'react';
import LeftNav from './../LeftNav/LeftNav';
import SearchBar from '../MiniModules/SearchBar/SearchBar';
import UserProfile from '../MiniModules/UserProfile/UserProfile';
import InfoMessage from '../MiniModules/InfoMessage/InfoMessage';
import LargeThumbnailVideoContainer from '../MiniModules/LargeThumbnailVideoContainer/LargeThumbnailVideoContainer';

import result from '../../test-result.json'

class MainSpace extends Component {

    constructor(props) {
        super(props);
        this.generateResults = this.generateResults.bind(this);
    }

    generateResults() {
        let individualLTVC = "";
        let combinedString = "";
        //<LargeThumbnailVideoContainer playerEvent={this.props.playerEvent} videoId="${}" imgUrl="${}" />
        result.items.forEach(element => {
            let videoTitle = element.snippet.title;
            let channelTitle = element.snippet.channelTitle;
            let imageUrl = element.snippet.thumbnails.maxres.url;
            let youtubeVideoId = element.id;

            individualLTVC = `<LargeThumbnailVideoContainer
                                playerEvent={this.props.playerEvent}
                                videoId="${youtubeVideoId}"
                                imgUrl="${imageUrl}"
                                videoTitle="${videoTitle}"
                                channelTitle="${channelTitle}"
                            ></LargeThumbnailVideoContainer>`
            combinedString = combinedString.concat(individualLTVC);
        });
        console.log(combinedString);
        return {__html: combinedString};
        //document.querySelector(".search-results").innerHTML = combinedString;
    }

    render() { 
        //this.generateResults();
        //console.log(result);
        return (
            <div id="main-space">
                <LeftNav
                youtubeVideoId={this.props.youtubeVideoId}
                updateNowPlayingSongName={this.props.updateNowPlayingSongName}
                updateNowPlayingArtist={this.props.updateNowPlayingArtist}
                setPlayerEvent={this.props.setPlayerEvent}
                setPlayerReady={this.props.setPlayerReady}
                />
                <div className="content">
                    <div className="top">
                        <SearchBar />
                        <UserProfile />
                    </div>
                    <InfoMessage />
                    <div className="workspace">
                        <div className="search-results">
                            {
                                result.items.map((element) => <LargeThumbnailVideoContainer
                                playerEvent={this.props.playerEvent}
                                videoId={element.id}
                                imgUrl={element.snippet.thumbnails.maxres.url}
                                videoTitle={element.snippet.title}
                                channelTitle={element.snippet.channelTitle}
                            />)
                            }
                            

                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default MainSpace;