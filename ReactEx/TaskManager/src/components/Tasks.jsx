import "./style.css"
function Tasks() {
    let tasks = ["Task 1", "Task 2", "Task 3"];
    let taskElements = tasks.map(item => <h2>{item}</h2>)

    function addTask() {
        console.log("add task called");
    }

    return (
        <div>
            <button onClick={addTask}>Add Task</button>
            {taskElements}
        </div>
    )
}
export default Tasks;