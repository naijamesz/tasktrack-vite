/* eslint-disable no-unused-vars */
import { useState } from 'react'

const CreateTodo = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4']

  const handleClick = () => {
    setCount(count - 1)
  }
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  return (
    <>
      <h1>Tasks: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={handleClick} value='Add Tasks Button'>
        -
      </button>
      <br />
      <br />
      <h1>Input: {input}</h1>
      <input type='text' onChange={handleChange} id='' />
      <ul>
        {tasks.map((tasks) => (
          <li key={tasks}>{tasks}</li>
        ))}
      </ul>
    </>
  )
}

export default CreateTodo
