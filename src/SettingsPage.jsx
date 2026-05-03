export default function SettingsPage() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "3rem 1rem" }}>
      <p style={{ fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Settings
      </p>
      <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#111", marginBottom: "2rem" }}>
        Your Settings
      </h2>

      <div style={{
        background: "#f9f9f9",
        borderRadius: "16px",
        padding: "1.2rem 1.5rem",
        marginBottom: "1.5rem"
      }}>
        <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.8", margin: 0 }}>
          🚧 Settings are coming soon! Features like dark mode and notifications will be available in a future update.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Theme</label>
          <input type="text" placeholder="Light / Dark" style={{ borderRadius: "8px" }} disabled />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Notifications</label>
          <input type="text" placeholder="On / Off" style={{ borderRadius: "8px" }} disabled />
        </div>
        <button className="add-btn" disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
          Save
        </button>
      </div>
    </div>
  );
}