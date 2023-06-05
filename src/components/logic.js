import Input from "./input";
import List from "./list";
import { useState } from "react";

const Logic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: true,
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false,
    },
  ]);
  const addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title: title,
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
      <List todosProps={todos} handleChange={handleChange} delTodo={delTodo} />
    </div>
  );
};
export default Logic;

