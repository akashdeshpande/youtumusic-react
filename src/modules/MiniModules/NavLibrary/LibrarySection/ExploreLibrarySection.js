import './LibrarySection.css'
import React, { Component } from 'react';

class ExploreLibrarySection extends Component {
    render() { 
        return (
            <div className="library-section">
                <div className="library-section-heading">
                    Explore
                </div>
                <div classname="library-items">
                    <div className="library-item">
                        <div className="fa fa-search"></div>
                        <div className="library-item-text">
                            Explore
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ExploreLibrarySection;