import { useEffect, useState } from "react"

const UseEffect = (props) => {
    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(0)

    useEffect(() => {
        let timer = setTimeout(() => { // need to name the function in able to clear it
            setCount(() => count + 1)
        }, 1000)

        return () => clearTimeout(timer) // use return function to cleanup effect to reduce memory leak *cause after render the timer still running and need to be stopped
    }, [])
    // Add second argument <array> to render only once, remove the array and it will do infinite render

    useEffect(() => {
        setSum(() => count + count)
    }, [count])
    // Add variable to array to render only if that variable change

    return (
        <div>
            <p>Count been rendered : {count} times</p>
            <button onClick={() => {setCount(() => count + 1)}}>Render!</button>

            <p>Sum (count + count) : {sum}</p>
        </div>
    )
}

export default UseEffect