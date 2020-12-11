import axios from 'axios';
import React, {Component} from 'react';
import {dateDiff, getNumberOfWeekDays, getRndInteger, smallNum, getDaysArray} from "../Math/Math";

class Progress extends Component {
    constructor(){
        super();
        this.state = {
            goal_type: '',
            end_date: '',
            target_number: '',
            time_zone: '',
            time_to_text: '',
            no_prog_days_of_wk: '',
            no_prog_cal_days: '',
            goal_prog: '',
            progress_for_the_day:'',
            goal_total: '',
            checkinTime: 'false'
        }
    }

    toggleTime = () => {
        this.setState({
            checkinTime: !this.state.checkinTime
        })
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    
     totalGoal = async e => {
        e.preventDefault()
        try {
            const goal_total = await axios.post("/api/goal", this.state)
            alert(next_date_and_time_to_text)
            this.props.history.push("/feed")
        } catch (err) {
            alert(err.response.request.response)
        }
    }
    render() {
        const {progress_for_the_day, next_date_and_time_to_text, random_challenge_for_the_day, goal_total, time} = this.state;
        return (
            <div className="Progress">
            
               <h3>HOW DID YOU DO?</h3>
                <form onSubmit={e => this.update_goal(e)}>
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
