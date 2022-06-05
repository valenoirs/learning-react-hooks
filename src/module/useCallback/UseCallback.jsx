/* eslint-disable */

import { useCallback, useState } from "react"

// Importing component
import Todo from './Todo'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])

    const increment = () => {
        setCount(count + 1)
    }

    const newTodo = useCallback(() => {
        setTodo((todo) => [...todo, 'New Item'])
    }, [todo])

    return (
        <div>
            <div>
                <Todo todo={todo} newTodo={newTodo}/>
            </div>
            <div>
                <h1>Count</h1>
                <p>Counter : {count}</p>
                <button onClick={increment}>Render Counter</button>
            </div>
        </div>
    )
}

export default UseCallback