import "./Todo.css";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo._id, !todo.done)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
}
