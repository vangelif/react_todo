import Item from "./items";

const List = ({ todosProps, handleChange, delTodo }) => {
  console.log(todosProps);

  return (
    <ul>
      {todosProps.map((todo) => (
        <Item
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

export default List;

