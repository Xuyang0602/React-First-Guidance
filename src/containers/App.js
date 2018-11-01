import React, { Component } from 'react';
import Persons from '../conponents/Persons/Persons'
import Cockpit from '../conponents/Cockpit/Cockpit'

import '../containers/App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'sadsa1', firstName: 'Shawn', lastName: 'Wang'},
      {id: 'sadsasadsa', firstName: 'Ben', lastName: 'Wang'},
      {id: 'sadsaweq', firstName: 'Gordon', lastName: 'Wang'},

    ],
    otherStates: "",
    showPersons: false,
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {firstName: 'Ben', lastName: 'Wang'}
      ]
    });
  }

  changedNameHandler = (event, id) => {
    // find person idx;
    const personIdx = this.state.persons.findIndex(person => {
      return person.id === id
    });

    // Deep copy person;
    // const person = {...this.state.persons[personIdx]}; 
    const person = Object.assign(this.state.persons[personIdx]);
    person.firstName = event.target.value;

    const persons = [...this.state.persons];
    persons[personIdx] = person;

    this.setState({persons: persons});
  }

  toggleNamedArrea = () => {
    const display = this.state.showPersons;
    this.setState({showPersons: !display});
  }

  deleteNameHandler = (personIdx) => {
    // Bad Practise
    // let personsArr = this.state.persons;

    // Good Practise - Options - 1
    // let personsArr = this.state.persons.slice();

    // Good Practise - Options - 2 (ES6)
    let personsArr = [...this.state.persons];


    personsArr.splice(personIdx, 1);
    this.setState({
      persons: personsArr
    });
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deleteNameHandler}
            changed={this.changedNameHandler}/>
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit toggled={this.toggleNamedArrea}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "this is done!"));
  }
}

export default App;
