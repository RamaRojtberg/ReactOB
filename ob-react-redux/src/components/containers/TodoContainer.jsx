import React from 'react'
import { connect } from 'react-redux'
import Todolist from '../pure/TodoList'

// Actions
import { toggleTodo } from '../../store/actions/actions'

// Filter Todo List
const filterTodos = (todos,filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed)
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed)
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

//We connects State & Dispatch to TodoList's Props
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todolist)

export default TodosContainer
// En este archivo no hace falta renderizar nada
// El contenedor lo único que hace es conectar estos datos 