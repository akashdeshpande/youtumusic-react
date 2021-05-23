import './MainSpace.css'
import React, { Component } from 'react';
import LeftNav from './../LeftNav/LeftNav';

class MainSpace extends Component {
    render() { 
        return (
            <div id="main-space">
                <LeftNav />
                <div class="wheat-color">
                    Remaining space
                </div>
            </div>

        );
    }
}
 
export default MainSpace;