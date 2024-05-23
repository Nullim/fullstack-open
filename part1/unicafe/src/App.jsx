import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => {
  return (
    <div>{props.text} {props.state}</div>
  )
}
const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={props.handleClick('good')} text='good' />
      <Button handleClick={props.handleClick('neutral')} text='neutral' />
      <Button handleClick={props.handleClick('bad')} text='bad' />
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <Display text="good" state={props.good} />
      <Display text="neutral" state={props.neutral} />
      <Display text="bad" state={props.bad} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleButtonClick = (which) => () => {
    switch(which) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        console.log("This log should never appear! Expression:", which);
    }
  }

  return (
    <div>
      <Feedback handleClick={handleButtonClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App