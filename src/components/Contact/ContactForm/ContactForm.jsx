import css from './ContactForm.module.css';
import clsx from 'clsx';

import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import CustomPhoneInput from './../../CustomPhoneInput/CustomPhoneInput'
import ButtonSend from '../../ButtonSend/ButtonSend';
import FormModal from '../../FormModal/FormModal';
import { fetchForm } from '../../../send-form';

export default function ContactForm () {
    const ref = useRef(null);

    const schema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Email format is not valid").required("Email is required")
    })

    const { register, control, handleSubmit, formState, reset } = useForm({mode: 'onSubmit', resolver: yupResolver(schema)});
    const { errors } = formState;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    function getForm(value) {
        try {
            const data = fetchForm(value);
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async (data) => {
        console.log('Form submitted', data);
        reset();
        openModal();
        await getForm(data);
    }

    return (
        <div className={css.containerForm}>
            <h2 className={css.title}>Fill out this form:</h2>
            <form
                className={css.form}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >

                <label className={css.label}>Your name</label>
                <input
                type="text"
                id="name"
                placeholder="Andrew Neiman"
                {...register("name")}
                className={css.input}
                />
                <span className={css.error}>{errors.name?.message}</span>

                <label className={css.label}>Your phone</label>
                <CustomPhoneInput 
                ref={ref}
                type="tel"
                id="phone"
                {...register("phone")}
                />
                <span className={css.error}>{errors.phone?.message}</span>

                <label className={css.label}>Your email</label>
                <input
                type="email"
                id="email"
                placeholder="event@example.com"
                {...register("email")}
                className={css.input}
                />
                <span className={css.error}>{errors.email?.message}</span>

            <ButtonSend type="submit" >Send</ButtonSend>
            </form>
            {isOpen && <FormModal isOpen={setIsOpen} onClose={closeModal} />}
        </div>
    )
}


// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/