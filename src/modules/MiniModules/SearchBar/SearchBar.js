import './SearchBar.css'
import React, { Component } from 'react';

class SearchBar extends Component {
    render() { 
        return (
            <div className="search-bar-container">
                <input type="text" id="search-bar" placeholder="Search..."/>
            </div>
        );
    }
}
 
export default SearchBar;