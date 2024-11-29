import css from './ContactForm.module.css';
import clsx from 'clsx';
import * as yup from 'yup';

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

import ButtonSend from '../../ButtonSend/ButtonSend';
import { FormValidation } from '../../../Validation/ValidationForm';


export default function ContactForm () {
    
    const emailId = useId();
    const nameId = useId();
    const phoneId = useId();

    const [PhoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (evt) => {
      const input = evt.target;
      setPhoneNumber(input);
      setValid(validationFormNumber(input))
    }

    const validationFormNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10}$/;
      return phoneNumberPattern.test(phoneNumber);
    }

    const initialValues = {
      email: "",
      password: "",
    };

    const handleSubmit = async (value, actions) => {
      actions.resetForm();
    };

    return (
        <div className={css.containerForm}>
            <h2 className={css.title}>Fill out this form:</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FormValidation}>
            {({ errors, touched }) => (
              <Form className={css.form} autoComplete="off">
                <label htmlFor={emailId}>Email</label>
                <Field
                  className={`${errors.email && touched.email ? css.inputError : css.registerInput}`}
                  label="Email"
                  type="email"
                  name="email"
                  id={emailId}
                  autoComplete="off"
                  required
                  placeholder="Enter your email"
                />
                <ErrorMessage className={css.error} name="email" component="span" />
                <label htmlFor={nameId}>Name</label>
                <Field
                  className={`${errors.password && touched.password ? css.inputError : css.registerInput}`}
                  label="Name"
                  name="name"
                  id={nameId}
                  autoComplete="current-password"
                  required
                  placeholder="Enter your Name"
                />
                <ErrorMessage className={css.error} name="password" component="span" />
                <label>Phone Number:
                  <PhoneInput 
                  country={"us"}
                  value={PhoneNumber}
                  onChange={handleChange}
                  inputProps={{
                    required: true,
                  }}
                  />
                </label>
                {!valid && <p>Please enter a valid 10-digit number phone.</p>}
                <ButtonSend>Send</ButtonSend>
              </Form>
            )}
          </Formik>
        </div>
    )
}