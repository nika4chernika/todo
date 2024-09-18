import "./todo.css";
import { useState } from "react";
import { MdOutlineModeEdit, MdOutlineClose } from "react-icons/md";
import EditWindow from "./EditWindow";
import ModalWindow from "./ModalWindow";

function Tasks({ tasks, isDarkTheme, changeTasks, currentFilter }) {
  const [showMoreIcons, setShowMoreIcons] = useState(null);
  const [showModalWindow, setShowModalWindow] = useState(null);
  const [showEditWindow, setShowEditWindow] = useState(null);

  const handleChangeCompleted = (id) => {
    changeTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleTaskHover = (event) => {
    const container = event.target;
    if (container.scrollWidth > container.clientWidth) {
      container.classList.add("underline");
    } else {
      container.classList.remove("underline");
    }
  };

  const handleDeleteTask = (id) => {
    changeTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = () => {
    switch (currentFilter) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasksArray = filteredTasks();

  return (
    <ul className={isDarkTheme ? "task-list__dark-theme" : "task-list"}>
      {filteredTasksArray.map(({ id, content, completed }) => (
        <li
          key={id}
          className={isDarkTheme ? "task__dark-theme" : "task"}
          onMouseEnter={() => setShowMoreIcons(id)}
          onMouseLeave={() => setShowMoreIcons(null)}
        >
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="input-checkbox"
              checked={completed}
              onChange={() => handleChangeCompleted(id)}
            />
            <span
              className={
                isDarkTheme
                  ? "custom-checkbox-rect__dark-theme"
                  : "custom-checkbox-rect"
              }
            ></span>
          </label>
          <p
            className={`task-title ${
              isDarkTheme ? "task-title__dark-theme" : ""
            } ${completed ? "completed" : ""}`}
            onMouseEnter={handleTaskHover}
            onClick={() => setShowModalWindow(id)}
          >
            {content}
          </p>
          {showMoreIcons === id && (
            <div className="hidden-icons">
              <button className="edit-icon-button">
                <MdOutlineModeEdit
                  className={isDarkTheme ? "edit-icon-dark" : "edit-icon"}
                  onClick={() => setShowEditWindow(id)}
                />
              </button>
              <button className="remove-icon-button">
                <MdOutlineClose
                  className={isDarkTheme ? "remove-icon-dark" : "remove-icon"}
                  onClick={() => handleDeleteTask(id)}
                />
              </button>
            </div>
          )}
          {showEditWindow === id && (
            <EditWindow
              id={id}
              content={content}
              setShowEditWindow={setShowEditWindow}
              tasks={tasks}
              changeTasks={changeTasks}
              isDarkTheme={isDarkTheme}
            />
          )}
          {showModalWindow === id && (
            <ModalWindow
              content={content}
              setShowModalWindow={setShowModalWindow}
              isDarkTheme={isDarkTheme}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
