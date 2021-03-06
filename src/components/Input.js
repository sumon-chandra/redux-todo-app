import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

import "./Input.css";
function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const addTodo = () => {
    console.log(`Adding ${input}`);
    dispatch(saveTodo({
        item: input,
        done: false,
        id: Date.now()
    }))
    setInput('')
  };
  return (
    <div className="input-container">
      <div className="input">
        
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default Input;
