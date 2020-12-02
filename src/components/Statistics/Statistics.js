import { Component } from 'react';
import Notification from '../Notification/Notification';

class Statistics extends Component {
  render() {
    if (this.props.total === 0) {
      return <Notification message="No feedback given" />;
    }
    return (
      <ul>
        <li>Good: {this.props.good}</li>
        <li>Neutral: {this.props.neutral}</li>
        <li>Bad: {this.props.bad}</li>
        <li>Total: {this.props.total}</li>
        <li>Positive feedbacks: {this.props.positivePercentage}</li>
      </ul>
    );
  }
}

export default Statistics;
