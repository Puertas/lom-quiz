import React from 'react'

import { ChoiceModel } from '../../../data/questions'
import FeedbackAnswer from '../../Feedback/FeedbackAnswer/FeedbackAnswer'
import FeedbackIcon from '../../Feedback/FeedbackIcon/FeedbackIcon'
import classes from './QuestionInputSelect.module.css'

interface QuestionInputSelectProps {
  choices: ChoiceModel[]
  correctAnswer: string
  userAnswer?: string
  onChangeHandler: (value: string) => void
}

const QuestionInputSelect = ({
  choices,
  correctAnswer,
  userAnswer,
  onChangeHandler,
}: QuestionInputSelectProps) => {
  const answered = !!userAnswer
  const correct = userAnswer === correctAnswer
  const correctAnswerValue =
    choices.find((choice) => choice.id === correctAnswer)?.value || ''
  const selectClasses = `${classes.Select} ${
    answered ? (correct ? classes.Correct : classes.Incorrect) : ''
  }`
  const validationSection = (
    <>
      <FeedbackIcon correct={correct} />
      {!correct && <FeedbackAnswer correctAnswer={correctAnswerValue} />}
    </>
  )

  return (
    <>
      <select
        className={selectClasses}
        defaultValue={''}
        disabled={answered}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLSelectElement>) => onChangeHandler(value)}
      >
        <option value="" disabled></option>
        {choices.map(({ id, value }) => (
          <option key={id} value={id}>
            {value}
          </option>
        ))}
      </select>
      {answered && validationSection}
    </>
  )
}

export default QuestionInputSelect
