import { useState } from "react";
const Input = ({ addTodoItem }) => {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodoItem(task);
      setTask("");
      setMessage("");
    } else {
      setMessage("Please add item.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          <input
            className="input-text"
            type="text"
            value={task}
            onChange={handleSubmit}
            placeholder="Add a todo.."
          />
        </label>
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default Input;

