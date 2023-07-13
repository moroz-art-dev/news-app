import PropTypes from 'prop-types';

const SelectField = ({ options, name, multiple, register }) => {
  return (
    <select
      className="flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
      {...register(`${name}`)}
      multiple={multiple}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

export default SelectField;
