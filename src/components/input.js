import { useState } from "react";

const Input = ({ addTodoItem }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(task);
    setTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Task:{" "}
          <input
            type="text"
            value={task}
            onChange={handleSubmit}
            placeholder="Add a todo.."
          />
        </label>
      </form>
      <h5>Task: {task}</h5>
    </>
  );
};
export default Input;

