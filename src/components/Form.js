import React, {useState} from "react";
import axios from "axios";


function Form(props) {
    const [name, setName] = useState("");
    function handleChange(e) {
        console.log(e.target.value);
       setName(e.target.value);
      }
    function handleSubmit(e) {
        e.preventDefault();
       


        axios
        .post(props.url, {
         
          title: name,
          description: "zadanie1",
          priority: "1",
          date:"data",
          active:"false"
        })

      props.addTask();


        setName("");

       
      



      }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />



      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
export default Form;