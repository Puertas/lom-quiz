import React from 'react'

import { ChoiceModel } from '../../../data/questions'
import FeedbackAnswer from '../../Feedback/FeedbackAnswer/FeedbackAnswer'
import FeedbackIcon from '../../Feedback/FeedbackIcon/FeedbackIcon'
import classes from './QuestionInputRadioGroup.module.css'

interface QuestionInputRadioGroupProps {
  choices: ChoiceModel[]
  name: string
  correctAnswer: string
  userAnswer?: string
  onChangeHandler: (value: string) => void
}

const QuestionInputRadioGroup = ({
  choices,
  name,
  correctAnswer,
  userAnswer,
  onChangeHandler,
}: QuestionInputRadioGroupProps) => {
  const answered = !!userAnswer
  const correct = userAnswer === correctAnswer
  const correctAnswerValue =
    choices.find((choice) => choice.id === correctAnswer)?.value || ''

  return (
    <div>
      {choices.map(({ id, value }) => (
        <div key={id}>
          <input
            type="radio"
            id={id}
            name={name}
            value={id}
            disabled={answered}
            onChange={({
              target: { value },
            }: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(value)}
          />
          <label
            htmlFor={id}
            className={`${
              answered && id === userAnswer
                ? correct
                  ? classes.Correct
                  : classes.Incorrect
                : ''
            }`}
          >
            {value}
          </label>
          {answered && id === userAnswer && <FeedbackIcon correct={correct} />}
        </div>
      ))}
      {answered && !correct && (
        <FeedbackAnswer correctAnswer={correctAnswerValue} />
      )}
    </div>
  )
}

export default QuestionInputRadioGroup
