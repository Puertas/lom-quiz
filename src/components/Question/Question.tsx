import React from 'react'

import classes from './Question.module.css'

interface QuestionProps {
  text: string
  order: number
}

const Question = ({ text, order }: QuestionProps) => {
  return (
    <div>
      <span className={classes.Text}>
        {order}. {text}
      </span>
    </div>
  )
}

export default Question
