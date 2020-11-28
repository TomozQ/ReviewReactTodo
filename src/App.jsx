import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
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
                <button>Cancel</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="completeSpace">
        <p>COMPLETE</p>
        <ul>
          <div className="todo">
            <li>CodeSandboxの紹介</li>
            <button>Return</button>
          </div>
        </ul>
      </div>
    </>
  );
}
