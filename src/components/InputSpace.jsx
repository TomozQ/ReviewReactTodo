import React from "react";

export const InputSpace = (props) => {
  const { onChange, todo, onClick } = props;
  return (
    <div className="inputSpace">
      <input
        onChange={onChange}
        type="text"
        placeholder="Input Todo"
        value={todo}
      />
      <button onClick={onClick}>Todo</button>
    </div>
  );
};
