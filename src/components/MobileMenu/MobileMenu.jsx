import { MdClose } from "react-icons/md";
import NavigationModal from "../NavigationModal/NavigationModal";


import css from "./MobileMenu.module.css";

export default function MobileMenu({ onClose }) {

  return (
    <div className={css.mobileMenu}>
      <button className={css.closeBtn} onClick={() => onClose()}>
        <MdClose size={27} className={css.closeIcon} />
      </button>
      <NavigationModal  />
    </div>
  );
}