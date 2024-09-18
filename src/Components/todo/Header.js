import "./todo.css";

function Header({ isDarkTheme, toggleTheme }) {
  return (
    <header className="header">
      <h1 className="title">Todo</h1>
      <button className="theme-btn" onClick={() => toggleTheme()}>
        <img
          src={
            isDarkTheme
              ? "./images/todo-pics/icon-sun.svg"
              : "./images/todo-pics/icon-moon.svg"
          }
          alt="icon"
          className="theme-img"
        />
      </button>
    </header>
  );
}

export default Header;
