import css from './ContactForm.module.css';
import clsx from 'clsx';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import CustomInput from '../../Input/CustomInput';
import ButtonSend from '../../ButtonSend/ButtonSend';
import { FormValidation } from '../../../Validation/ValidationForm';

export default function ContactForm () {
   
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(FormValidation),
    });
    const onSubmit = data => console.log(data);

    const [phone, setPhone] = useState('');

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();

    //     const form = evt.target;
    //     const { email, name, message } = form.elements;

    //     console.log(email.value, name.value, message.value)
    //     form.reset();
    // }

    

    return (
        <div className={css.containerForm}>
            <h2 className={css.title}>Fill out this form:</h2>
            <form className={css.form}
            onSubmit={handleSubmit(onSubmit)}>
                <CustomInput 
                label={true}
                labelName="Your Email"
                inputType="email"
                name="email"
                labelClass={css.label}
                inputClass={clsx(css.input, errors.email && css.inputError)}
                placeholder="event@mail.com"
                {...register("email", {
                    onBlur: () => {},
                    onFocus: () => {},
                  })}
                />
                {errors.email && (
                    <span className={css.error}>{errors.email.message}</span>
                )}
                <CustomInput 
                label={true}
                labelName="Your Name"
                inputType="text"
                name="name"
                labelClass={css.label}
                inputClass={clsx(css.input, errors.name && css.inputError)}
                placeholder="Andrew Neiman"
                {...register("name", {
                    onBlur: () => {},
                    onFocus: () => {},
                  })}
                />
                {errors.name && (
                    <span className={css.error}>{errors.name.message}</span>
                )}
                
                <label className={css.label}>Your Phone</label>
                        <PhoneInput
                            label={true}
                            labelName="Your Phone"
                            name="phone"
                            required
                            defaultCountry="at"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            className={css.customInput}
                            placeholder='+43 677 62014408'
                            style={{
                                "--react-international-phone-background-color":"#3b3b3b",
                                "--react-international-phone-text-color": "white",
                                "--react-international-phone-border-radius": "15px",
                                "--react-international-phone-height": "50px",
                                "--react-international-phone-border-color": "#3b3b3b",
                            }}
                            {...register("phone", {
                                onBlur: () => {},
                                onFocus: () => {},
                              })}
                            /> 
                {errors.phone && (
                    <span className={css.error}>{errors.phone.message}</span>
                )}
                <ButtonSend type="submit" >Send</ButtonSend>
            </form>
        </div>
    )
}