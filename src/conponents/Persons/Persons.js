import React, { Component } from 'react';
import Person from './Person/Person';

// Stateful Style
class Persons extends Component {
    render() {
        return this.props.persons.map((person, idx) => {
            return <Person 
                    firstName={person.firstName} 
                    lastName={person.lastName}
                    clicked={() => this.props.clicked(idx)}
                    changed={(event) => this.props.changed(event, person.id)}
                    key={person.id}
                    > this is the children component </Person>
                });
    }
}


// Stateless Style
// const persons = (props) => props.persons.map((person, idx) => {
//     return <Person 
//             firstName={person.firstName} 
//             lastName={person.lastName}
//             clicked={() => props.clicked(idx)}
//             changed={(event) => props.changed(event, person.id)}
//             key={person.id}
//             > this is the children component </Person>
//         });

export default Persons;
