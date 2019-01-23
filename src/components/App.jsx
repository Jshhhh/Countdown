import React from 'react';
import './App.scss'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      events: [],
    };
  }

  render() {
    return (
      <section className='main'>
        <div className='header'>Countdown!</div>
        <input></input>
      </section>
    )
  }
};

export default App;