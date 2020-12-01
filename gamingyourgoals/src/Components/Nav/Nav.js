import axios from 'axios';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {

    render() {

        return(

            <div>
                <h1>Nav</h1>
                <Link to='/.Dashboard'>
                    <button> Home </button>
                </Link>
                <Link to="/.Post">
                    <button> New Goal </button>
                </Link>
                <Link to="/.Auth">
                    <button> Logout </button>
                </Link>
            </div>
        );
    }
}

export default Nav;