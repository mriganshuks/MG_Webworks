"use client";

export default function ContactPage() {
  return (
    <section id="contact" className="contact">
      <div className="contact-panel">
        <div>
          <h2>Contact</h2>
          <p>
            Ready to elevate your digital presence? Fill out the form below or contact us directly.
          </p>
          <div className="contact-actions">
            <a className="btn primary" href="https://wa.me/918427144836" target="_blank" rel="noopener">WhatsApp Me</a>
            <a className="btn" href="https://www.linkedin.com/in/mriganshu-kumar-singh-578478379/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <div className="contact-list">
          <span>Email: <a href="mailto:hello@mgwebworks.com">hello@mgwebworks.com</a></span>
          <span>Phone / WhatsApp: <a href="tel:+918427144836">+91 8427144836</a></span>
          <span>LinkedIn: <a href="https://www.linkedin.com/in/mriganshu-kumar-singh-578478379/" target="_blank" rel="noopener">Mriganshu Kumar Singh</a></span>
          <span>Location: Remote Worldwide</span>
        </div>
      </div>
    </section>
  );
}
