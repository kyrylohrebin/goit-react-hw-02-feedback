const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      key={feedback}
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    FeedbackBtn({ feedback: option, onLeaveFeedback }),
  );
};

export default FeedbackOptions;
