import React from 'react'

import Check from '../../UI/Icons/Check'
import Cross from '../../UI/Icons/Cross'
import classes from './FeedbackIcon.module.css'

interface FeedbackIconProps {
  correct: Boolean
}

const FeedbackIcon = ({ correct }: FeedbackIconProps) => {
  const iconClasses = `${classes.FeedbackIcon} ${
    correct ? classes.Correct : classes.Wrong
  }`

  return <div className={iconClasses}>{correct ? <Check /> : <Cross />}</div>
}

export default FeedbackIcon
