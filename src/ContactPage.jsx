function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const message = form.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const subject = encodeURIComponent("HARU Contact");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:sinchonblues@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    window.location.href = "/contact/sent";
  }, 500);
}

export default function ContactPage() {
  return (
    <section style={{ maxWidth: "600px", margin: "0 auto", padding: "3rem 1rem" }}>
      <p style={{ fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Get in touch
      </p>
      <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#111", marginBottom: "0.5rem" }}>Contact</h2>
      <p style={{ fontSize: "1rem", color: "#888", marginBottom: "2.5rem" }}>
        Have a question or idea? I&apos;d love to hear from you.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2.5rem" }}>
        <a href="mailto:sinchonblues@gmail.com" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.2rem", background: "#f9f9f9", borderRadius: "12px", textDecoration: "none", color: "#111" }}>
          <span>✉️</span>
          <div>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#aaa" }}>Email</p>
            <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: "500" }}>sinchonblues@gmail.com</p>
          </div>
        </a>
        <a href="https://github.com/sojunz" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.2rem", background: "#f9f9f9", borderRadius: "12px", textDecoration: "none", color: "#111" }}>
          <span>🐙</span>
          <div>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#aaa" }}>GitHub</p>
            <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: "500" }}>github.com/sojunz</p>
          </div>
        </a>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Name</label>
          <input id="name" type="text" placeholder="Your name" style={{ borderRadius: "8px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Email</label>
          <input id="email" type="email" placeholder="you@example.com" style={{ borderRadius: "8px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Message</label>
          <textarea id="message" rows="5" placeholder="Tell me about your idea..." style={{ borderRadius: "8px", padding: "0.75rem 1rem", border: "1px solid #e5e5e5", fontFamily: "Inter, sans-serif", fontSize: "1rem", outline: "none", resize: "vertical" }} />
        </div>
        <button type="submit" className="add-btn">Send Message</button>
        <p style={{ fontSize: "0.75rem", color: "#bbb", textAlign: "center" }}>
          This form opens your email app — no data is stored.
        </p>
      </form>
    </section>
  );
}