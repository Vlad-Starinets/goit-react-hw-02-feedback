import PropTypes from "prop-types";
import css from "../Statistics/Statistics.module.css";

function Statistics({ good, neutral, bad, total, procent }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        Good: <span className={css.link}>{good}</span>
      </li>
      <li className={css.item}>
        Neutral: <span className={css.link}>{neutral}</span>
      </li>
      <li className={css.item}>
        Bad: <span className={css.link}>{bad}</span>
      </li>
      <li className={css.item}>
        Total: <span className={css.link}>{total}</span>
      </li>
      <li className={css.item}>
        Positive feedback: <span className={css.link}>{procent} %</span>{" "}
      </li>
    </ul>
  );
}

Statistics.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  procent: PropTypes.number,
};

export default Statistics;
