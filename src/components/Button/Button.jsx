import PropTypes from 'prop-types';

const Button = ({ text, children, className, disabled, type, onClick }) => {
  return (
    <button
      className={className}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
