import "./todo.css";
const FILTERED = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

function Footer({
  tasks,
  changeTasks,
  isDarkTheme,
  currentFilter,
  setCurrentFilter,
}) {
  const clearCompletedTasks = () => {
    const activeTasks = tasks.filter((task) => !task.completed);
    changeTasks(activeTasks);
  };

  return (
    <footer className={isDarkTheme ? "footer__dark-theme" : "footer"}>
      <p className="footer-text">
        {tasks.filter((task) => !task.completed).length} items left
      </p>
      <ul className="footer-filter">
        <li className="filter-link">
          <button
            className={`filter-btn ${
              currentFilter === FILTERED.ALL ? "active" : ""
            }`}
            onClick={() => setCurrentFilter(FILTERED["ALL"])}
          >
            All
          </button>
        </li>
        <li className="filter-link">
          <button
            className={`filter-btn ${
              currentFilter === FILTERED.ACTIVE ? "active" : ""
            }`}
            onClick={() => setCurrentFilter(FILTERED["ACTIVE"])}
          >
            Active
          </button>
        </li>
        <li className="filter-link">
          <button
            className={`filter-btn ${
              currentFilter === FILTERED.COMPLETED ? "active" : ""
            }`}
            onClick={() => setCurrentFilter(FILTERED["COMPLETED"])}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-btn" onClick={clearCompletedTasks}>
        Clear Complited
      </button>
    </footer>
  );
}

export default Footer;
