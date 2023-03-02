import './App.css';
import Task from "./components/Task";
import Modal from './components/Modal';
import FilterButton from "./components/FilterButton";
import {useState, useEffect} from "react";
import axios from "axios";
import 'reactjs-popup/dist/index.css';

const baseURL = "http://localhost:8080/task";




function App() {
 
  const [tasks, setTasks] = useState([] );
  const loadTasks =async()=>{
   const result= await axios.get(baseURL)
setTasks(result.data);
  }
  
  useEffect(() => {
   loadTasks();
    },[] );
   
  function addTask() {
    window.location.reload(true);
   }
  


  // const taskList = tasks.map((task) => (
  //   <Task id={task.id}
  //   name={task.title}
  //   completed={task.active}
  //   key={task.id} />
  // //  toggleTaskCompleted={toggleTaskCompleted}
  //  // deleteTask={deleteTask}/>
  // ));

  
  // function toggleTaskCompleted(id) {
  //   const updatedTasks = tasks.map((task) => {
  //     // if this task has the same ID as the edited task
  //     if (id === task.id) {
  //       // use object spread to make a new object
  //       // whose `completed` prop has been inverted
  //       return {...task, completed: !task.completed}
  //     }
  //     return task;
  //   });
  //   setTasks(updatedTasks);
  // }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    axios.delete(baseURL+"/"+id)
    setTasks(remainingTasks);
  }
  return (
    <div className="App">
      <h1>To Do </h1>

<Modal 

url={baseURL}
addTask={addTask}

/>
      

      {/* <Form addTask={addTask}/> */}
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
     
     
      <ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
>
{tasks.map((task)=>(

<Task id={task.id}
    name={task.title}
    completed={task.active}
    description={task.description}
    key={task.id}
    deleteTask={deleteTask} />
))}

</ul>
    </div>
  );
}

export default App;
