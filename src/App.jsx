import React, { useState } from "react";
import "./styles.css";
import { InputSpace } from "./components/InputSpace";
import { IncompleteSpace } from "./components/IncompleteSpace";
import { CompleteSpace } from "./components/CompleteSpace";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [CompleteTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...CompleteTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...CompleteTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos, CompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputSpace
        onChange={onChangeTodoText}
        todo={todoText}
        onClick={onClickAdd}
      />
      <IncompleteSpace
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteSpace todos={CompleteTodos} onClickReturn={onClickReturn} />
    </>
  );
}
