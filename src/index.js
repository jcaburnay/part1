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

const Button = props => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = ({ anecdotes }) => {
  const [ selected, setSelected ] = useState(0)
  const [ vote, setVote ] = useState(...anecdotes)

  const handleClick = () => {
    const randNum = Math.floor((Math.random() * anecdotes.length))
    setSelected(randNum)
  }
  const handleVote = () => {
    const copy = {...anecdotes}
    copy[selected].vote++
    setVote(copy)
  }
  return (
    <div>
      {anecdotes[selected].anecdote}
      <br />
      <p>has {anecdotes[selected].vote} votes</p>
      <Button onClick={handleVote} text='vote'/>
      <Button onClick={handleClick} text='next anecdote'/>
    </div>
  )
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));