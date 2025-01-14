import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";
import App from "./App.jsx";

const task = { id: 1, task_name: "ABOBA", isCompleted: false };

const Elem = ({ task_name, isCompleted, deleteTask, completeTask }) => {
  return (
    <div>
      {task_name}
      <span>{String(isCompleted)}</span>
      <button type="button" onClick={deleteTask}>
        Delete
      </button>
      {!isCompleted ? (
        <button type="button" onClick={completeTask}>
          Complete
        </button>
      ) : null}
    </div>
  );
};

const AppDop = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const addTasks = (str) => {
    return setTasks((prev) => {
      return [...prev, { id: prev.length, task_name: str, isCompleted: false }];
    });
  };

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((elem) => {
        return elem.id !== id;
      })
    );
  };

  const checkComplete = () => {};

  const completeTask = (id) => {
    setTasks((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, isCompleted: true } : elem
      )
    );
  };

  return (
    <div>
      <input value={value} onChange={handleValue} type="text" />
      <button type="button" onClick={() => addTasks(value)} disabled={!value}>
        Click
      </button>
      {tasks.length ? (
        <ul>
          {tasks.map((elem) => {
            return (
              <li key={elem.id}>
                <Elem
                  task_name={elem.task_name}
                  isCompleted={elem.isCompleted}
                  deleteTask={() => deleteTask(elem.id)}
                  completeTask={() => completeTask(elem.id)}
                />
              </li>
            );
          })}
        </ul>
      ) : null}
      <button type="button" onClick={() => addTasks(value)} disabled={!value}>
        Active
      </button>
      <button
        type="button"
        onClick={() => checkComplete(value)}
        disabled={!value}
      >
        Completed
      </button>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>{<App />}</StrictMode>
);
