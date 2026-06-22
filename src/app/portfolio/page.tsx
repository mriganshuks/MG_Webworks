import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | MG Webworks",
};

const projects = [
  { id: "01", title: "E-Commerce Platform", desc: "High-conversion storefront.", link: "#" },
  { id: "02", title: "SaaS Dashboard", desc: "Complex data visualization.", link: "#" },
  { id: "03", title: "3D Product Viewer", desc: "Interactive WebGL showcase.", link: "#" },
];

export default function PortfolioPage() {
  return (
    <div className="w-[min(1180px,calc(100%-32px))] mx-auto py-20 min-h-[80vh]">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Featured Work</h1>
        <p className="text-[var(--muted-custom)] text-lg max-w-2xl mx-auto">
          A selection of our best digital products, crafted with precision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="flex flex-col justify-between min-h-[260px] p-6 rounded-xl border border-[var(--line)] bg-[var(--panel)] shadow-[var(--shadow)] hover:-translate-y-2 hover:border-[var(--cyan)] transition-all duration-300">
            <div>
              <span className="text-[var(--cyan)] text-sm font-black">{p.id}</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">{p.title}</h3>
              <p className="text-[var(--muted-custom)] leading-relaxed">{p.desc}</p>
            </div>
            <Link href={p.link} className="mt-6 font-bold text-[var(--lime)] hover:underline">
              View Project &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
