import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // 추가
  const addItem = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text: value, done: false }]);
    setText("");
  };

  // 체크 토글
  const toggleItem = (id) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));

  // 삭제
  const deleteItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  // 수정 시작
  const startEdit = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  // 수정 저장
  const saveEdit = (id) => {
    const value = editingText.trim();
    if (!value) return;
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, text: value } : it))
    );
    setEditingId(null);
    setEditingText("");
  };

  // 수정 취소
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <main className="todo-container">
      <h1>Todo</h1>
      <form onSubmit={addItem}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일 추가…"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            {editingId === it.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => saveEdit(it.id)}>저장</button>
                <button onClick={cancelEdit}>취소</button>
              </>
            ) : (
              <>
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
                <button onClick={() => startEdit(it.id, it.text)}>수정</button>
                <button onClick={() => deleteItem(it.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;

