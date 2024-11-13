import css from './Contact.module.css';

import ContactInformation from './ContactInformation/ContactInformation';
import ContactForm from './ContactForm/ContactForm';

export default function Contact () {
    return (
        <section className='section'>
            <div className='container'>
                <div className={css.wrapper}>
                    <h2 className={css.title}>Contact</h2>
                    <div className={css.container}>
                        <ContactInformation />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
        
    )
}