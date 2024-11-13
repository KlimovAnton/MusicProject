import css from './ContactInformation.module.css';

import { IconContext } from 'react-icons';
import { MdAlternateEmail } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

export default function ContactInformation () {
    return (
        <div className={css.formInformation}>
            <h2>Have a question?</h2>
            <p>I'm here to help! Fill out the form or reach me via email or phone. 
                I'm available to help you get the best experience.
                I will contact you as soon as possible. Please allow 24 hours during the business hours for a reply.
                My business hours are from 9am to 5pm ET.
            </p>
            <ul className={css.list}>
                <IconContext.Provider value={{ size: '25px', className: 'contactIcon' }}>
                <li className={css.item}>
                    
                    <a href="mailto:antonklim6@gmail.com" target="_blank" className={css.link}>
                        <MdAlternateEmail />
                        <p>Antonklim6@gmail.com</p>
                    </a>
                </li>
                <li className={css.item}>
                    <a href="tel:+4367762014408" target="_blank" className={css.link}>
                        <MdLocalPhone />
                        <p>+4367762014408</p>
                    </a>
                </li>
                <li className={css.item}>
                    <a href="https://wa.me/4367762014408" target="_blank" className={css.link}>
                        <IoChatbubbleEllipsesOutline />
                        <p>Chat with me on whatsapp</p>
                    </a>
                </li>
                </IconContext.Provider>
            </ul>
        </div>
    )
}