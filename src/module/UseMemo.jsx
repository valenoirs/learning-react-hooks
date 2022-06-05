/* eslint-disable */

import { useState, useMemo } from "react"

const heavyFunction = (number) => {
    console.log('Counting...')
    for(let i = 0; i < 1000000000; i++){
        number +=1
    }
    return number
}

const UseMemo = (props) => {
    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])

    const counting = useMemo(() => heavyFunction(count), [count])

    const increment = () => {
        setCount(count + 1)
    }

    const newTodo = () => {
        setTodo((todo) => [...todo, 'New Item!'])
    }

    return (
        <div>
            <div className="todo">
                <h1>Todo</h1>
                {todo.map((todo, index) => <p key={index}>
                    {todo}
                </p>)}
                <button onClick={newTodo}>Render New Todo!</button>
            </div>
            <div className="counter">
                    <h1>Counter</h1>
                    <p>Counter : {count}</p>
                    <button onClick={increment}>Render Counter!</button>
            </div>
            <div className="heavy">
                {counting}
            </div>
        </div>
    )
}

export default UseMemo