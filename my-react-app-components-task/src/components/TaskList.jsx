import TaskItem from "./TaskItem";


function TaskList() {
    return <ul className="todo-list">
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
    </ul>;
}
export default TaskList;