import PropTypes from 'prop-types';
import { convertArraysToStrings } from 'utils/convertUtils';
import { useFormSettings } from 'hooks/useFormSettings';
import { useForm } from 'react-hook-form';
import { formTypeSettings } from 'stores/options';
import FormField from 'components/FormField';

const SettingsForm = ({ options, updateOptions }) => {
  const { filteredOptions, formSettings } = useFormSettings(options);
  const { handleSubmit, register } = useForm(formSettings);

  const onSubmit = (data) => updateOptions(convertArraysToStrings(data, formTypeSettings));

  const renderFormFields = () => {
    return filteredOptions.map(([key]) => {
      const { type, multiple, options: fieldOptions } = formTypeSettings[key];

      return (
        <fieldset key={key} className="mb-4 flex items-center">
          <label className="mb-2 block w-40 text-sm font-bold text-gray-700">{key}</label>
          <FormField register={register} type={type} multiple={multiple} options={fieldOptions} name={key} />
        </fieldset>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderFormFields()}
      <button type="submit" className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Save
      </button>
    </form>
  );
};

SettingsForm.propTypes = {
  options: PropTypes.object.isRequired,
  updateOptions: PropTypes.func.isRequired,
};

export default SettingsForm;
