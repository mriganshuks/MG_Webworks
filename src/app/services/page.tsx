export const metadata = {
  title: "Services | MG Webworks",
};

export default function ServicesPage() {
  return (
    <section id="services">
      <div className="section-head">
        <h2>Our Services</h2>
        <p className="section-kicker">
          Comprehensive digital solutions to help your business scale and succeed in the modern web era.
        </p>
      </div>
      <div className="projects-grid">
        <article className="project-card">
          <div>
            <span className="project-number">01</span>
            <h3>Full-Stack Development</h3>
            <p>End-to-end web applications built with Next.js, React, and Node.js.</p>
          </div>
        </article>
        <article className="project-card">
          <div>
            <span className="project-number">02</span>
            <h3>Premium UI/UX Design</h3>
            <p>Stunning, conversion-optimized interfaces tailored to your brand.</p>
          </div>
        </article>
        <article className="project-card">
          <div>
            <span className="project-number">03</span>
            <h3>3D Web Experiences</h3>
            <p>Immersive WebGL and Three.js integrations that wow your audience.</p>
          </div>
        </article>
        <article className="project-card">
          <div>
            <span className="project-number">04</span>
            <h3>API Development</h3>
            <p>Robust and scalable backend architectures and REST/GraphQL APIs.</p>
          </div>
        </article>
        <article className="project-card">
          <div>
            <span className="project-number">05</span>
            <h3>Performance Optimization</h3>
            <p>Lightning-fast load times and Lighthouse score improvements.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
