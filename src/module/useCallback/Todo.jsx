/* eslint-disable */

import { memo } from "react"

const Todo = (props) => {
    const {todo, newTodo} = props

    return(
        <div>
            <h1>Todo</h1>
            {todo.map((element, index) => <p key={index}>
                {element}
            </p>)}
            <button onClick={newTodo}>Render New Todo</button>
        </div>
    )
}

export default memo(Todo)