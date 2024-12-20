import Modal from "react-modal";
import MobileMenu from "../MobileMenu/MobileMenu";

import css from "./MenuModal.module.css";

Modal.setAppElement("#root");

export default function MenuModal({ onClose }) {
  return (
    <Modal
      isOpen={true}
      overlayClassName={{
        base: css.modalContainer,
        afterOpen: css.afterModalContainerOpen,
        beforeClose: css.beforeModalContainerClose,
      }}
      className={{
        base: css.modalContent,
        afterOpen: css.afterModalContentOpen,
        beforeClose: css.beforeModalContentClose,
      }}
      closeTimeoutMS={500}
      onRequestClose={onClose}>
      <MobileMenu onClose={onClose} />
    </Modal>
  );
}