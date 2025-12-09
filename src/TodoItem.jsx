export default function TodoItem({
  item,
  onToggle,
  onDelete,
  onEdit,
  editingId,
  editingText,
  onChangeEdit,
  onSaveEdit,
  onCancelEdit,
}) {
  return (
    <li className="todo-item">
      {editingId === item.id ? (
        <div className="todo-edit-row">
          <input
            className="todo-edit-input"
            value={editingText}
            onChange={(e) => onChangeEdit(e.target.value)}
          />
          <button className="btn save" onClick={() => onSaveEdit(item.id)}>Save</button>
          <button className="btn cancel" onClick={onCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div className="todo-row">
          <label className="todo-label">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => onToggle(item.id)}
            />
            <span className={item.done ? "done" : ""}>{item.text}</span>
          </label>
          <div className="todo-actions">
            <button className="btn edit" onClick={() => onEdit(item.id, item.text)}>Edit</button>
            <button className="btn delete" onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
}
