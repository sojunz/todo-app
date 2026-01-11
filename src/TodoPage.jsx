import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./Todo.css";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // ⭐ 로딩 상태 추가
  const navigate = useNavigate();

  // 서버에서 Todo 불러오기
  useEffect(() => {
    fetch("http://localhost:4000/api/todos")
      .then(res => res.json())
      .then(data => {
        console.log("서버에서 받은 data:", data);
        setTodos(data);
        setLoading(false); // ⭐ 이 줄이 반드시 있어야 함
      });
  }, []);
  
  

  // 새 Todo 추가
  const addTodo = async (text) => {
    const res = await fetch("http://localhost:4000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  // Todo 완료 상태 업데이트
  const toggleTodo = async (id, done) => {
    const res = await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done })
    });
    const updated = await res.json();
    setTodos(todos.map(todo => todo._id === id ? updated : todo));
  };

  // Todo 삭제
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:4000/api/todos/${id}`, { method: "DELETE" });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  // 전체 삭제
  const clearAll = async () => {
    try {
      await fetch("http://localhost:4000/api/todos", {
        method: "DELETE",
      });
  
      setTodos([]); // 화면에서도 즉시 비우기
    } catch (error) {
      console.error("전체 삭제 실패:", error);
    }
  };
  

  // ⭐ 저장 (빈 배열 저장 방지)
  const saveTodos = () => {
    console.log("저장 직전 todos:", todos);

    const saved = JSON.parse(localStorage.getItem("savedTodos")) || [];

    const newList = todos.map(todo => ({
      text: todo.text,
      savedAt: new Date().toISOString()
    }));

    saved.push(newList);
    localStorage.setItem("savedTodos", JSON.stringify(saved));

    navigate("/save");
  };

  return (
    <div>
      <img src="/Home.jpg" alt="todo" className="centered-image" />
      <h1>My Haru</h1>

      {/* ⭐ 로딩 중일 때 */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading your todos...</p>
      ) : (
        <>
          <TodoForm onAdd={addTodo} />

          <ul>
            {todos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>

          <div className="todo-actions">
            {/* ⭐ todos가 비어 있으면 Save 비활성화 */}
            <button onClick={saveTodos} disabled={todos.length === 0}>
              Save
            </button>
            <button onClick={clearAll}>Clear All</button>
          </div>
        </>
      )}
    </div>
  );
}
