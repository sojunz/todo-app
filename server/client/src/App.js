import { useEffect, useState } from "react";
import "./Todo.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // ✅ 서버에서 Todo 불러오기
  useEffect(() => {
    fetch("http://localhost:4000/api/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // ✅ 새 Todo 추가
  const addTodo = async () => {
    const res = await fetch("http://localhost:4000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div>
      <h1>My Haru</h1>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={addTodo}>Go</button>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text} {todo.done ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
