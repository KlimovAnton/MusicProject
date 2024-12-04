import ReactModal from "react-modal";
import css from "./FormModal.module.css";
import FormModalComponent from "../FormModalComponent/FormModalComponent";

ReactModal.setAppElement('#root');

export default function FormModal ({ onClose }) {
  return (
    <ReactModal
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
    <FormModalComponent onClose={onClose} />
    </ReactModal>
  );
}