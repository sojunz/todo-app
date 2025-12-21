import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./Todo.css";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);

  // 서버에서 Todo 불러오기
  useEffect(() => {
    fetch("http://localhost:4000/api/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
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

  // ✅ 전체 삭제
  const clearAll = async () => {
    // 서버에 전체 삭제 API가 없다면 클라이언트에서만 초기화
    setTodos([]);
  };

  // ✅ 저장 (localStorage 예시)
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    alert("Todos saved!");
  };

  return (
    <div>
      <img src="/Home.jpg" alt="todo" className="centered-image" />
      <h1>My Haru</h1>
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

      {/* ✅ 추가 버튼들 */}
      <div className="todo-actions">
        <button onClick={saveTodos}>Save</button>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}
