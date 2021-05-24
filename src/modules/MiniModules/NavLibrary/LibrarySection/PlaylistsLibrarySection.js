import './LibrarySection.css'
import React, { Component } from 'react';

class PlaylistsLibrarySection extends Component {

    render() { 
        return (
            <div className="library-section">
                <div className="library-section-heading">
                    Playlists
                </div>
                <div className="library-items">
                    <div className="library-item">
                        <div className="fa fa-list"></div>
                        <div className="library-item-text">
                            Bollywood Classics
                        </div>
                    </div>
                    <div className="library-item">
                        <div className="fa fa-list"></div>
                        <div className="library-item-text">
                            Summer Tunes
                        </div>
                    </div>
                    <div className="library-item">
                        <div className="fa fa-list"></div>
                        <div className="library-item-text">
                            Sunday Trip
                        </div>
                    </div>
                    <div className="library-item">
                        <div className="fa fa-list"></div>
                        <div className="library-item-text">
                            Cool Vibes
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PlaylistsLibrarySection;