/* eslint-disable */

import { useContext } from "react";

// Importing floors
import First from "./floors/First";
import Second from "./floors/Second";
import Third from "./floors/Third";

const UseContext = (props) => {
    return (
        <div>
            <h1>useContext</h1>
            <First />
            <Second />
            <Third />
        </div>
    )
}

export default UseContext