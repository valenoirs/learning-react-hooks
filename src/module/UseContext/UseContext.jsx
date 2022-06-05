/* eslint-disable */

import { createContext, useState } from "react";

// Importing store
import StoreContext from './store/StoreContext'

// Importing floors
import First from "./floors/First";

const UseContext = (props) => {
    const [username, setUsername] = useState('Valenoirs')
    const [object, setObject] = useState({
        first: 'First',
        second: 'Second',
        third: 'Third',
    })

    const {first,second,third} = object

    return (
        <StoreContext.Provider value={{username, object}}> {/* Storing multiple value */}
            <div>
                <p>Username saved to context : {username}</p>
                <p>Object generated from context : {`${first}, ${second}, ${third}`}</p>
                <button onClick={() => setUsername('Lucky')}>Change Username!</button>
                <First />
            </div>
        </StoreContext.Provider>
    )
}

export default UseContext