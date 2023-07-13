import PropTypes from 'prop-types';

const InputField = ({ type, name, register }) => {

  return (
    <input
      type={type}
      className="flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
      {...register(`${name}`)}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export default InputField;
