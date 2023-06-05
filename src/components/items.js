const Item = ({ itemProp, handleChange, delTodo }) => {
  // const handleChange = (id) => {
  //   // console.log("clicked", id);
  //   setTodos((prevState) =>
  //     prevState.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     })
  //   );
  // };
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </li>
  );
};
export default Item;

