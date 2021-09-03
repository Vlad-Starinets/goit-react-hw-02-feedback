import PropTypes from "prop-types";
import css from "../Notification/Notification.module.css";

function Notification({ message }) {
  return <h2 className={css.title}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
