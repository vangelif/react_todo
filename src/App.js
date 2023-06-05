import "./App.css";
import Header from "./components/header";
import Logic from "./components/logic";

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <Logic />
      </div>
    </div>
  );
};
export default TodoApp;

