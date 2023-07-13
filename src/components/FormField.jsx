import PropTypes from 'prop-types';
import SelectField from 'components/SelectField';
import InputField from 'components/InputField';
import { useMemo } from 'react';

const FormField = ({ type, options, multiple, name, register }) => {
  const selectOptions = useMemo(() => {
    if (type === 'select') {
      return options.map((option) => ({ value: option, label: option }));
    }
    return null;
  }, [type, options]);

  if (type === 'select') {
    return <SelectField name={name} options={selectOptions} multiple={multiple} register={register} />;
  }

  return <InputField type={type} name={name} register={register} />;
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.array,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  register: PropTypes.any,
};

export default FormField;
