import axios from 'axios';
import React, { Component } from 'react';
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
            goal_id: '',
            user_id: '',
            progress_for_the_day: '',
            goalPercent: "15",
            random_challenge_for_the_day: "2175",
            goal_prog: '2100',
            totalProgress: '2100'
    
}
    }
    async componentDidMount () {
        const goal = await axios.get("/api/goal")
        this.setState(goal.data)
    }
        changeHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    // async componentDidMount () {
    //     const results = await axios.get("/api/prog_date_time_progress")
    //     this.setState(results.data)
    // }

totalGoal = async (e) => {
    e.preventDefault()
    const {totalProgress, progress_for_the_day, getNumberOfDaysOff, getRndChallengeNum, dateDiff, randomNumFromRange} = await axios.post('/api/progress')
} 

progressSubmitted = async (e) => {
e.preventDefault()
const { progressSubmitted, totalProgress, goalPercent, random_challenge_for_the_day } = this.state;

}


  

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

                <h3> Here's how you're doing so far:</h3>



            </div>

    );
  }
}

export default Progress;
