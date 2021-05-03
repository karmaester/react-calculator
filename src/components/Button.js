import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button
    type="submit"
    className="btn"
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
