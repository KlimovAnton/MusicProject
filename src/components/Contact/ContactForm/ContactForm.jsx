import css from './ContactForm.module.css';

import CustomInput from '../../Input/CustomInput';
import Button from '../../Button/Button';

export default function ContactForm () {
    return (
        <form className={css.form}>
            <h2 className={css.title}>Fill out this form:</h2>
            <CustomInput 
            labelClass={css.label}
            inputClass={css.input}
            placeholder="Enter your email"
            />
            <CustomInput 
            labelClass={css.label}
            inputClass={css.input}
            placeholder="Enter your name"
            />
            <CustomInput 
            labelClass={css.label}
            inputClass={css.input}
            placeholder="Enter your message
            "/>
            <Button>Send</Button>
        </form>
    )
}