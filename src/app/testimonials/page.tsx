export const metadata = {
  title: "Testimonials | MG Webworks",
};

const testimonials = [
  { name: "Sarah Jenkins", role: "CEO, TechStart", text: "MG Webworks transformed our digital presence. Their attention to detail and 3D web expertise set us apart from competitors." },
  { name: "David Chen", role: "Marketing Director, Bloom", text: "Incredible design and flawless execution. The new platform increased our conversion rate by 40% in just two months." },
  { name: "Emily Rodriguez", role: "Founder, Studio X", text: "A true partner in development. They took our vision and elevated it to a level we didn't know was possible." },
];

export default function TestimonialsPage() {
  return (
    <div className="w-[min(1180px,calc(100%-32px))] mx-auto py-20 min-h-[80vh]">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Client Success</h1>
        <p className="text-[var(--muted-custom)] text-lg max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our partners have to say.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 rounded-xl bg-[var(--panel)] border border-[var(--line)] shadow-[var(--shadow)] backdrop-blur-sm">
            <div className="flex text-[var(--lime)] mb-6 text-2xl">
              &quot;&quot;
            </div>
            <p className="text-lg leading-relaxed text-[var(--text-custom)] mb-8">&quot;{t.text}&quot;</p>
            <div>
              <h4 className="font-bold text-[var(--cyan)]">{t.name}</h4>
              <p className="text-sm text-[var(--muted-custom)]">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
