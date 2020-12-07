import axios from 'axios';
import React, {Component} from 'react';
import { Link } from "react-router-dom";


class Goals extends Component {
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
            newGoal: true
        }
    }
    toggleNewGoal = () => {
        this.setState({
            newGoal: !this.state.newGoal
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setNewGoal = async (e) => {
        e.preventDefault();
        const {goal_type, beg_date, end_date, target_number, time_zone, time_to_text, no_prog_days_of_wk, no_prog_cal_days} = this.state;
        try {
            const goal = await axios.post('/goals/setNewGoal', {goal_type, beg_date, end_date, target_number, time_zone, time_to_text, no_prog_days_of_wk, no_prog_cal_days})
            alert(goal);
            this.props.history.push('/feed')
        }
        catch(err){
            alert(err.response.request.response)
        }
    }
    
    render() {
        const {goal_type, beg_date, end_date, target_number, time_zone, time_to_text, no_prog_days_of_wk, no_prog_cal_days} = this.state;
        return (<div>
            {this.state.newGoal ?
            <div>
              <h1>Ready to Game Your Goals?</h1>
              <p> What are we counting? </p>
              <form onSubmit={e => this.setNewGoal(e)}>
                <input 
                    name="goal_type"
                    value={goal_type}
                    placeholder="(words, miles, steps)"
                    onChange={ e=> this.changeHandler(e)}
                /> 
              <p> When are you starting? </p>

              <input 
                    name="beg_date"
                    value={beg_date}
                    placeholder="Start Date"
                    onChange={ e=> this.changeHandler(e)}
                /> 
              <p> What is your finish date? </p>
              <input 
                    name="end_date"
                    value={end_date}
                    placeholder="Finish Date"
                    onChange={ e=> this.changeHandler(e)}
                /> 
              <p> How many total will complete your goal? </p>
              <input 
                    name="target_number"
                    value={target_number}
                    placeholder="No commas, please"
                    onChange={ e=> this.changeHandler(e)}
                /> 
              <p> Do you blackout any days from your progress?</p>
              {/* I want this to be a drop-down */}
              <input 
                    name="no_prog_days_of_wk"
                    value={no_prog_days_of_wk}
                    placeholder="days"
                    onChange={ e=> this.changeHandler(e)}
                /> 
                  <p> e.g. Sundays, holidays, your anniversary, or spouse's birthday</p>
                  {/* I want this to be a calendar drop-down as well, with selectable dates */}
                  <input 
                    name="no_prog_cal_days"
                    value={no_prog_cal_days}
                    placeholder="dates"
                    onChange={ e=> this.changeHandler(e)}
                /> 
                  <p> What is your time zone?</p>
                  <input 
                    name="time_zone"
                    value={time_zone}
                    placeholder="MST"
                    onChange={ e=> this.changeHandler(e)}
                /> 
                  {/* I want this to be a drop-down as well, US Time Zones only */}
                  <p> What time would you like to be texted your daily target?</p>
                  <input 
                    name="time_to_text"
                    value={time_to_text}
                    placeholder=""
                    onChange={ e=> this.changeHandler(e)}
                /> 
                 {/* This could be a drop-down with 15 minute increments */}

                <button>Submit</button>
              </form>
              <button onClick={this.toggleNewGoal}> Cancel input and start over? </button>
            </div>: null}
            </div>
        )
        
    }
}

export default Goals;  