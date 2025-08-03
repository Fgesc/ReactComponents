import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div className="todoapp">
      <Header/>
      <section>
          <TaskForm/>
          <TaskList/>
          <Footer/>
      </section>
    </div>
  );
}

export default App;
