import styles from "../styles/Item.module.css";
import { useState } from "react";
const Item = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          checked={itemProp.completed}
          type="checkbox"
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.task}
      </div>
      <input
        type="text"
        value={itemProp.task}
        style={editMode}
        className={styles.textInput}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default Item;

