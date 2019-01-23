import React from 'react';

class Eventbox extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='event'>
        <div className='event-title'>{this.props.name}</div>
        <div className='event-date'>{this.props.date.toString()}</div>
      </div>
    )
  }
};

export default Eventbox;