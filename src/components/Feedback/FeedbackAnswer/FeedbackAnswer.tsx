import React from 'react'

import classes from './FeedbackAnswer.module.css'

interface FeedbackAnswerProps {
  correctAnswer: string
  text?: string
}

const FeedbackAnswer = ({
  correctAnswer,
  text = 'Correct:',
}: FeedbackAnswerProps) => (
  <div className={classes.Feedback}>
    <span>
      {text} {correctAnswer}
    </span>
  </div>
)

export default FeedbackAnswer
