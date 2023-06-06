import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Item.module.css';

const Item = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
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

        <button type="button" onClick={handleEditing}>
          Edit
        </button>
        <button type="submit" onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
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
Item.propTypes = {
  itemProp: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default Item;
