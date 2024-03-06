import React from 'react';
import HorizontalTimeline from './HorizontalTimeline';

const App = () => {
  const timelineEvents = [
    {
      title: 'Event 1',
      date: '2022-01-01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Event 2',
      date: '2022-02-15',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more events as needed
  ];

  return (
    <div>
      <h1>Horizontal Timeline Example</h1>
      <HorizontalTimeline events={timelineEvents} />
    </div>
  );
};

export default App;
