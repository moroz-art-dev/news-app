export const convertArraysToStrings = (obj, formTypeSettings) => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log('t: ', key, value);
    if (formTypeSettings[key]?.result === 'text') {
      if (Array.isArray(value)) {
        obj[key] = value.join(',');
      } else {
        obj[key] = String(value);
      }
    }
    if (formTypeSettings[key]?.result === 'array') {
      if (typeof value === 'string') {
        obj[key] = value.split(',').map((item) => item.trim());
      } else if (Array.isArray(value)) {
        obj[key] = value.map((item) => String(item).trim());
      }
    }
  });
  return obj;
};
