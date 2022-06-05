/* eslint-disable */

// useReduce
// The useReducer Hook is similar to the useState Hook.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

import { useReducer } from "react"

const todoList = [
    {
        id: 1,
        name: 'Eat', 
        isDone: false
    },
    {
        id: 2,
        name: 'Sleep', 
        isDone: false
    },
    {
        id: 3,
        name: 'Code', 
        isDone: false
    },
]

const UseReducer = (props) => {
    const [todos, dispatch] = useReducer((state, action) => {
        switch(action.status) {
            case 'COMPLETE' :
                return state.map(todo => {
                    if (todo.id === action.id) {
                        return { ...todo, isDone: !todo.isDone}
                    }
                    else{
                        return todo
                    }
                })
            default :
                return state
        }
    },
    todoList)

    const handleCheck = async (argument) => {
        dispatch({status: 'COMPLETE', id: argument.id})
    }

    return (
        <div>
            {todos.map((element) => (
                <label key={element.id}>
                    <input
                        type='checkbox'
                        checked={element.isDone}
                        onChange={() => handleCheck(element)}
                    />
                    {element.name}
                </label>
            ))}
        </div>
    )
}

export default UseReducer