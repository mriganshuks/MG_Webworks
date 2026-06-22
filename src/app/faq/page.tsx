export const metadata = {
  title: "FAQ | MG Webworks",
};

export default function FAQPage() {
  return (
    <section id="faq">
      <div className="section-head">
        <h2>Frequently Asked Questions</h2>
        <p className="section-kicker">
          Everything you need to know about working with MG Webworks.
        </p>
      </div>
      <div className="about-grid" style={{ gridTemplateColumns: "1fr" }}>
        <article className="about-panel">
          <h3 className="project-number">What is your typical project timeline?</h3>
          <p>Most full-stack web platforms take between 4 to 8 weeks depending on complexity and features.</p>
        </article>
        <article className="about-panel">
          <h3 className="project-number">Do you offer ongoing support and maintenance?</h3>
          <p>Yes! We offer customized retainer packages to keep your platform secure, fast, and up-to-date.</p>
        </article>
        <article className="about-panel">
          <h3 className="project-number">What technologies do you use?</h3>
          <p>We specialize in modern stacks like Next.js, React, Node.js, Tailwind CSS, and Three.js for 3D web experiences.</p>
        </article>
        <article className="about-panel">
          <h3 className="project-number">How does the consultation booking work?</h3>
          <p>You can reach out via our contact form or WhatsApp. We'll schedule a 30-minute discovery call to discuss your goals.</p>
        </article>
      </div>
    </section>
  );
}
