export const ERROR_MESSAGE = 'Please fill all the input fields';

export const isValidFormData = (formData) => {
  return Object.values(formData).every((formVal) => formVal.trim().length);
};

export const isSomeFieldsValid = (formData) => {
  return Object.values(formData).some((formVal) => formVal.trim().length);
};

export const checkAllFields = (formData) => {
  return Object.values(formData).every((form) => isValidFormData(form));
};
