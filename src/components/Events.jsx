import React from 'react';
import Eventbox from './Eventbox';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events } = this.props;

    return (
      <section className='events'>
        {
          events.map((event, i) => {
            return <Eventbox name={event.name} key={i} date={event.time} />
          })
        }
      </section>
    );
  }
};

export default Events;