import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [CompleteTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };

  return (
    <>
      <div className="inputSpace">
        <input
          onChange={onChangeTodoText}
          type="text"
          placeholder="Input Todo"
          value={todoText}
        />
        <button onClick={onClickAdd}>Todo</button>
      </div>
      <div className="incompleteSpace">
        <p>INCOMPLETE</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="todo">
                <li>{todo}</li>
                <button>Complete</button>
                <button onClick={onClickDelete}>Cancel</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="completeSpace">
        <p>COMPLETE</p>
        <ul>
          {CompleteTodos.map((todo) => {
            return (
              <div className="todo" key={todo}>
                <li>{todo}</li>
                <button>Return</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
