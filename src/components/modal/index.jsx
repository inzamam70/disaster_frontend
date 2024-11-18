

import React from "react";
import "./index.css";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="modelcontent" onClick={onClose}>
            <div className="modelchildren" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
