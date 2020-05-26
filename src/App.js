import React from "react";
import "./styles.css";
import Todo from "./TodoItem";
import TodoList from "./TodoList";


export default function App() {
  state = {todos: [
    {
        "id": 1,
        "description": "take out trash",
       
      },
      {
        "id": 2,
        "description": "wash dishes",
      },
]}
  return (
    <div className="App">
   <Todo/>
      <TodoList/>
      <Todo=/>

    </div>
  );
}
