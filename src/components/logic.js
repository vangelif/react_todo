import Input from "./input";
import List from "./list";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Logic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      task: "Setup development environment",
      completed: true,
    },
    {
      id: uuidv4(),
      task: "Develop website and add content",
      completed: false,
    },
    {
      id: uuidv4(),
      task: "Deploy to live server",
      completed: false,
    },
  ]);
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  const addTodoItem = (task) => {
    const newTodo = {
      id: uuidv4(),
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  return (
    <div>
      <Input addTodoItem={addTodoItem} />
      <List
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};
export default Logic;

