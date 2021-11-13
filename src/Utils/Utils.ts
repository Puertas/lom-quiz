import { QuestionModel } from '../data/questions'
import { questionsPool } from '../data/questions'

export function shuffleArray(array: any[]): any[] {
  const shuffledArray = [...array]

  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = shuffledArray[i]
    shuffledArray[i] = shuffledArray[j]
    shuffledArray[j] = temp
  }

  return shuffledArray
}

export function getQuizQuestions(): QuestionModel[] {
  const questions: QuestionModel[] = shuffleArray(questionsPool).slice(0, 10)

  for (const question of questions) {
    if (question.choices) {
      question.choices = shuffleArray(question.choices)
    }
  }

  return questions
}
