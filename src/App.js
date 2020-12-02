import { Component } from 'react';

import React from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return Object.values({
        good,
        neutral,
        bad,
      }).reduce((a, b) => a + b, 0);
    };
    const total = countTotalFeedback();

    const countPositivePercentage = () => {
      const { good } = this.state;
      return total ? Math.round((good / total) * 100) : 0;
    };

    const positivePercentage = countPositivePercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
