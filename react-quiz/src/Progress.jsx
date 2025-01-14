import React from 'react'
import Question from './Question'

const Progress = ({index, numQuestions, points, maxPossiblePoints, answer}) => {
    const hasAnswered = answer !== null
  return (
    <header className='progress'>
        <progress max={numQuestions} value={index + hasAnswered}/>
        <p>Question <strong>{index+1}</strong>/ {numQuestions}</p>
        <p><strong>{points}</strong>/ {maxPossiblePoints} points</p>
    </header>
  )
}

export default Progress
