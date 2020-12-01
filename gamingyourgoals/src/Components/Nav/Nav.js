import axios from 'axios';
import React, {Component} from 'react';

class Nav extends Component {

    render() {

        return(

            <div>
                <h1>Nav</h1>
                <button> Home </button>
                <button> New Goal </button>
                <button> Logout </button>
            </div>
        );
    }
}

export default Nav;