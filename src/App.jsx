import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="inputSpace">
        <input type="text" placeholder="Input Todo" />
        <button>Todo</button>
      </div>
      <div className="incompleteSpace">
        <ul>
          <div className="todo">
            <li>React入門</li>
            <button>Complete</button>
            <button>Cancel</button>
          </div>
          <div className="todo">
            <li>React復習</li>
            <button>Complete</button>
            <button>Cancel</button>
          </div>
        </ul>
      </div>
      <div className="completeSpace">
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
