const List = (props) => {
  const { todosProps } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};
export default List;

