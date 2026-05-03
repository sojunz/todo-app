import "./Todo.css";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span
        className={todo.done ? "done" : ""}
        onClick={() => onToggle(todo._id, !todo.done)}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(todo._id)}>✕</button>
    </li>
  );
}