import React from 'react';

interface ModalProps {
  data: { tag: string; title: string; body: string } | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div 
      className={`modal-bg ${data ? 'open' : ''}`} 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box">
        <button className="modal-x" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <div className="modal-content">
          <div className="modal-tag">{data.tag}</div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};
