import PropTypes from "prop-types";
import css from "../FeedbackOptions/FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.block}>
      {options.map((option) => (
        <button
          className={css.button}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
