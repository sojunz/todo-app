import "./Contact.css";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h2>Contact</h2>
      <p className="contact-intro">
        Have a question, idea, or collaboration in mind? I’d love to hear from you.
      </p>

      <div className="contact-grid-3">
        {/* 1) 왼쪽 카드 */}
        <div className="contact-card">
          <h3>Reach me directly</h3>
          <ul className="contact-list">
            <li><strong>Email:</strong> <a href="mailto:sinchonblues@gmail.com">sinchonblues@gmail.com</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/sojunz">github.com/sojunz</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/joshua.charlotte">@joshua.charlotte</a></li>
          </ul>
        </div>

        {/* 2) 가운데 폼 */}
        <form className="contact-card contact-form" onSubmit={handleSubmit}>
          <h3>Send a message</h3>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me a little about your idea…" />
          <button type="submit">Send</button>
          <p className="privacy-hint">This form opens your email app—no data is stored on this site.</p>
        </form>

        {/* 3) 오른쪽 이미지 카드 */}
        <div className="contact-card image-card">
          <img src="/Contact.jpg" alt="illustration" className="contact-image" />
          <p className="image-caption">Made with warmth</p>
        </div>
      </div>
    </section>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const subject = encodeURIComponent("HARU Contact");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  window.location.href = `mailto:hello@haru.example?subject=${subject}&body=${body}`;

  setTimeout(() => {
    window.location.href = "/contact/sent";
  }, 500);
}
