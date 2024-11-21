import css from './ContactForm.module.css';

import CustomInput from '../../Input/CustomInput';
import ButtonSend from '../../ButtonSend/ButtonSend'
import { useForm } from 'react-hook-form';
export default function ContactForm () {

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors, isDirty, isValid },
    //   } = useForm({
    //     mode: 'onChange',
    //     resolver: yupResolver(signInFormValidation),
    //   });

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.target;
        const { email, name, message } = form.elements;

        console.log(email.value, name.value, message.value)
        form.reset();
    }

    

    return (
        <div className={css.containerForm}>
            <h2 className={css.title}>Fill out this form:</h2>
            <form className={css.form}
            onSubmit={handleSubmit}>
                <CustomInput 
                labelName="Email"
                inputType="email"
                name="email"
                labelClass={css.label}
                inputClass={css.input}
                placeholder="Enter your email"
                />
                <CustomInput 
                labelName="Name"
                inputType="text"
                name="name"
                labelClass={css.label}
                inputClass={css.input}
                placeholder="Enter your name"
                />
                <CustomInput
                labelName="Message"
                inputType="text"
                name="message"
                labelClass={css.label}
                inputClass={css.input}
                placeholder="Enter your message"
                />
                <ButtonSend type="submit">Send</ButtonSend>
            </form>
        </div>
    )
}