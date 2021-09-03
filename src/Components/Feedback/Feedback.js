import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import css from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  appendFeedback = (target) => {
    this.setState((prewState) => ({
      [target]: prewState[target] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const percent = Math.floor(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return percent || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.appendFeedback}
          />
        </Section>

        <Section title="Statictics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              procent={percent}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
