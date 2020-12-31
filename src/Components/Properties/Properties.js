import React, { Component } from 'react';

class Properties extends Component {
    render() {
        const greeting = 'Welcome to React';

        return (
            <div>
                <Greeting greeting={greeting}/>
            </div>
        );
    }
}
class Greeting extends Component {
    render() {
        return <h1>{this.props.greeting}</h1>;
    }
}
 
const Greeting = ({ greeting }) => <h1>{greeting.text}</h1>;

export default Properties;

// function Welcome(props) {
//     return <h1> Hello, {props.name}</h1>;
// }

// function GoalProgress(props) {
//     return <h1> You are {props.goal_prog} finished with your goal! Keep it up!</h1>;
// }