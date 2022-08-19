import React from 'react'
import TodoItem from './TodoItem'

function Todos() {
  return (
    <div className='container'>
        <h3>Todos List</h3>
        <TodoItem todo = {props.todos[0]}/>
        </div>
  )
}

export default Todos