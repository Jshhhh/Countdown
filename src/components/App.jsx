import React from 'react';
import Inputbox from './Inputbox';
import Event from '../event/event';
import Events from './Events';

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

    this.onClickDateInput = this.onClickDateInput.bind(this);
    this.onChangeEventNameInput = this.onChangeEventNameInput.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onAddEvent = this.onAddEvent.bind(this);
  }

  onClickDateInput = () => {
    this.setState({showCalendar: true});
  }

  onChangeEventNameInput = e => {
    this.setState({input: e.target.value})
  }

  onChangeDate = date => {
    this.setState({
      date,
      showCalendar: false
    })
  }

  onAddEvent = () => {
    if (this.state.input) {
      const { events, input, date } = this.state;
      this.setState({events: [...events, new Event(input, date)]})
    }
  }

  render() {
    const {input, date, showCalendar, events} = this.state;

    return (
      <section className='main'>
        <div className='header'>Countdown!</div>
        <Inputbox
          inputVal={input}
          dateVal={date}
          showCal={showCalendar}
          handleClickDate={this.onClickDateInput}
          handleChangeEventName={this.onChangeEventNameInput}
          handleChangeDate={this.onChangeDate}
          handleAddEvent={this.onAddEvent}
        />
        <Events events={events}/>
      </section> 
    )
  }
};

export default App;