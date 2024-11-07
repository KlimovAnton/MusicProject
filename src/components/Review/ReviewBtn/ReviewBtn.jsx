import css from './ReviewBtn.module.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


export default function ReviewBtn () {
    return (
        <div className={css.wrapperBtn}>
            <button
                type="button"
                aria-label="Previous slide"
                aria-controls="wrap"
                aria-disabled="false"
            >
                <FaArrowLeft />
            </button>
            
            <button
                
                type="button"
                aria-label="Next slide"
                aria-controls="wrap"
                aria-disabled="true"
                disabled=""
            >
                <FaArrowRight />
            </button>
            
        </div>
    )
}