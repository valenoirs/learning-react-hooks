import { useState } from "react"

const UseState = (props) => {
    const [game, setGame] = useState('Dota 2')
    const [object, setObject] = useState({
        first:'First',
        second: 'Second',
        third: 'Third',
    })

    const updateObject = (event) => {
        setObject(prev => {
            return {...prev, first: 'Second', second: 'Third'}
        })
    }

    return (
        <div>
            {/* Single state */}
            <p>Game Title: {game}</p>
            <button onClick={() => setGame('CS:GO')}>Change Game</button>

            {/* Object */}
            <p>{object.first} {object.second} {object.third}</p>
            <button onClick={updateObject}>Update</button>
        </div>
    )
}

export default UseState