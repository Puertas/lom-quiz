import React, { useState, useRef, useEffect } from 'react'

import { getQuizQuestions } from '../../Utils/Utils'
import { ChoiceModel, QuestionTypeModel } from '../../data/questions'
import Question from '../Question/Question'
import QuestionInputRadioGroup from '../QuestionInput/QuestionInputRadioGroup/QuestionInputRadioGroup'
import QuestionInputSelect from '../QuestionInput/QuestionInputSelect/QuestionInputSelect'
import QuestionInputText from '../QuestionInput/QuestionInputText/QuestionInputText'
import Modal from '../UI/Modal/Modal'
import classes from './Quiz.module.css'
import WorthinessReport from '../Feedback/WorthinessReport/WorthinessReport'

const Quiz = () => {
  const [questions, setQuestions] = useState(() => getQuizQuestions())
  const [activeQuestion, setActiveQuestion] = useState(1)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [answered, setAnswered] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const inputValueRef = useRef('')
  const scoreValueRef = useRef(0)
  const attemptValueRef = useRef(0)
  const questionsNumber = questions.length

  useEffect(() => {
    if (activeQuestion > questionsNumber) {
      const correctAnswers = questions.reduce(
        (acc, question, i) =>
          question.correct === userAnswers[i] ? acc + 1 : acc,
        0
      )
      scoreValueRef.current = (correctAnswers / questionsNumber) * 100
      setShowResult(true)
    }
  }, [activeQuestion, questions, questionsNumber, userAnswers])

  const restart = (): void => {
    inputValueRef.current = ''
    attemptValueRef.current = attemptValueRef.current + 1
    setUserAnswers([])
    setActiveQuestion(1)
    setAnswered(false)
    setShowResult(false)
    setQuestions(getQuizQuestions())
  }

  const answerQuestion = (): void => {
    saveUserQuestion(inputValueRef.current)
    setActiveQuestion(activeQuestion + 1)
    setAnswered(false)
    inputValueRef.current = ''
  }

  const saveUserQuestion = (answer: string): void =>
    setUserAnswers((prevAnswers) => [...prevAnswers, answer.toLowerCase()])

  const handleInputChange = (value: string) => {
    if (!answered) {
      setAnswered(true)
    }
    inputValueRef.current = value
  }

  const hideResult = () => setShowResult(false)

  const inputRadioGroup = (
    id: string,
    choices: ChoiceModel[] = [],
    correct: string,
    order: number
  ) => (
    <QuestionInputRadioGroup
      choices={choices}
      name={id}
      correctAnswer={correct}
      {...(userAnswers[order] ? { userAnswer: userAnswers[order] } : {})}
      onChangeHandler={handleInputChange}
    />
  )
  const inputSelect = (
    choices: ChoiceModel[] = [],
    correct: string,
    order: number
  ) => (
    <QuestionInputSelect
      choices={choices}
      correctAnswer={correct}
      {...(userAnswers[order] ? { userAnswer: userAnswers[order] } : {})}
      onChangeHandler={handleInputChange}
    />
  )
  const inputText = (correct: string, order: number) => (
    <QuestionInputText
      correctAnswer={correct}
      {...(userAnswers[order] ? { userAnswer: userAnswers[order] } : {})}
      onChangeHandler={handleInputChange}
    />
  )

  const buttonSection =
    activeQuestion <= questionsNumber ? (
      <button onClick={answerQuestion} disabled={!answered}>
        Answer
      </button>
    ) : (
      <button onClick={restart}>Restart</button>
    )

  return (
    <div className={classes.Quiz}>
      <div className={classes.QuestionsContainer}>
        {questions.slice(0, activeQuestion).map((question, i) => (
          <div
            key={question.id + attemptValueRef.current}
            className={`${classes.QuestionContainer} ${
              i + 1 === activeQuestion ? classes.ActiveQuestion : ''
            }`}
          >
            <Question order={i + 1} text={question.text} />
            <div className={classes.InputContainer}>
              {
                {
                  [QuestionTypeModel.Radio]: inputRadioGroup(
                    question.id,
                    question.choices,
                    question.correct,
                    i
                  ),
                  [QuestionTypeModel.Select]: inputSelect(
                    question.choices,
                    question.correct,
                    i
                  ),
                  [QuestionTypeModel.Text]: inputText(question.correct, i),
                }[question.type]
              }
            </div>
          </div>
        ))}
      </div>
      <div className={classes.Footer}>{buttonSection}</div>

      <Modal show={showResult} onModalClose={hideResult}>
        <WorthinessReport score={scoreValueRef.current} onClose={hideResult} />
      </Modal>
    </div>
  )
}

export default Quiz
