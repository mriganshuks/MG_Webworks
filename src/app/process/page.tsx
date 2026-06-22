import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Process | MG Webworks",
};

const steps = [
  { step: "01", title: "Discovery", desc: "We learn about your business goals, target audience, and project requirements." },
  { step: "02", title: "Strategy & Design", desc: "Crafting wireframes, UI/UX designs, and a robust technical architecture." },
  { step: "03", title: "Development", desc: "Building the platform using cutting-edge technologies with clean, scalable code." },
  { step: "04", title: "Testing & Launch", desc: "Rigorous QA testing followed by a seamless deployment to production." },
];

export default function ProcessPage() {
  return (
    <div className="w-[min(1180px,calc(100%-32px))] mx-auto py-20 min-h-[80vh]">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Process</h1>
        <p className="text-[var(--muted-custom)] text-lg max-w-2xl mx-auto">
          A proven, transparent workflow designed to deliver exceptional results on time and within budget.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="relative p-6 rounded-xl bg-[var(--panel)] border border-[var(--line)] shadow-[var(--shadow)] backdrop-blur-sm">
            <span className="absolute -top-6 -left-2 text-6xl font-black text-white/5">{s.step}</span>
            <h3 className="text-2xl font-bold mt-4 mb-2 text-[var(--cyan)]">{s.title}</h3>
            <p className="text-[var(--muted-custom)]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
