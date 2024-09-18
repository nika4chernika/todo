import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import "./todo.css";

function EditWindow({
  id,
  content,
  isDarkTheme,
  setShowEditWindow,
  changeTasks,
  tasks,
}) {
  const [newContent, setNewContent] = useState(content);
  const handleSaveEdit = (id) => {
    changeTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, content: newContent } : task
      )
    );
    setShowEditWindow(null);
  };

  return (
    <div className="task-edit-window-bg">
      <div
        className={
          isDarkTheme ? "task-edit-window-dark-theme" : "task-edit-window"
        }
      >
        <textarea
          className={
            isDarkTheme ? "task-content-edit-dark-theme" : "task-content-edit"
          }
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button
          className="save-change-button"
          onClick={() => handleSaveEdit(id)}
        >
          Save
        </button>
        <button className="close-edit-window-button">
          <MdOutlineClose
            className={isDarkTheme ? "remove-icon-dark" : "remove-icon"}
            onClick={() => setShowEditWindow(null)}
          />
        </button>
      </div>
    </div>
  );
}

export default EditWindow;
