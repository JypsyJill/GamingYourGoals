import React, {Component} from 'react';
import { Link } from "react-router-dom";
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
            <h3> This is how Gaming Your Goals works:
              <p> Input your target total number of whatever you're counting and your finish date. (words, miles, steps, dollars, etc.) </p> 
              <p>  Each day that you are working on your goal you will get a text with a randomly generated number of that item to work toward. </p>
               <p> Each evening you will report on your progress toward your goal and confirm that your next text will arrive at a specific time on the next prescribed day unless you cancel it. (We get it, life happens.)</p>
                <p>The progress counter will recalculate your average goal range and generate a random number according to your progress.  </p>

                
            </h3>
            <Link to="/goals">
                <button> I'm ready, let's set a goal! </button>
            </Link>
            <Link to="/progress">
                <button> Take me to my goal! </button>
            </Link>
          </div>

        );
      }
    }

export default Dashboard; 