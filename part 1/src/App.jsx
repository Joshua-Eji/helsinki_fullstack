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



/*import Button from './Button'
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
*/

import { useState } from 'react'
import Button from './Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes]= useState(new Array(anecdotes.length).fill(0))
  const highestVotes = Math.max(...votes)
  const indexOfHighestVotes = votes.indexOf(highestVotes)

  function randomValue(){
    const value = Math.floor(Math.random() * anecdotes.length)
    setSelected(value)
  }

  function upVote() {
    //increase vote for the current anecdote
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>

      <h1>Anecdotes of the day</h1>

      {anecdotes[selected]}

      <p>has {votes[selected]} votes</p>

    <div>
      <Button name="vote" onClick={() => {upVote()}}/>
      <Button name="next anecdote" onClick={() => {randomValue()}}/>
    </div>

    <h1>Anecdotes with most votes</h1>
    {anecdotes[indexOfHighestVotes]}
    <p>has {votes[indexOfHighestVotes]} votes</p>

    </div>
  )
}


export default App