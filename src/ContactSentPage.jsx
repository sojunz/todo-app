export default function ContactSentPage() {
  return (
    <div className="page-container">
      <h2>Message Sent</h2>

      <img src="/Sent.jpg" alt="Message Sent" className="sent-image" />

      <div className="section-box">
        <p style={{ color: "#4b2e2e", fontSize: "1.1rem", lineHeight: "1.6" }}>
          Thank you for reaching out.  
          Your message has been sent successfully, and I’ll get back to you soon.
        </p>
      </div>

      {/* ⭐ 홈으로 버튼 */}
      <a href="/" className="sent-home-btn">Go Home</a>
    </div>
  );
}
