export interface QuestionModel {
  id: string
  text: string
  type: QuestionTypeModel
  choices?: ChoiceModel[]
  correct: string
}

export enum QuestionTypeModel {
  Text = 'text',
  Radio = 'radio',
  Select = 'select',
}

export interface ChoiceModel {
  id: string
  value: string
}

export const questionsPool: QuestionModel[] = [
  {
    id: 'q1',
    text: 'In "The Matrix" movie, which pill did Neo choose to stay in Wonderland?',
    type: QuestionTypeModel.Radio,
    choices: [
      { id: 'q1_1', value: 'red' },
      { id: 'q1_2', value: 'blue' },
    ],
    correct: 'q1_1',
  },
  {
    id: 'q2',
    text: 'From "Mario Bros." video games, What Is Mario And Luigi’s last name?',
    type: QuestionTypeModel.Text,
    correct: 'mario',
  },
  {
    id: 'q3',
    text: 'Where do Sherlock Holmes live?',
    type: QuestionTypeModel.Select,
    choices: [
      { id: 'q3_1', value: '22b, Maker Street' },
      { id: 'q3_2', value: '2b, Maker Street' },
      { id: 'q3_3', value: '212b, Baker Street' },
      { id: 'q3_4', value: '221b, Baker Street' },
    ],
    correct: 'q3_4',
  },
  {
    id: 'q4',
    text: 'How many mainline Nintendo Legend of Zelda games feature "Link" in the title?',
    type: QuestionTypeModel.Select,
    choices: [
      { id: 'q4_1', value: '3' },
      { id: 'q4_2', value: '4' },
      { id: 'q4_3', value: '5' },
      { id: 'q4_4', value: '6' },
    ],
    correct: 'q4_2',
  },
  {
    id: 'q5',
    text: 'What is Gandalf’s name in Sindarin, used in Gondor and by the Elves?',
    type: QuestionTypeModel.Text,
    correct: 'mithrandir',
  },
  {
    id: 'q6',
    text: 'What is the name of the computer in "2001: A Space Odyssey"?',
    type: QuestionTypeModel.Text,
    correct: 'hal',
  },
  {
    id: 'q7',
    text: 'From "Bloodborne" video game, finish the Willem quote "We are born of the blood, made men by the blood, undone by the blood. Our eyes are yet to open. ..."',
    type: QuestionTypeModel.Select,
    choices: [
      { id: 'q7_1', value: 'Bless the Healing Church.' },
      { id: 'q7_2', value: 'Long life to Ludwig.' },
      { id: 'q7_3', value: 'Fear the old blood.' },
    ],
    correct: 'q7_3',
  },
  {
    id: 'q8',
    text: 'From "Dark Souls" video game, Artorias is also known as...',
    type: QuestionTypeModel.Select,
    choices: [
      { id: 'q8_1', value: 'The Abysswalker' },
      { id: 'q8_2', value: 'The Chosen One' },
      { id: 'q8_3', value: 'The Lord of Cinder' },
    ],
    correct: 'q8_1',
  },
  {
    id: 'q9',
    text: 'What is the name of the computer in "WarGames" movie?',
    type: QuestionTypeModel.Radio,
    choices: [
      { id: 'q9_1', value: 'wopr' },
      { id: 'q9_2', value: 'norad' },
    ],
    correct: 'q9_1',
  },
  {
    id: 'q10',
    text: 'According with "Terminator 2" movie, When "Skynet" becomes self-aware and starts a nuclear strike (J-Day)?',
    type: QuestionTypeModel.Radio,
    choices: [
      { id: 'q10_1', value: 'August 29, 1996' },
      { id: 'q10_2', value: 'August 01, 1997' },
      { id: 'q10_3', value: 'August 29, 1997' },
      { id: 'q10_4', value: 'August 01, 1996' },
    ],
    correct: 'q10_3',
  },
  {
    id: 'q11',
    text: 'According with "D&D" rules, What is the only way to permanently kill a troll??',
    type: QuestionTypeModel.Radio,
    choices: [
      { id: 'q11_1', value: 'Trick it into staying out in the sun' },
      { id: 'q11_2', value: 'Finish it off with fire or acid' },
      { id: 'q11_3', value: 'Cast "Remove Curse"' },
    ],
    correct: 'q11_2',
  },
  {
    id: 'q12',
    text: 'On "Warcraft" video games, What is the name of the Arthas’s horse?',
    type: QuestionTypeModel.Select,
    choices: [
      { id: 'q12_1', value: 'Invencible' },
      { id: 'q12_2', value: 'Steadfast' },
      { id: 'q12_3', value: 'Courageous' },
    ],
    correct: 'q12_1',
  },
  {
    id: 'q13',
    text: 'From "Game Of Thrones", What is the meaning of "Valar Morghulis"?',
    type: QuestionTypeModel.Select,
    choices: [
      { id: 'q13_1', value: 'All men must die' },
      { id: 'q13_2', value: 'All men must serve' },
    ],
    correct: 'q13_1',
  },
  {
    id: 'q14',
    text: '1011000 = ...?',
    type: QuestionTypeModel.Radio,
    choices: [
      { id: 'q14_1', value: '78' },
      { id: 'q14_2', value: '80' },
      { id: 'q14_3', value: '70' },
      { id: 'q14_4', value: '88' },
    ],
    correct: 'q14_4',
  },
  {
    id: 'q15',
    text: 'How many keys has 60% keyboard with ANSI layout?',
    type: QuestionTypeModel.Radio,
    choices: [
      { id: 'q15_1', value: '68' },
      { id: 'q15_2', value: '61' },
      { id: 'q15_3', value: '62' },
      { id: 'q15_4', value: '69' },
    ],
    correct: 'q15_2',
  },
]
