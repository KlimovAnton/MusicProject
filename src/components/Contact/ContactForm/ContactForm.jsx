import css from './ContactForm.module.css';
import clsx from 'clsx';

import { Formik, Form, Field, ErrorMessage } from "formik";
import { fetchForm } from '../../../send-form.js';

import ButtonSend from '../../ButtonSend/ButtonSend';
import { FormValidation } from '../../../Validation/ValidationForm';

export default function ContactForm () {

    async function getForm(value) {
        try {
            const data = await fetchForm(value);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const initialValues = {
      email: "",
      name: "",
      phone: "",
    };
    
    const handleSubmit = async (value, actions) => {
        console.log(value)
        await getForm(value);
        actions.resetForm();
    };

    return (
        <div className={css.containerForm}>
            <h2 className={css.title}>Fill out this form:</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FormValidation}
                validateOnMount
                >
            {formik => {
                return (
                    <Form className={css.form} autoComplete="off">
                        <label className={css.label}>Your Email</label>
                        <Field
                            className={clsx(css.input, css.inputError)}
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="off"
                            required
                            placeholder="event@mail.com"
                        />
                        <ErrorMessage className={css.error} name="email" component="span" />
                        
                        <label className={css.label}>Your Name</label>
                        <Field
                            className={clsx(css.input, css.inputError)}
                            label="Name"
                            name="name"
                            autoComplete="current-name"
                            required
                            placeholder="Andrew Neiman"
                        />
                        <ErrorMessage className={css.error} name="name" component="span" />
                        
                        <label className={css.label}>Your Phone</label>
                        <Field
                            className={clsx(css.input, css.inputError)}
                            label="Phone"
                            name="phone"
                            required
                            placeholder="43 677 00000000"/>
                        <ErrorMessage className={css.error} name="phone" component="span" />
                        <ButtonSend type="submit" disabled={!(formik.dirty && formik.isValid)}>Send</ButtonSend>
                    </Form>
                )
            }}
          </Formik>
        </div>
    )
}