import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='events'>
        {
          this.props.date
        }
      </div>
    )
  }
};

export default Event;