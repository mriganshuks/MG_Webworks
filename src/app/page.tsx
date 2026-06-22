import { Hero } from "@/components/sections/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about">
        <div className="section-head">
          <h2>About Us</h2>
          <p className="section-kicker">
            A focused blend of design taste, front-end precision, and 3D experimentation.
          </p>
        </div>
        <div className="about-grid">
          <article className="about-panel">
            <p>
              We are a premium digital agency specializing in modern, responsive web platforms.
              Our approach pairs polished UI systems with motion, depth, and practical code that is easy to maintain.
            </p>
          </article>
          <aside className="about-panel">
            <div className="skills" aria-label="Skills">
              <span className="skill">Next.js 14</span>
              <span className="skill">Tailwind CSS</span>
              <span className="skill">TypeScript</span>
              <span className="skill">Three.js</span>
              <span className="skill">Framer Motion</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
