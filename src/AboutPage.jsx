export default function AboutPage() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "3rem 1rem" }}>
      <p style={{ fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        About
      </p>
      <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#111", marginBottom: "2rem" }}>
        What is HARU?
      </h2>
      <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.9", marginBottom: "1.2rem" }}>
        HARU is a simple todo app built to help you stay focused and organized — one task at a time.
      </p>
      <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.9", marginBottom: "1.2rem" }}>
        It was built as a learning project while studying full-stack development with React, Node.js, and MongoDB.
      </p>
      <div style={{
        background: "#f9f9f9",
        borderRadius: "16px",
        padding: "1.2rem 1.5rem",
        marginTop: "2rem"
      }}>
        <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.8", margin: 0 }}>
          🛠 Built with React, Node.js, Express, MongoDB
        </p>
      </div>
    </div>
  );
}