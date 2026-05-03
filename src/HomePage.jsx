export default function HomePage() {
  return (
    <section className="home-wrap">
      <p style={{ fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Task Manager
      </p>
      <h1 style={{ fontSize: "3.5rem", fontWeight: "700", color: "#111", fontFamily: "Inter, sans-serif" }}>
        HARU
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#888", maxWidth: "480px", lineHeight: "1.8" }}>
        A simple, clean todo app to help you stay focused and get things done — one task at a time.
      </p>
      <a href="/todo" style={{
        padding: "0.75rem 2rem",
        backgroundColor: "#111",
        color: "#fff",
        borderRadius: "9999px",
        fontSize: "0.9rem",
        fontWeight: "500",
        textDecoration: "none"
      }}>
        Get Started
      </a>
    </section>
  );
}