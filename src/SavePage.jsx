import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SavePage.css";

export default function SavePage() {
  const navigate = useNavigate();

  const [savedLists, setSavedLists] = useState(
    JSON.parse(localStorage.getItem("savedTodos")) || []
  );

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-NZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const deleteSaved = (index) => {
    const updated = [...savedLists];
    updated.splice(index, 1);
    localStorage.setItem("savedTodos", JSON.stringify(updated));
    setSavedLists(updated);
  };

  return (
    <div className="save-container">
      <h1 className="save-title">Saved Lists</h1>

      {savedLists.length === 0 ? (
        <p className="save-empty">No saved lists yet.</p>
      ) : (
        savedLists.map((list, index) => (
          <div key={index} className="save-card">
            <h3 className="save-card-title">Saved #{index + 1}</h3>

            {list.map((todo, i) => (
              <div key={i} className="save-todo-item">
                <p className="save-text">• {todo.text}</p>
                <p className="save-date">Saved at: {formatDate(todo.savedAt)}</p>
              </div>
            ))}

            <button
              className="save-delete-button"
              onClick={() => deleteSaved(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}

      <button className="save-back-button" onClick={() => navigate("/todo")}>
        Back to My Haru
      </button>
    </div>
  );
}

