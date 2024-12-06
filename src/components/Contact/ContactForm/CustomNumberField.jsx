import css from './ContactForm.module.css';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react';

export default function CustomNumberField () {

    const [phone, setPhone] = useState('');

    return (
        <>
            <PhoneInput
                label="Phone"
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
            />
            
        </>
    )
}