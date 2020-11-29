import React from "react";

export const IncompleteSpace = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incompleteSpace">
      <p>INCOMPLETE</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="todo">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickComplete(index);
                }}
              >
                Complete
              </button>
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                Cancel
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
