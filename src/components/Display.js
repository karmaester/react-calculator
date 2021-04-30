import PropTypes from 'prop-types';

const Display = ({ text }) => (
  <div className="display">
    {text}
  </div>
);

Display.defaultProps = {
  text: '0',
};

Display.propTypes = {
  text: PropTypes.string,
};

export default Display;
