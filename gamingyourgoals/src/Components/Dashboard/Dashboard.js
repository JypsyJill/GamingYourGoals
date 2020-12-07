import React, {Component} from 'react';
import { Link } from "react-router-dom";
import posts from "./../../post_data.json";
// import "./Goals.css";

class Dashboard extends Component {
    render() {
        return (
          <div className="Dashboard">
            <h1>Ready to Game Your Goals?</h1>
            <h3>How much easier is completing your goal if you make a game of it?  Here are the components of "game":</h3>
            <h3> 1. Voluntary participation </h3>
            <h3> 2. Rules </h3>
            <h3> 3. Objective </h3>
            <h3> 4. Feedback </h3>
            <h3> This is a goal-tracking and "gaming" app. The most successful goals are measured closely and courses corrected if short-term goals are not met. Can we help you meet your goal?  </h3>
            <Link to="/goals">
                <button> I'm ready, let's set a goal! </button>
            </Link>
          </div>

        );
      }
    }

export default Dashboard; 