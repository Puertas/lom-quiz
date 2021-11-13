import React from 'react'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

interface ModalProps {
  show: Boolean
  children: React.ReactNode
  onModalClose: () => void
}

const Modal = ({ show, onModalClose, children }: ModalProps) => (
  <>
    <Backdrop show={show} onClickHandler={onModalClose} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </>
)

export default Modal
