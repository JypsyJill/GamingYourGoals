import axios from 'axios';
import React, {Component} from 'react';
import {dateDiff, getNumberOfWeekDays, getRndInteger, smallNum, percentComplete, cjMinCalc, cjMaxCalc} from "../Mathematics/Mathematics";

class Progress extends Component {
    constructor(){
        super();
        this.state = {
            goal_type: '',
            beg_date: '',
            end_date: '',
            target_number: '',
            time_zone: '',
            time_to_text: '',
            no_prog_days_of_wk: '',
            no_prog_cal_days: '',
            goal_prog: '',
            progress_for_the_day:'',
            goalPercent: '',
            next_date_and_time_to_text: '',
            random_challenge_for_the_day: '',
            cjMin: '',
            cjMax: '',
            days: '',
            non_prog_days: ''
        }
    }
     async componentDidMount () {
        const goal = await axios.get("/api/goal")
        this.setState(goal.data)
        console.log(goal)
      }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

// total is the total amount of words (for example)
progressSubmitted = async e => {
    e.preventDefault()
    const { beg_date, end_date, target_number, goal_prog } = this.state
    const howManyWritten = target_number - goal_prog
  
    const numOfWeekDays = getNumberOfWeekDays(beg_date, end_date)
    const dateDifference = dateDiff(beg_date, end_date)
    const min = cjMinCalc(howManyWritten, dateDifference)
    const max = cjMaxCalc(howManyWritten, dateDifference)
    const random_challenge_for_the_day = smallNum(getRndInteger(min, max))
  
    try {
      const updatedGoalRes = await axios.post("/api/progress", this.state)
      const goalPercent = percentComplete(target_number, updatedGoalRes)
  
      this.setState({goalPercent})
    } catch (err) {
      console.log(err.response.request.response)
    }
  }
    render() {
        const {progress_for_the_day, next_date_and_time_to_text, random_challenge_for_the_day, goal_prog, time} = this.state;
        return (
            <div className="Progress">
            
               <h3>HOW DID YOU DO?</h3>
                <form onSubmit={e => this.progressSubmitted(e)}>
                    <input
                        name="progress_for_the_day"
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
