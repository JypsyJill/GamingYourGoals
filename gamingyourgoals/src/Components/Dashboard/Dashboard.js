import React, {Component} from 'react';
import { Link } from "react-router-dom";
import posts from "./../../post_data.json";
// import "./Post.css";

class Dashboard extends Component {
    render() {
        return (
          <div className="Dashboard">
            <h1>Welcome to the DevMountain tech blog!</h1>
            <h2>Head over to the topic browser to see all the latest posts!</h2>
          </div>
        );
      }
    }

export default Dashboard; 