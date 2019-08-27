import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Times = ({t}) => {
  return(
    <div>{t}</div>
  )
}

const Added = ({a}) => {
  return(
    <div>{a}</div>
  )
}

const Ops = ({o}) => {
  return(
    <div>{o.join(' ')}</div>
  )
}

const Multiply = ({multi}) => {
  return(
    <button onClick={multi}>multiply</button>
  )
}

const Square = ({sq}) => {
  return(
    <button onClick={sq}>square</button>
  )
}

const App = () => {
  const [s, sets] = useState({
    t: 2,
    a: 1,
    o: []
  })

  const multi = () => sets({...s, a: s.a + s.a, o: s.o.concat('+')})
  const sq = () => sets({...s, t: s.t * s.t, o: s.o.concat('*')})
  return(
    <div>
      <Times t={s.t}/>
      <Added a={s.a}/>
      <Ops o={s.o}/>
      <Multiply multi={multi}/>
      <Square sq={sq}/>
      <p>Hello bla bla world</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
