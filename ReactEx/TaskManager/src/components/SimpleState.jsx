import { useState } from "react";
import "./style.css"
function SimpleState() {
    let [isReactImportant, setIsReactImportant] = useState(true);
    console.log(isReactImportant);
    function handleClick() {
        // isReactImportant = false;
        setIsReactImportant(prevValue => !prevValue)
    }
    return (
        <div>
            <h1>Is React important to learn?</h1>
            <button onClick={handleClick}>
                {
                    isReactImportant ? "Yes" : "No"
                }
            </button>
        </div>
    )
}
export default SimpleState;
