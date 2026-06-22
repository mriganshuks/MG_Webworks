export const metadata = {
  title: "Process | MG Webworks",
};

export default function ProcessPage() {
  return (
    <section id="process">
      <div className="section-head">
        <h2>Our Process</h2>
        <p className="section-kicker">
          A proven, transparent workflow designed to deliver exceptional results on time and within budget.
        </p>
      </div>
      <div className="projects-grid">
        <article className="about-panel">
          <h3 className="project-number">01</h3>
          <h3>Discovery</h3>
          <p>We learn about your business goals, target audience, and project requirements.</p>
        </article>
        <article className="about-panel">
          <h3 className="project-number">02</h3>
          <h3>Strategy & Design</h3>
          <p>Crafting wireframes, UI/UX designs, and a robust technical architecture.</p>
        </article>
        <article className="about-panel">
          <h3 className="project-number">03</h3>
          <h3>Development</h3>
          <p>Building the platform using cutting-edge technologies with clean, scalable code.</p>
        </article>
        <article className="about-panel">
          <h3 className="project-number">04</h3>
          <h3>Testing & Launch</h3>
          <p>Rigorous QA testing followed by a seamless deployment to production.</p>
        </article>
      </div>
    </section>
  );
}
