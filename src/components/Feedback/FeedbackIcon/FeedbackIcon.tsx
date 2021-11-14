import React from 'react'

import Check from '../../UI/Icons/Check'
import Cross from '../../UI/Icons/Cross'
import classes from './FeedbackIcon.module.css'

interface FeedbackIconProps {
  correct: Boolean
}

const FeedbackIcon = ({ correct }: FeedbackIconProps) => (
  <span className={correct ? classes.Correct : classes.Wrong}>
    {correct ? <Check /> : <Cross />}
  </span>
)

export default FeedbackIcon
