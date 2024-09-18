import "./todo.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTask({ tasks, changeTasks, isDarkTheme }) {
  const [taskText, setTaskText] = useState("");
  const handleKeyDownAddTask = () => {
    if (taskText.trim() !== "") {
      const task = {
        id: uuidv4(),
        completed: false,
        content: taskText,
      };
      changeTasks([...tasks, task]);
      setTaskText("");
    }
  };
  const checkKeyClick = (e) => {
    if (e.key === "Enter") {
      handleKeyDownAddTask();
    }
  };
  return (
    <div
      className={
        isDarkTheme ? "add-new-task-input__dark-theme" : "add-new-task-input"
      }
      onKeyDown={(e) => checkKeyClick(e)}
    >
      <label className="checkbox-label">
        <input type="checkbox" className="input-checkbox" />
        <span
          className={
            isDarkTheme
              ? "custom-checkbox-rect__dark-theme"
              : "custom-checkbox-rect"
          }
        ></span>
      </label>
      <input
        type="text"
        placeholder="Create a new todo..."
        className={isDarkTheme ? "input-text__dark-theme" : "input-text"}
        onChange={(e) => setTaskText(e.target.value)}
        value={taskText}
      />
    </div>
  );
}

export default AddTask;
