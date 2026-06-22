export const metadata = {
  title: "Testimonials | MG Webworks",
};

export default function TestimonialsPage() {
  return (
    <section id="testimonials">
      <div className="section-head">
        <h2>Client Success</h2>
        <p className="section-kicker">
          Don't just take our word for it. Here's what our partners have to say.
        </p>
      </div>
      <div className="projects-grid">
        <article className="about-panel">
          <p className="lead mb-4">"MG Webworks transformed our digital presence. Their attention to detail and 3D web expertise set us apart from competitors."</p>
          <h3 className="project-number">Sarah Jenkins</h3>
          <p>CEO, TechStart</p>
        </article>
        <article className="about-panel">
          <p className="lead mb-4">"Incredible design and flawless execution. The new platform increased our conversion rate by 40% in just two months."</p>
          <h3 className="project-number">David Chen</h3>
          <p>Marketing Director, Bloom</p>
        </article>
        <article className="about-panel">
          <p className="lead mb-4">"A true partner in development. They took our vision and elevated it to a level we didn't know was possible."</p>
          <h3 className="project-number">Emily Rodriguez</h3>
          <p>Founder, Studio X</p>
        </article>
      </div>
    </section>
  );
}
