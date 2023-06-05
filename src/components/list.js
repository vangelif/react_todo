import Item from "./items";

const List = ({ todosProps, handleChange, delTodo, setUpdate }) => {
  console.log(todosProps);

  return (
    <ul>
      {todosProps.map((todo) => (
        <Item
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default List;

