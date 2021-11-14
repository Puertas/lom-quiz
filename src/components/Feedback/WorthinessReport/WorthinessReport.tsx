import React from 'react'

import { ThumbsUp, ThumbsDown } from '../../UI/Icons'
import classes from './WorthinessReport.module.css'

interface WorthinessReportProps {
  score: Number
  onClose: () => void
}

const WorthinessReport = ({ score, onClose }: WorthinessReportProps) => {
  const worthy = score > 50
  const worthinessSection = worthy ? (
    <>
      <ThumbsUp size="100" />
      <h2>You’re Worthy! Humanity have a second chance</h2>
    </>
  ) : (
    <>
      <ThumbsDown size="100" />
      <h2>You’re Unworthy! Humanity is doomed!!!</h2>
    </>
  )

  return (
    <div className={classes.WorthinessReport}>
      <h1>Results:</h1>
      <div className={worthy ? classes.Worthy : classes.Unworthy}>
        {worthinessSection}
        <h3>{score}%</h3>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default WorthinessReport
