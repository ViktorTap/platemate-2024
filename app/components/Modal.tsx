import React, { useState, useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean; // Prop to control modal visibility
  onClose?: () => void; // Optional prop for handling close actions
  children: React.ReactNode; // Content to be displayed inside the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false); // State for animation

  const modalRef = useRef<HTMLDivElement>(null); // Ref for modal element

  // Handle close functionality with optional animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 300); // Adjust animation duration as needed
  };

  return (
    <div
      ref={modalRef}
      className={`modal ${isOpen ? "" : "hidden"} ${
        isClosing ? "closing" : ""
      }`}
    >
      <div className="modal-content">{children}</div>
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default Modal;
