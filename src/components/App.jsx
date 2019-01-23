import React from 'react';
import Calendar from 'react-calendar';
import './App.scss'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      events: [],
      showCalendar: false,
      date: new Date(),
    };
  }

  onClickDateInput = () => {
    this.setState({showCalendar: true});
  }

  onChangeEvent = e => {
    this.setState({input: e.target.value})
  }

  onChangeDate = date => {
    this.setState({
      date,
      showCalendar: false
    })
  }

  render() {
    return (
      <section className='main'>
        <div className='header'>Countdown!</div>
        <input placeholder='Add event' value={this.state.input} onChange={this.onChangeEvent}>
        </input>
        <input placeholder='Add date' value={this.state.date} onClick={this.onClickDateInput}></input>
        {
          this.state.showCalendar ?
          <Calendar onChange={this.onChangeDate} value={this.state.date}></Calendar> 
          : null
        }
        <button onClick={this.onAddEvent}>Add Event</button>
      </section> 
    )
  }
};

export default App;