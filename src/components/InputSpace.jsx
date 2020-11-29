import React from "react";

export const InputSpace = (props) => {
  const { onChange, todo, onClick, disabled } = props;
  return (
    <div className="inputSpace">
      <input
        onChange={onChange}
        type="text"
        placeholder="Input Todo"
        value={todo}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        Todo
      </button>
    </div>
  );
};
