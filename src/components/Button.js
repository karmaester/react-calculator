import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, handleClick }) => (
  <button
    type="button"
    className="btn"
    onClick={() => {
      handleClick(name);
    }}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
