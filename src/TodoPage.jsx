import { useState } from "react";
import "./Todo.css"; // Todo 전용 스타일

export default function TodoPage() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text: value, done: false }]);
    setText("");
  };

  const toggleItem = (id) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));

  const deleteItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const startEdit = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const saveEdit = (id) => {
    const value = editingText.trim();
    if (!value) return;
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, text: value } : it)));
    setEditingId(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <section className="todo-wrap">
      <h1 className="todo-title">My Day</h1>

      <form className="todo-form" onSubmit={addItem}>
        <input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button className="todo-add" type="submit">Go</button>
      </form>
      <img src="/Home.JPG" alt="Home Image" width="500" />
      <ul className="todo-list">
        {items.map((it) => (
          <li key={it.id} className="todo-item">
            {editingId === it.id ? (
              <div className="todo-edit-row">
                <input
                  className="todo-edit-input"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button className="btn save" onClick={() => saveEdit(it.id)}>Save</button>
                <button className="btn cancel" onClick={cancelEdit}>Cancle</button>
              </div>
            ) : (
              <div className="todo-row">
                <label className="todo-label">
                  <input
                    type="checkbox"
                    checked={it.done}
                    onChange={() => toggleItem(it.id)}
                  />
                  <span className={it.done ? "done" : ""}>{it.text}</span>
                </label>
                <div className="todo-actions">
                  <button className="btn edit" onClick={() => startEdit(it.id, it.text)}>Edit</button>
                  <button className="btn delete" onClick={() => deleteItem(it.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
