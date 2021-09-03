import PropTypes from "prop-types";
import css from "../Section/Section.module.css";

function Section({ title, children }) {
  return (
    <section className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
