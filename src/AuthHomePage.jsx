export default function AuthHomePage() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "3rem 1rem", textAlign: "center" }}>
      <p style={{ fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Welcome back
      </p>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#111", marginBottom: "1rem" }}>
        HARU
      </h2>
      <p style={{ fontSize: "1rem", color: "#888", lineHeight: "1.8", marginBottom: "2.5rem" }}>
        Another day, another chance to get things done. What&apos;s on your list today?
      </p>
      <a href="/todo" style={{
        padding: "0.75rem 2rem",
        backgroundColor: "#111",
        color: "#fff",
        borderRadius: "9999px",
        fontSize: "0.9rem",
        fontWeight: "600",
        textDecoration: "none"
      }}>
        Go to My Haru
      </a>
    </div>
  );
}