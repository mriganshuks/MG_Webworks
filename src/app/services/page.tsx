import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Monitor, Cpu, Code, Palette, Smartphone, Globe } from "lucide-react";

export const metadata = {
  title: "Services | MG Webworks",
};

const services = [
  { icon: <Monitor className="w-10 h-10 text-[var(--cyan)]" />, title: "Full-Stack Development", desc: "End-to-end web applications built with Next.js, React, and Node.js." },
  { icon: <Palette className="w-10 h-10 text-[var(--violet)]" />, title: "Premium UI/UX Design", desc: "Stunning, conversion-optimized interfaces tailored to your brand." },
  { icon: <Globe className="w-10 h-10 text-[var(--lime)]" />, title: "3D Web Experiences", desc: "Immersive WebGL and Three.js integrations that wow your audience." },
  { icon: <Smartphone className="w-10 h-10 text-[var(--cyan)]" />, title: "Responsive Mobile Apps", desc: "Cross-platform mobile applications using React Native." },
  { icon: <Code className="w-10 h-10 text-[var(--violet)]" />, title: "API Development", desc: "Robust and scalable backend architectures and REST/GraphQL APIs." },
  { icon: <Cpu className="w-10 h-10 text-[var(--lime)]" />, title: "Performance Optimization", desc: "Lightning-fast load times and Lighthouse score improvements." },
];

export default function ServicesPage() {
  return (
    <div className="w-[min(1180px,calc(100%-32px))] mx-auto py-20 min-h-[80vh]">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="text-[var(--muted-custom)] text-lg max-w-2xl mx-auto">
          Comprehensive digital solutions to help your business scale and succeed in the modern web era.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Card key={i} className="bg-[var(--panel)] border-[var(--line)] shadow-[var(--shadow)] backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
            <CardHeader>
              <div className="mb-4 bg-white/5 w-16 h-16 flex items-center justify-center rounded-xl">
                {s.icon}
              </div>
              <CardTitle className="text-xl font-bold">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--muted-custom)]">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
