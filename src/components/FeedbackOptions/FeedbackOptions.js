import React from 'react';

const FeedbackBtn = ({ feedback, addFeedback }) => {
  return (
    <button
      key={feedback}
      type="button"
      data-feedback={feedback}
      onClick={addFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, addFeedback }) => {
  return options.map(option => FeedbackBtn({ feedback: option, addFeedback }));
};

export default FeedbackOptions;
