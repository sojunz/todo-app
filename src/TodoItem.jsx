export default function TodoItem({ it, toggleItem, deleteItem, startEdit }) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={it.done}
            onChange={() => toggleItem(it.id)}
          />
          <span style={{ textDecoration: it.done ? "line-through" : "none" }}>
            {it.text}
          </span>
        </label>
        <button onClick={() => startEdit(it.id, it.text)}>Edit</button>
        <button onClick={() => deleteItem(it.id)}>Delete</button>
      </li>
    );
  }
  