export const convertArraysToStrings = (obj, formTypeSettings) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (formTypeSettings[key]?.result === 'text') {
      if (Array.isArray(value)) {
        obj[key] = value.join(',');
      } else {
        obj[key] = String(value);
      }
    }
  });
  return obj;
};
