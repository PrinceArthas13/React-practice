import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Dennis', age: 26 },
      { name: 'Kiyah', age: 18 },
      { name: 'Kylie', age: 6 },
      { name: 'Stark', age: 1 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log('Was clicked');
    // DONT DO THIS: this.state.persons[0].name = "The Menace";
    this.setState({
      persons: [
        { name: 'Dennis', age: 26 },
        { name: 'Kiyah', age: 18 },
        { name: 'Kylie', age: 6 },
        { name: 'Stark', age: 13 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hi, I'm a react App</h1>
        <p>This is working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} >Hobbies: Fucking shit up</Person>
      </div>
    );
    // return React.createElement('div', {className: ' App'}, React.createElement('h1', null, "I love you!!"));
  }
}

export default App;
