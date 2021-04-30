import PropTypes from 'prop-types';

const ButtonPanel = ({ text }) => (
  <div className="display">
    {text}
  </div>
);

ButtonPanel.defaultProps = {
  text: '0',
};

ButtonPanel.propTypes = {
  text: PropTypes.string,
};

export default ButtonPanel;
