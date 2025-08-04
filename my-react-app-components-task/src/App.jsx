import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {
  return (
    <div className="todoapp">
      <h1>Задачи</h1>
      <section>
        <TaskForm/>
        <ul className="todo-list">
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
        </ul>
          <Footer/>
      </section>
    </div>
  );
}

export default App;
