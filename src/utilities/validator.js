export const ERROR_MESSAGE = 'Please fill all the input fields';
export const isValidFormData = (formData) => {
  return Object.values(formData).every((formVal) => formVal.trim().length);
};
