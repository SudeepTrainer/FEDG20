import "./style.css"
function SimpleState() {
    const isReactImportant = false;
    function handleClick() {
        console.log("Button Clicked");
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
