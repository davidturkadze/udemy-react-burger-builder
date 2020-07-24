import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    username: 'supermax'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  deletePersonHandler = (personIndex) => {
    //copy of the original array
    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  //toggle show hide persons on button click
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null;
    let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}

        </div>
      )
      btnClass = classes.Red
    }

    //css class list
    const assifnedClasses = []

    if (this.state.persons.length <= 2) {
      assifnedClasses.push(classes.red)  //assifnedClasses = ['red']
    }

    if (this.state.persons.length <= 1) {
      assifnedClasses.push(classes.bold)  //assifnedClasses = ['red bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assifnedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {persons}

        {/*<h1>Tests</h1>
          <UserInput
           changed={this.usernameChangedHandler} 
           currentName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName="Max"/>*/ }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


//usage of Radium
export default App;
