import PropTypes from 'prop-types';

const Button = ({ text, className, disabled, type, onClick }) => {
  return (
    <button
      className={className}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
