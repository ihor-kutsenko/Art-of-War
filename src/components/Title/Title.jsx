import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ text, className }) => {
  const titleClass = `${styles.title} ${className || ''}`;

  return <h2 className={titleClass}>{text}</h2>;
};

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
