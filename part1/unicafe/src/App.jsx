import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => {
  if (props.text === "positive") {
    return (
      <div>{props.text} {props.state} %</div>
    )
  }

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
      <Display text="all" state={props.all} />
      <Display text="average" state={props.average} />
      <Display text="positive" state={props.positive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleButtonClick = (which) => () => {
    let updatedGood = good
    let updatedBad = bad

    switch(which) {
      case "good":
        setGood(good + 1)
        updatedGood = good + 1
        break
      case "neutral":
        setNeutral(neutral + 1)
        break
      case "bad":
        setBad(bad + 1)
        updatedBad = bad + 1
        break
      default:
        console.log("This log should never appear! Expression:", which);
    }
    
    setAll(all + 1)
    const difference = updatedGood - updatedBad
    setAverage(difference / (all + 1))
    setPositive((updatedGood / (all + 1)) * 100)
  }

  return (
    <div>
      <Feedback handleClick={handleButtonClick} />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App