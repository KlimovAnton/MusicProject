import css from './ContactForm.module.css';

import CustomInput from '../../Input/CustomInput';
import Button from '../../Button/Button';

export default function ContactForm () {
    return (
        <div className={css.containerForm}>
            <h2 className={css.title}>Fill out this form:</h2>
            <form className={css.form}>
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
        </div>
    )
}