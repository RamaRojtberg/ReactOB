import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const Todolist = ({todos, onTodoClick}) => {


  return (
    <div>
        <h1>Your TODOs</h1>
        <ul>
            <li>
                {todos.map((todo, index) => (
                    <Todo
                    key={todo.id}
                    {...todo} // id, text, completed
                    onClick={
                        () => onTodoClick(todo.id)
                    }>

                    </Todo>
                ))}
            </li>
        </ul>
    </div>
  )
}

Todolist.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default Todolist

