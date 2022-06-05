/* eslint-disable */

// useRef
// Can be use to track state change [1]
// Can access DOM directly [2]
// Wont cause re-render [3]

import { useState, useRef, useEffect } from "react"

const UseRef = (props) => {
    const [inputValue, setInputValue] = useState('')
    const inputElement = useRef() // 2
    const count = useRef(0) //3
    const previousValue = useRef('') //1

    const focusInput = () => {
        inputElement.current.focus()
    }

    useEffect(() => {
        previousValue.current = inputValue
        count.current += 1
    })

    return (
        <div>
            <input type="text" ref={inputElement} value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={focusInput}>Focus input!</button>
            <h1>Render counter : {count.current}</h1>
            <h1>Previous value : {previousValue.current}</h1>
        </div>
    )
}

export default UseRef