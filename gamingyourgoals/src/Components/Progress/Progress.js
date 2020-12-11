import axios from 'axios';
import React, {Component} from 'react';
import {dateDiff, getNumberOfWeekDays, getRndInteger, smallNum, getDaysArray, percentComplete} from "../Math/Math";

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
            goal_total: '',
            goalPercent: '',
            next_date_and_time_to_text: '',
            random_challenge_for_the_day: '',
            cjMin: '',
            cjMax: ''
        }
    }
    componentDidMount = async () => {
        const goal = await axios.get("/api/goal")
        this.setState(goal)
      }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

//total is the total amount of words (for example)
    progressSubmitted = async e => {
        e.preventDefault()
        try {

// put math functions to calculate state updates here
        getNumberOfWeekDays(this.state.end_date, this.state.beg_date, 0)
        dateDiff(this.state.end_date, this.state.beg_date)
        days = this.state.end_date - nonProgDays
        smallNum(getRndInteger(this.state.cjMin, cjMax))
        getDaysArray(e.getDay(beg_date, end_date))
        console.log(getDaysArray)

        const updatedGoalRes = await axios.post("/api/progress", this.state)
        const goalPercent = percentComplete(this.state.target_number, updatedGoalRes)
      
          this.setState({goalPercent})
        } catch (err) {
          console.log(err.response.request.response)
        }
      }
    render() {
        const {progress_for_the_day, next_date_and_time_to_text, random_challenge_for_the_day, goal_total, time} = this.state;
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
                <button onClick={this.toggleTime}>Record my progress</button>

            </div>


        
           
            // <div>
            //     <form onSubmit={e => this.setNewGoal(e)}>
                    
            // {goalInputsMapped.map(goalInput => (
            //     <div className="goal-input">
            //         <label htmlFor={goalInput.id}>{goalInput.label}</label>
            //         <input type={goalInput.type} id={goalInput.id} onChange={e => this.changeHandler(e)}/>
            //     </div>
            
            // ))}
            //     <button>Submit</button>
            //     </form>
            //   <button onClick={this.toggleNewGoal}> Cancel input and start over? </button>
            // </div>
            
        );
        
    }
}

export default Progress;
