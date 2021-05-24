import './LibrarySection.css'
import React, { Component } from 'react';

class ExploreLibrarySection extends Component {
    render() { 
        return (
            <div className="library-section">
                <div className="library-section-heading">
                    Explore
                </div>
                <div className="library-items">
                    <div className="library-item library-item-active">
                        <div className="fa fa-search"></div>
                        <div className="library-item-text">
                            Discover
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ExploreLibrarySection;