import axios from 'axios';
import React, {Component} from 'react';
// import { Link } from "react-router-dom";


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
            
        }
    }
    toggleNewGoal = () => {
        this.setState({
            newGoal: !this.state.newGoal
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    setNewGoal = async e => {
        e.preventDefault()
        try {
            const goal = await axios.post("/api/goal/setNewGoal", this.state)
            alert(goal)
            this.props.history.push("/feed")
        } catch (err) {
            alert(err.response.request.response)
        }
    }
    
    render() {
        const goalInputsMapped = [
            {id: "goal_type", label: "What are we counting? (words, steps, miles)", type: "text"},
            {id: "beg_date", label: "When are you starting?", type: "date"},
            {id: "end_date", label: "When are you finishing?", type: "date"},
            {id: "target_number", label: "How many total will complete your goal? " , type: "number" },
            {id: "time_zone", label: "What is your time zone?" , type: "text" },
            {id: "time_to_text", label: "What time would you like to receive your challenge each day?", type: "time" },
            {id: "no_prog_days_of_wk", label:"Do you black out any days of the week from your progress? (like Sundays, etc.)" , type: "text" },
            {id: "no_prog_cal_days", label: "Are there any specific dates you're not going to work on?" , type: "date" }
          ];
        return (
           
            <div>
                <form onSubmit={e => this.setNewGoal(e)}>
                    
            {goalInputsMapped.map(goalInput => (
                <div className="goal-input">
                    <label htmlFor={goalInput.id}>{goalInput.label}</label>
                    <input type={goalInput.type} id={goalInput.id} onChange={e => this.changeHandler(e)}/>
                </div>
            
            ))}
                <button>Submit</button>
                </form>
              <button onClick={this.toggleNewGoal}> Cancel input and start over? </button>
            </div>
            
        )
        
    }
}

export default Goals;  



