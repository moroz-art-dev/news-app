import { useMemo } from 'react';
import { formTypeSettings } from 'stores/options';

export const useFormSettings = (options) => {
  const filteredOptions = useMemo(() => {
    return Object.entries(options).filter(([key]) => formTypeSettings[key]);
  }, [options]);

  const defaultValues = useMemo(() => {
    return Object.fromEntries(filteredOptions);
  }, [filteredOptions]);

  const formSettings = {
    mode: 'onSubmit',
    defaultValues: defaultValues,
  };

  return {
    filteredOptions,
    formSettings,
  };
};
