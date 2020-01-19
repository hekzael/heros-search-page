import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
/* import './modal2.css'; */

const modalRoot = document.getElementById('modal-portal');

const ModalPortal = ( {children} ) => {
  const element = document.createElement('div');
  useEffect(()=>{
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    }
  },[children]);

  return createPortal( children, element );
}

export default ModalPortal;