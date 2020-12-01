import React from 'react';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={() => console.log('Click!')}>
          Click me
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
