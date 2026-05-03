import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "./TodoForm.jsx";
import TodoItem from "./TodoItem";
import "./Todo.css";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://todo-app-1-6ri0.onrender.com/api/todos")
      .then(res => res.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  const addTodo = async (text) => {
    const res = await fetch("https://todo-app-1-6ri0.onrender.com/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id, done) => {
    const res = await fetch(`https://todo-app-1-6ri0.onrender.com/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done })
    });
    const updated = await res.json();
    setTodos(todos.map(todo => todo._id === id ? updated : todo));
  };

  const deleteTodo = async (id) => {
    await fetch(`https://todo-app-1-6ri0.onrender.com/api/todos/${id}`, { method: "DELETE" });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const clearAll = async () => {
    await fetch("https://todo-app-1-6ri0.onrender.com/api/todos", { method: "DELETE" });
    setTodos([]);
  };

  const saveTodos = () => {
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
    <main className="todo-layout">
      <h1>My Haru</h1>
      <p className="todo-subtitle">What do you want to get done today?</p>
      {loading ? (
        <p style={{ color: "#aaa" }}>Loading your todos...</p>
      ) : (
        <>
          <TodoForm onAdd={addTodo} />
          <ul className="todo-list">
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
            <button onClick={saveTodos} disabled={todos.length === 0}>Save</button>
            <button onClick={clearAll}>Clear All</button>
          </div>
        </>
      )}
    </main>
  );
}