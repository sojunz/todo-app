import { useState, useEffect } from "react";
import "./Todo.css";

export default function TodoPage() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  // ✅ LocalStorage에서 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // ✅ items가 바뀔 때마다 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  // 새 할 일 추가
  const addItem = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: value, done: false, date: "today" },
    ]);
    setText("");
  };

  // 완료 여부 토글
  const toggleItem = (id) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );

  // 삭제
  const deleteItem = (id) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

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

  // 전체 초기화
  const clearAll = () => {
    setItems([]);
    localStorage.removeItem("todos");
  };

  // 필터링
  const filteredItems = items.filter((it) => {
    if (filter === "today") return it.date === "today";
    if (filter === "upcoming") return it.date === "upcoming";
    return true;
  });

  // 검색
  const searchedItems = filteredItems.filter((it) =>
    it.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="todo-wrap">
      <h1 className="todo-title">My Day</h1>

      {/* 입력 폼 */}
      <form className="todo-form" onSubmit={addItem}>
        <input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button className="todo-add" type="submit">Go</button>
      </form>

      {/* 검색 */}
      <input
        className="todo-search"
        type="text"
        placeholder="Search tasks"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* 필터 버튼 */}
      <div className="todo-filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("today")}>Today</button>
        <button onClick={() => setFilter("upcoming")}>Upcoming</button>
      </div>

      {/* Clear All */}
      <button className="todo-clear" onClick={clearAll}>Clear All</button>

      {/* 할 일 목록 */}
      <ul className="todo-list">
        {searchedItems.map((it) => (
          <li key={it.id} className="todo-item">
            {editingId === it.id ? (
              <div className="todo-edit-row">
                <input
                  className="todo-edit-input"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button className="btn save" onClick={() => saveEdit(it.id)}>Save</button>
                <button className="btn cancel" onClick={cancelEdit}>Cancel</button>
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
      <img src="/Home.JPG" alt="Door Image" width="400" />
    </section>
  );
}
