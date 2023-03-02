import React , {useState} from "react";

function Todo(props) {
   const [id, setId] = useState(0);
   const [title, setTitle] = useState("");
   const [descripption, setDescription]= useState("");
   const [priority, setPriority]= useState(0);
   const [date, setDate]= useState("");
   const [active, setActive]= useState(true);
   
    return (
        <li className="todo stack-small">
        <div className="c-cb">
          <input id={props.id}  type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)} />
          <label className="todo-label" htmlFor="todo-0">
            {props.name}
            {props.description}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    );
  }

  export default Todo