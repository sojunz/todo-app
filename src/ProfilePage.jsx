export default function ProfilePage() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "3rem 1rem" }}>
      <p style={{ fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Profile</p>
      <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#111", marginBottom: "2rem" }}>Your Profile</h2>

      <div style={{
        background: "#f9f9f9",
        borderRadius: "16px",
        padding: "1.5rem",
        marginBottom: "1.5rem"
      }}>
        <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: "1.8" }}>
          🚧 This app was built as a learning project while studying full-stack development.
          Authentication and user profiles are currently using placeholder data.
          A proper JWT-based auth system is planned for a future update!
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Name</label>
          <input type="text" placeholder="Your name" style={{ borderRadius: "8px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Email</label>
          <input type="email" placeholder="example@email.com" style={{ borderRadius: "8px" }} />
        </div>
        <button className="add-btn">Save</button>
      </div>
    </div>
  );
}