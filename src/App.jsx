import React, { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos(...[todos.filter((todo) => todo.id !== todoId)]);
  }

  return (
    <div className='App'>
      <h1 style={{ fontFamily: 'fantasy', color: 'rgb(193 89 193 / 53%)', border: '3px solid', padding: '10px 30px', borderRadius: '15px' }}>MY TODOS</h1>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} />
      </div>
    </div>
  )
}

export default App