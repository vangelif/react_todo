import { useState } from "react";

const Input = () => {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <form>
        <label>
          Task: <input type="text" value={task} onChange={handleChange} />
        </label>
      </form>
      <h5>Task: {task}</h5>
    </>
  );
};
export default Input;

// return (
//   <>
//     <form onSubmit={handleSubmit} className="form-container">
//       <input
//         // ...
//         className="input-text"
//       />
//       <button className="input-submit">Submit</button>
//     </form>
//     <span className="submit-warning">{message}</span>
//   </>
// );

