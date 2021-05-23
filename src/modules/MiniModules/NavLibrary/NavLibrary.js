import './NavLibrary.css'
import React, { Component } from 'react';
import ExploreLibrarySection from './LibrarySection/ExploreLibrarySection';
import YourMusicLibrarySection from './LibrarySection/YourMusicLibrarySection';
import PlaylistsLibrarySection from './LibrarySection/PlaylistsLibrarySection';

class NavLibrary extends Component {
    render() { 
        return (
            <div className="library">
                <ExploreLibrarySection />
                <YourMusicLibrarySection />
                <PlaylistsLibrarySection />
            </div>
        );
    }
}
 
export default NavLibrary;