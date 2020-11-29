import React from "react";

export const CompleteSpace = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="completeSpace">
      <p>COMPLETE</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className="todo" key={todo}>
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickReturn(index);
                }}
              >
                Return
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
