import React from 'react'

import classes from './App.module.css'
import Quiz from './components/Quiz/Quiz'
import Logo from './components/UI/Logo/Logo'

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <Logo />
        <h1>L.O.M Human’s Value Quiz</h1>
      </header>
      <Quiz />
    </div>
  )
}

export default App
