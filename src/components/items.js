import styles from "../styles/Item.module.css";
const Item = ({ itemProp, handleChange, delTodo }) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          checked={itemProp.completed}
          type="checkbox"
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.task}
      </div>
    </li>
  );
};
export default Item;

