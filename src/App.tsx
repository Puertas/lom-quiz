import React from 'react'

import classes from './App.module.css'
import Logo from './components/UI/Logo/Logo'

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <Logo />
        <h1>L.O.M Humans Value Quiz</h1>
      </header>
    </div>
  )
}

export default App
