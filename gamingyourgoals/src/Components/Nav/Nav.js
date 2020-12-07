import axios from 'axios';
import React, {Component} from 'react';
import { Link, useHistory } from "react-router-dom";
// import {connect} from "react-redux"
// import {logoutUser} from "../../redux/reducer"

const Nav = () => {
    const history = useHistory()
    const logout = async () => {
        try {
            await axios.post("/auth/logout")
            // logoutUser()
            history.push("/")
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Gaming Your Goals</h1>
            <Link to='/dashboard'>
                <button> Home </button>
            </Link>
    
           
            <button onClick={() => logout()}> Logout </button>
        </div>
    );
}

// export default connect(null, { logoutUser })(Nav)
export default Nav