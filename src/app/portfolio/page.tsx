export const metadata = {
  title: "Portfolio | MG Webworks",
};

export default function PortfolioPage() {
  return (
    <section id="projects">
      <div className="section-head">
        <h2>Portfolio</h2>
        <p className="section-kicker">
          Selected concepts that show the kind of polished, conversion-ready digital work MG Webworks delivers.
        </p>
      </div>
      <div className="projects-grid">
        <article className="project-card">
          <div>
            <span className="project-number">01</span>
            <h3>E-Commerce Platform</h3>
            <p>A high-conversion storefront built with modern frameworks.</p>
          </div>
          <a className="project-link" href="#">View project</a>
        </article>
        <article className="project-card">
          <div>
            <span className="project-number">02</span>
            <h3>SaaS Dashboard</h3>
            <p>Complex data visualization with real-time updates and responsive UI.</p>
          </div>
          <a className="project-link" href="#">View project</a>
        </article>
        <article className="project-card">
          <div>
            <span className="project-number">03</span>
            <h3>3D Product Viewer</h3>
            <p>Interactive WebGL showcase using Three.js and React Three Fiber.</p>
          </div>
          <a className="project-link" href="#">View project</a>
        </article>
      </div>
    </section>
  );
}
