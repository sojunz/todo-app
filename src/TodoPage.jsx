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
      <h1 className="todo-title">Todo</h1>
      <form className="todo-form" onSubmit={addItem}>
        <input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일 추가…"
        />
        <button className="todo-add" type="submit">추가</button>
      </form>

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
                <button className="btn save" onClick={() => saveEdit(it.id)}>저장</button>
                <button className="btn cancel" onClick={cancelEdit}>취소</button>
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
                  <button className="btn edit" onClick={() => startEdit(it.id, it.text)}>수정</button>
                  <button className="btn delete" onClick={() => deleteItem(it.id)}>삭제</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
