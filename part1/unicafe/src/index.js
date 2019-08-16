import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ feedback }) => {
  const sall = feedback.good + feedback.bad + feedback.neutral
  const pgood = feedback.good / (sall) * 100
  const avg = (feedback.good - feedback.bad) / (sall)
  if (sall === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <Head title={'statistics'} />
      <table>
        <tbody>
          <Statistic text='good' value={feedback.good} />
          <Statistic text='neutral' value={feedback.neutral} />
          <Statistic text='bad' value={feedback.bad} />
          <Statistic text='all' value={sall} />
          <Statistic text='average' value={avg} />
          <Statistic text='percentage good' value={pgood} />
        </tbody>
      </table>
    </>
  )
};
const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text + ': '}</td>
      <td>{Math.floor(value * 100) / 100}</td>
    </tr>
  )
}
const Head = ({ title }) => {
  return <h1>{title}</h1>
}
const Anecdote = ({ text }) => {
  return <h3>{text}</h3>
}
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [an, setan] = useState(0)
  const hgood = () => {
    setGood(good + 1)
  }
  const hneutral = () => {
    setNeutral(neutral + 1)
  }
  const hbad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Head title={'give feedback'} />
      <Button handleClick={hgood} text={'good'} />
      <Button handleClick={hneutral} text={'neutral'} />
      <Button handleClick={hbad} text={'bad'} />
      <Statistics feedback={{ good, neutral, bad }} />
      <Anecdote text={anecdotes[an]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
