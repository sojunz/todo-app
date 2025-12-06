import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact</h2>

      <p className="contact-intro">
        Have a question, idea, or collaboration in mind?
        I’d love to hear from you.
      </p>

      <div className="contact-grid">
        {/* Direct links */}
        <div className="contact-card">
          <h3>Reach me directly</h3>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@haru.example">sinchonblues@gmail.com</a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/sojunz" target="_blank" rel="noreferrer">
                github.com/sojunz
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a href="https://www.instagram.com/joshua.charlotte/" target="_blank" rel="noreferrer">
                @joshua.charlotte
              </a>
            </li>
          </ul>
          <p className="contact-note">
            Prefer a quick note? Use the form—I’ll reply soon.
          </p>
        </div>

        {/* Contact form */}
        <form
          className="contact-card contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = {
              name: form.name.value.trim(),
              email: form.email.value.trim(),
              message: form.message.value.trim(),
            };
            if (!data.name || !data.email || !data.message) {
              alert("Please fill in all fields.");
              return;
            }
            // For now, just open the user's mail client with a prefilled message.
            const subject = encodeURIComponent("HARU Contact");
            const body = encodeURIComponent(
              `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
            );
            window.location.href = `mailto:hello@haru.example?subject=${subject}&body=${body}`;
          }}
        >
          <h3>Send a message</h3>

          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me a little about your idea…" />

          <button type="submit">Send</button>
          <p className="privacy-hint">
            This form opens your email app—no data is stored on this site.
          </p>
        </form>
      </div>
    </section>
  );
}
