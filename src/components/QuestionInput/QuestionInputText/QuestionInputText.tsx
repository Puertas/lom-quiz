import React from 'react'

import FeedbackAnswer from '../../Feedback/FeedbackAnswer/FeedbackAnswer'
import FeedbackIcon from '../../Feedback/FeedbackIcon/FeedbackIcon'
import classes from './QuestionInputText.module.css'

interface QuestionInputTextProps {
  correctAnswer: string
  userAnswer?: string
  onChangeHandler: (value: string) => void
}

const QuestionInputText = ({
  correctAnswer,
  userAnswer,
  onChangeHandler,
}: QuestionInputTextProps) => {
  const answered = !!userAnswer
  const correct = userAnswer === correctAnswer
  const inputClasses = `${classes.Input} ${
    answered ? (correct ? classes.Correct : classes.Incorrect) : ''
  }`
  const validationSection = (
    <>
      <FeedbackIcon correct={correct} />
      {!correct && <FeedbackAnswer correctAnswer={correctAnswer} />}
    </>
  )

  return (
    <>
      <input
        className={inputClasses}
        type="text"
        disabled={answered}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(value)}
      />
      {answered && validationSection}
    </>
  )
}

export default QuestionInputText
