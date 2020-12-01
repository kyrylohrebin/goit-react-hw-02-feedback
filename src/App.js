import { Component } from 'react';

import React from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback';

const options = ['good', 'neutral', 'bad'];

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Section>
          <FeedbackOptions options={options} />
        </Section>
      </div>
    );
  }
}

export default App;
