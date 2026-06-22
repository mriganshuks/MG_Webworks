import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ | MG Webworks",
};

const faqs = [
  { q: "What is your typical project timeline?", a: "Most full-stack web platforms take between 4 to 8 weeks depending on complexity and features." },
  { q: "Do you offer ongoing support and maintenance?", a: "Yes! We offer customized retainer packages to keep your platform secure, fast, and up-to-date." },
  { q: "What technologies do you use?", a: "We specialize in modern stacks like Next.js, React, Node.js, Tailwind CSS, and Three.js for 3D web experiences." },
  { q: "How does the consultation booking work?", a: "You can reach out via our contact form or WhatsApp. We'll schedule a 30-minute discovery call to discuss your goals." },
];

export default function FAQPage() {
  return (
    <div className="w-[min(800px,calc(100%-32px))] mx-auto py-20 min-h-[80vh]">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="text-[var(--muted-custom)] text-lg">
          Everything you need to know about working with MG Webworks.
        </p>
      </div>

      <div className="bg-[var(--panel)] border border-[var(--line)] rounded-xl p-6 shadow-[var(--shadow)] backdrop-blur-sm">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem value={`item-${i}`} key={i} className="border-b-[var(--line)]">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[var(--cyan)]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--muted-custom)] text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
