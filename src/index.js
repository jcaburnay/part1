import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter, text }) => <div>{text}: {counter}</div>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
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
      <Display counter={good} text='GOOD' />
      <Display counter={neutral} text='NEUTRAL' />
      <Display counter={bad} text='BAD' />
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
