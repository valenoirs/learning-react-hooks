import { useContext } from "react"

// Importing store
import StoreContext from '../store/StoreContext'

const Third = (props) => {
    const {username, object} = useContext(StoreContext)
    const {first,second,third} = object

    return (
        <div>
            <h1># Third floor</h1>
            <p>Username generated from context : {username}</p>
            <p>Object generated from context : {`${first}, ${second}, ${third}`}</p>
        </div>
    )
}

export default Third