import React, { useReducer, useState } from 'react'
import './TodoList.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, {
                id: Date.now(),
                text: action.text,
                completed: false
            }]
        case 'toggle':
            return state.map((todo) => todo.id == action.id ? {
                ...todo,
                completed: !todo.completed
            } : todo)
        case 'delete':
            return state.filter((todo) => todo.id !== action.id)
    }
}

const TodoList = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [text, setText] = useState('')
    const handleAdd = () => {
        if (!text.trim()) return
        dispatch({ type: 'add', text })
        setText('')
    }
    return (
        <div>
            <h2>Todo List</h2>
            <input onChange={(e) => setText(e.target.value)}
                onKeyUp={(e) => { if (e.key === 'Enter') handleAdd() }}
                type="text" placeholder='할 일을 추가하시오' />
            <button onClick={handleAdd}>add</button>
            <ul className='list'>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span onClick={() => dispatch({
                            type: 'toggle',
                            id: todo.id
                        })} className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                        <button onClick={() => dispatch({ type: 'delete', id: todo.id })}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList