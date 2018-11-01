import React, {Component} from 'react';

// Stateful Style
class Person extends Component {
    render(){
        return (
            <div>
                <p onClick={this.props.clicked}> this is {this.props.firstName} {this.props.lastName} custromized component </p>
                <input onChange={this.props.changed} value={this.props.firstName} />
                {this.props.children}
            </div>
        )
    }
}
// Stateless Style
// const person = (props) => {
//     return (
//         <div>
//             <p onClick={props.clicked}> this is {props.firstName} {props.lastName} custromized component </p>
//             <input onChange={props.changed} value={props.firstName} />
//             {props.children}
//         </div>
//     )
// };


export default Person;