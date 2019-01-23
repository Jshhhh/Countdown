import React from 'react';
import Inputbox from './Inputbox';
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

  render() {
    const {input, date, showCalendar} = this.state;

    return (
      <section className='main'>
        <div className='header'>Countdown!</div>
        <Inputbox
          handleClickDate={this.onClickDateInput}
          handleChangeEventName={this.onChangeEventNameInput}
          handleChangeDate={this.onChangeDate}
          inputVal={input}
          dateVal={date}
          showCal={showCalendar}
        />
      </section> 
    )
  }
};

export default App;