import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const genRand = (a, b) => {
  const x = Math.trunc(Math.random() * 10)
  return (Math.abs(a + x - b))
}

const App = (props) => {
  const [anecState, setAnecState] = useState(0)
  const [max, setMax] = useState({ q: 0, m: 0 })
  const [anecVotes, setAnecVotes] = useState([0, 0, 0, 0, 0, 0])
  const hanNext = () => {
    console.log(anecState)
    setAnecState(genRand(0, 5))
  }
  const hanVote = () => {
    console.log(anecState)
    console.log(anecVotes)
    const v = [...anecVotes]
    v[anecState] += 1
    setAnecVotes(v)
    calcMax(v)
  }
  const calcMax = (v) => {
    let localMax = 0
    let questionIndex = 0
    console.log('len: ' + v.length)
    for (let i = 0; i <= v.length; i++) {
      console.log('v : ' + v[i])
      if (v[i] > localMax) {
        localMax = v[i]
        questionIndex = i
      }
    }
    console.log('max: ' + localMax)
    if (localMax > max.m) {
      setMax({ q: questionIndex, m: localMax })
    }
  }
  return (
    <>
      <div>{props.anecdotes[anecState]}</div>
      <div>{anecVotes[anecState]}</div>
      <Button handleClick={hanNext} text={'next anecdote'} />
      <Button handleClick={hanVote} text={'vote'} />
      <h1>Anecdote winner</h1>
      <h3>{props.anecdotes[max.q]}</h3>


    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(<App anecdotes={anecdotes} />,
  document.getElementById('root')
) 