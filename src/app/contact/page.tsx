import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | MG Webworks",
};

export default function ContactPage() {
  return (
    <div className="w-[min(1180px,calc(100%-32px))] mx-auto py-20 min-h-[80vh]">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-[var(--muted-custom)] text-lg max-w-2xl mx-auto">
            Ready to elevate your digital presence? Fill out the form below or contact us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="p-8 rounded-xl bg-[var(--panel)] border border-[var(--line)] shadow-[var(--shadow)] backdrop-blur-md">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" className="bg-transparent border-[var(--line)] text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-transparent border-[var(--line)] text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  className="w-full min-h-[120px] rounded-md border border-[var(--line)] bg-transparent px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                  placeholder="Tell us about your project..." 
                />
              </div>
              <Button type="submit" className="w-full bg-[var(--cyan)] hover:bg-[var(--cyan)]/80 text-black font-bold">
                Send Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--panel)] border border-[var(--line)] flex items-center justify-center text-[var(--cyan)]">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-[var(--muted-custom)]">hello@mgwebworks.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--panel)] border border-[var(--line)] flex items-center justify-center text-[var(--violet)]">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-[var(--muted-custom)]">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--panel)] border border-[var(--line)] flex items-center justify-center text-[var(--lime)]">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-[var(--muted-custom)]">San Francisco, CA (Remote Worldwide)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
