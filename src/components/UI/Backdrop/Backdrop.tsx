import React from 'react'

import classes from './Backdrop.module.css'

interface BackdropProps {
  show: Boolean
  onClickHandler: () => void
}

const Backdrop = ({ show, onClickHandler }: BackdropProps) =>
  show ? (
    <div className={classes.Backdrop} onClick={onClickHandler}></div>
  ) : null

export default Backdrop
