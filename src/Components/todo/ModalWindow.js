import "./todo.css";
import { MdOutlineClose } from "react-icons/md";

function ModalWindow({ content, isDarkTheme, setShowModalWindow }) {
  return (
    <div className="task-modal-window-bg">
      <div
        className={
          isDarkTheme ? "task-modal-window-dark-theme" : "task-modal-window"
        }
      >
        <p
          className={
            isDarkTheme
              ? "task-content-modal-window-dark-theme"
              : "task-content-modal-window"
          }
        >
          {content}
        </p>
        <button className="close-modal-window-button">
          <MdOutlineClose
            className={isDarkTheme ? "remove-icon-dark" : "remove-icon"}
            onClick={() => setShowModalWindow(null)}
          />
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
