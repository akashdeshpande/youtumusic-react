import './LibrarySection.css'
import React, { Component } from 'react';

class YourMusicLibrarySection extends Component {

    render() { 
        return (
            <div className="library-section">
                <div className="library-section-heading">
                    Your Music
                </div>
                <div classname="library-items">
                    <div className="library-item">
                        <div className="fa fa-heart"></div>
                        <div className="library-item-text">
                            Favorites
                        </div>
                    </div>
                    <div className="library-item">
                        <div className="fa fa-history"></div>
                        <div className="library-item-text">
                            Play History
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default YourMusicLibrarySection;
