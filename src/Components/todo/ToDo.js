import "./todo.css";
import Tasks from "./Tasks";
import Footer from "./Footer";
import Header from "./Header";
import AddTask from "./AddTask";
import { useState, useEffect } from "react";
import { initialTasks } from "../../data/todo";

// + 1. Плавное добавление/удаление task
// + 2. Кастомный чекбокс
// + 3. Валидность таски нельзя добавить пустую строку, и строку только с пробелами like: "     " - так нельзя
// + 4. Темная тема
// + 5. uuid для id
// + 6. в футере сделать логику кнопок (1 массив только tasks его фильтруем)
// + 7. удаление/редактирование таски (иконки взять с библиотеки react icons https://react-icons.github.io/react-icons/)
// + 8. адаптив
// + 9. если контент таски заполняет 75% от контейнера, где лежит таска мы обрезаем, ставим ... и при наведении они подчеркиваются, также при нажатии открывается модалка с полным текстом таски.
// + 10. сделать сохранение тасок в локал стораж

function ToDo() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      document.body.classList.toggle("dark-theme", newTheme);
      return newTheme;
    });
  };

  return (
    <div className="todo">
      <Header
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
      />
      <AddTask
        tasks={tasks}
        changeTasks={setTasks}
        isDarkTheme={isDarkTheme}
      />
      <Tasks
        tasks={tasks}
        changeTasks={setTasks}
        isDarkTheme={isDarkTheme}
        currentFilter={currentFilter}
      />
      <Footer
        tasks={tasks}
        changeTasks={setTasks}
        isDarkTheme={isDarkTheme}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
    </div>
  );
}

export default ToDo;
