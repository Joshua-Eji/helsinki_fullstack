/*import Header from './Header';
import Content from './Content';
import Total from './Total';


const App = () => {
  const course = {
   name: 'Half Stack application development',
   parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
   ]
  }
 

  return(
    <>
      <Header header={course.name}/>
      <Content parts= {course.parts} />
      <Total parts={course.parts} />
    </>
  )
}*/


import { useState } from 'react'
import Button from './Button'
import StatisticsLine from './StatisticsLine'

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0
  const positive = total ? (good / total) * 100 : 0

  return (
    <>
    <StatisticsLine text="good" value={good} />
    <StatisticsLine text="neutral" value={neutral} />
    <StatisticsLine text="bad" value={bad} />
    <StatisticsLine text="all" value={total}/>
    <StatisticsLine text="average" value={average} />
    <StatisticsLine text="positive" value={` ${positive} %`} />
    </>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>
        give feedback
      </h1>

      <Button name="good" onClick={() => {setGood(good+1)}}/>
      <Button name="neutral" onClick={() => {setNeutral(neutral+1)}}/>  
      <Button name="bad" onClick={() => {setBad(bad+1)}}/>
      
      <h1>
        statistics
      </h1>

      { (good || neutral || bad) ?
      <Statistics good={good} neutral={neutral} bad={bad} />
      : 
      <p>No feedback given</p>
    }

    </div>
  )
}

export default App