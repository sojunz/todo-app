import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SavePage.css";

export default function SavePage() {
  const [savedLists, setSavedLists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedTodos")) || [];
    setSavedLists(saved);
  }, []);

  const handleDelete = (index) => {
    const updated = savedLists.filter((_, i) => i !== index);
    setSavedLists(updated);
    localStorage.setItem("savedTodos", JSON.stringify(updated));
  };

  return (
    <div className="save-wrapper">
      <h1 className="save-title">Saved Lists</h1>

      <div className="save-grid">
        {savedLists.map((list, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <span className="card-number">Saved #{index + 1}</span>
              <span className="card-date">
                {new Date(list[0].savedAt).toLocaleDateString()}
              </span>
            </div>

            <ul className="card-items">
              {list.map((item, i) => (
                <li key={i}>{item.text}</li>
              ))}
            </ul>

            <button className="card-delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <button className="save-back" onClick={() => navigate("/todo")}>
        Back to My Haru
      </button>
    </div>
  );
}
