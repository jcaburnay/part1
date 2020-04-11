import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  {
      'anecdote': 'If it hurts, do it more often',
      'vote': 0
  },
  {
      'anecdote': 'Adding manpower to a late software project makes it later!',
      'vote': 0
  },
  {
      'anecdote': 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'vote': 0
  },
  {
      'anecdote': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'vote': 0
  },
  {
      'anecdote': 'Premature optimization is the root of all evil.',
      'vote': 0
  },
  {
      'anecdote': 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'vote': 0
  }
]

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

const App = ({ anecdotes }) => {
  const initRandNum = Math.floor((Math.random() * anecdotes.length))
  const [ selected, setSelected ] = useState(initRandNum)
  const [ vote, setVote ] = useState(...anecdotes)
  const [ max, setMax ] = useState(0)
  const [ highest, setHighest ] = useState(initRandNum)
  
  const handleClick = () => {
    const randNum = Math.floor((Math.random() * anecdotes.length))
    setSelected(randNum)
  }

  const handleVote = () => {
    const copy = {...anecdotes}
    copy[selected].vote++
    if (copy[selected].vote > max) {
      setHighest(selected)
      setMax(copy[selected].vote)
    }
    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
        <blockquote><em>"{anecdotes[selected].anecdote}"</em></blockquote>
      <p>has {anecdotes[selected].vote} votes</p>
      <Button onClick={handleVote} text='vote'/>
      <Button onClick={handleClick} text='next anecdote'/>
      <br />
      <h2>Anecdote with the most votes</h2>
        <blockquote><em>"{anecdotes[highest].anecdote}"</em></blockquote>
      <p>has { anecdotes[highest].vote } votes</p>
    </div>
  )
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));