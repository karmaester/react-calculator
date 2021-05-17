import PropTypes from 'prop-types';
import React from 'react';

const getClassName = (name) => {
  if (name === '0') {
    return 'btn-large bg-gray';
  } if (name === '÷' || name === '*' || name === '-' || name === '+' || name === '=') {
    return 'btn bg-orange';
  }
  return 'btn bg-gray';
};

const Button = ({ name, handleClick }) => (
  <button
    type="button"
    className={getClassName(name)}
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
