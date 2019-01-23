import React from 'react';
import Calendar from 'react-calendar';

class Inputbox extends React.Component {
  constructor() {
    super();
  };

  render() {
    const {
      handleClickDate,
      handleChangeEventName,
      handleChangeDate,
      inputVal,
      dateVal,
      showCal
    } = this.props;

    return (
      <section className="inputbox">
        <input placeholder='Add event' value={inputVal} onChange={handleChangeEventName}>
        </input>
        <input placeholder='Add date' value={dateVal} onClick={handleClickDate}></input>
        {
          showCal ?
          <Calendar onChange={handleChangeDate} value={dateVal}></Calendar> 
          : null
        }
        <button onClick={this.onAddEvent}>Add Event</button>
      </section>
    );
  }
};

export default Inputbox;