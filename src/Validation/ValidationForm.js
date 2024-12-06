import * as Yup from 'Yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const FormValidation = Yup.object().shape({
  name: Yup
      .string()
      .max(30, "Name must be max 30 characters")
      .required("Name is required"),
    email: Yup
    .string()
    .email('Email is invalid, use format @mail.com')
    .required("Email is required")
});