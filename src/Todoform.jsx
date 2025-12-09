// TodoForm.jsx
export default function TodoForm({ text, setText, onAdd }) {
    return (
      <form onSubmit={onAdd}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Go</button>
      </form>
    );
  }
  