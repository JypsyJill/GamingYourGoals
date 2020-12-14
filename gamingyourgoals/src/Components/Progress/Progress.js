import axios from 'axios';
import React, {Component} from 'react';
import { percentComplete, totalProgress, randomNumFromRange } from "../Mathematics/Mathematics";

class Progress extends Component {
    constructor(){
        super();      
    this.state = {
    goal_type: "",
    beg_date: "",
    end_date: "",
    target_number: '',
    time_zone: "",
    time_to_text: "",
    no_prog_days_of_wk: '',
    no_prog_cal_days: "",
    // days: "",
    // non_prog_days: "",
    // howManyWritten: "",
    goal_id: '',
    user_id: '',
  
    //user types in (dummy data rn)
    progress_for_the_day: '',
  
    //CALCULATED STATE (added on)
    goalPercent: "",
    random_challenge_for_the_day: "",
    updatedGoalRes: "",
    goal_prog: ''
   
}
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

updatedGoalRes = async (e) => {
    e.preventDefault()
    const {updatedGoalRes, progress_for_the_day} = await axios.post('/api/progress')
} 

progressSubmitted = async (e) => {
e.preventDefault()
    const { progressSubmitted, goalProgress, goalPercent, random_challenge_for_the_day } = this.state;
}
//    const { end_date, target_number, challengeNum, updatedGoalRes } = this.state
   // This represents goal_prog on state
//  goalProgress = totalProgress(updatedGoalRes)
//  goalPercent = percentComplete(target_number, goalProgress)
//  challengeNum = randomNumFromRange(target_number, goalProgress, end_date)
  
  
  
    // console.log("Words Written: ", goalProgress)
    // console.log("Goal Percentage: ", goalPercent)
    // console.log("Tomorrow's Challenge: ", challengeNum)
// progressSubmitted ()
        //   goalPercent, goal_prog: goalProgress, random_challenge_for_the_day: challengeNum
        // });
    // } catch (err) {
    //   console.log(err.response.request.response)
//     }

  

  
//   updatedGoalRes.push({progress_for_the_day: 1111})
//   console.log("/////////////////////NEXT DAY/////////////////")
//   progressSubmitted()
//   console.log("/////////////////////NEXT DAY/////////////////")
//   updatedGoalRes.push({progress_for_the_day: 11000})
//   progressSubmitted()

// render() 
render() {
    return (
        <div className="Progress">
            
               <h3>HOW DID YOU DO?</h3>
                <form onSubmit={e => this.progressSubmitted(e)}>
                    <input
                        name="progress_for_the_day"
                        value={this.state.progress_for_the_day}
                        placeholder="input your day's progress here"
                        onChange={ e => this.changeHandler(e)}
                        />
                </form>
                <button onClick={this.progressSubmitted}>Record my progress</button>


            </div>

    );
  }
}

export default Progress;
