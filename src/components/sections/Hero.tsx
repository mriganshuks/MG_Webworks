import Link from "next/link";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Creative Web Developer &amp; 3D Web Specialist</p>
        <h1>Immersive websites for ambitious brands.</h1>
        <span className="name">Mriganshu Kumar Singh - Founder, MG Webworks</span>
        <p className="lead">
          I build responsive, high-performance web experiences that combine clean front-end
          engineering with cinematic Three.js visuals, memorable interaction, and sharp brand presence.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" href="/portfolio">View Projects</Link>
          <Link className="btn" href="/contact">Let's Chat</Link>
        </div>
        <div className="hero-stats" aria-label="Portfolio highlights">
          <div className="stat">
            <strong>3D</strong>
            <span>Interactive landing experiences</span>
          </div>
          <div className="stat">
            <strong>5+</strong>
            <span>Core modern web skills</span>
          </div>
          <div className="stat">
            <strong>1:1</strong>
            <span>Brand-focused development</span>
          </div>
        </div>
      </div>
    </header>
  );
}
