import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
  
const Statistic = ({ text, value }) => <div>{text}: {value}</div>

const Statistics = ({ good, neutral, bad }) => {
  const totalScore = good + neutral + bad
  const averageScore = () => {
    let rawAve = (good - bad) / totalScore
    let Ave = rawAve.toFixed(2)
    return Ave
  }
  const positive = () => {
    let unrounded = ( good / totalScore ) * 100
    let roundedPositive = Math.round(unrounded)
    return roundedPositive
  }
  if(totalScore === 0) {
    return 'no given feedback yet'
  }
  return (
    <>
      <Statistic text='Good' value={good} />
      <Statistic text='Neutral' value={neutral} />
      <Statistic text='Bad' value={bad} />
      <br />
      <Statistic text='Total' value={totalScore} />
      <Statistic text='Average' value={averageScore()} />
      <Statistic text='Positive (%)' value={positive()} />
    </>
  )
}

const App = props => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give us your feedback</h1>
      <Button handleClick={handleClickGood} text='GOOD' />
      <Button handleClick={handleClickNeutral} text='NEUTRAL' />
      <Button handleClick={handleClickBad} text='BAD' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
