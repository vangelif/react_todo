const List = (props) => {
  return (
    <ul>
      {props.todosProps.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};
export default List;

