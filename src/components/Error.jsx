import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return <div className="text-center text-red-500">Error: {message}</div>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
