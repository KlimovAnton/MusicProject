import css from './FormModalComponent.module.css';
import { MdClose } from "react-icons/md";

export default function FormModalComponent ({ onClose }) {
    return (
        <div className={css.background}>
            <div className={css.overlay}>
                <div className={css.footerModal}>
                    <button className={css.closeBtn} onClick={() => onClose()}>
                        <MdClose size={27} className={css.closeIcon} />
                    </button>
                    <h2 className={css.modalTitle}>Thank you for your interest in cooperation!</h2>
                    <p className={css.modalText}>The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
                </div>
            </div>
        </div>
    )
}