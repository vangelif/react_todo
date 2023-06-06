import PropTypes from 'prop-types';
import { useState } from 'react';

const Input = ({ addTodoItem }) => {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodoItem(task);
      setTask('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add a todo.."
        />
        <button type="submit" className="input-submit">
          Submit
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

Input.propTypes = {
  addTodoItem: PropTypes.string.isRequired,
};
export default Input;
