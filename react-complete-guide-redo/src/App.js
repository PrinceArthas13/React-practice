import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Dennis', age: 26 },
      { name: 'Kiyah', age: 18 },
      { name: 'Kylie', age: 6 },
      { name: 'Stark', age: 1 }
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DONT DO THIS: this.state.persons[0].name = "The Menace";
    setPersonsState({
      persons: [
        { name: 'Dennis', age: 26 },
        { name: 'Kiyah', age: 18 },
        { name: 'Kylie', age: 6 },
        { name: 'Stark', age: 13 }
      ]
    });
  };

  return (
    <div className="App">
      <h1 className="App-title">Hi, I'm a react App</h1>
      <p>This is working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age} >
        Hobbies: Being a brat.
      </Person>
    </div>
  );
    // return React.createElement('div', {className: ' App'}, React.createElement('h1', null, "I love you!!"));
};

export default app;
