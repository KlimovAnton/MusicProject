import css from './CustomPhoneInput.module.css';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react';
import { forwardRef } from 'react';

const CustomPhoneInput = forwardRef (function CustomPhoneInput (props, ref) {
    const { ...otherProps } = props;
    const [phone, setPhone] = useState('');

    return (
        <PhoneInput
            {...otherProps}
            ref={ref}
            id="phone"
            label="Phone"
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
    )
})

export default CustomPhoneInput;