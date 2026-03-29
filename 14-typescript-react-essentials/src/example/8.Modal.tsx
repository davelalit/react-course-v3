import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './8.Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal( 
    <div className="modal-overlay" onClick={onClose}>

 <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>Modal Content</h1>
        <p>This is the content inside the modal</p>
      </Modal>
    </div>
  );
};

export default App;