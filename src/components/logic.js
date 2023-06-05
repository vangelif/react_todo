import Input from "./input";
import List from "./list";

const Logic = () => {
  const todos = [
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
  ];
  return (
    <div>
      <Input />
      <List todosProps={todos} />
    </div>
  );
};
export default Logic;

