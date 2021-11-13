import React from 'react'

import lomLogo from '../../../assets/images/lom-logo.svg'
import classes from './Logo.module.css'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={lomLogo} alt="LOM Logo" />
  </div>
)

export default Logo
