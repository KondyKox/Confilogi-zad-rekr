import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__container">
        <button onClick={onClose} className="close-modal btn">
          <img src="./images/icon-close.svg" alt="Close mobile menu" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
