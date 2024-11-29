import * as yup from 'Yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const FormValidation = yup.object().shape({
    email: yup
      .string()
      .email('Email is invalid, use format @mail.com')
      .required("Email is required"),
    name: yup
      .string()
      .max(30, "Name must be max 30 characters")
      .required("Name is required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid, example: 4367711111111")
      .required("Phone is required")
});