import Image from "next/image";
import Link from "next/link";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/mriganshu-kumar-singh-578478379?utm_source=share_via&utm_content=profile&utm_medium=member_android";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative z-10 bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
          <Image
            src="/mg-webworks-logo.png"
            alt="MG Webworks"
            width={120}
            height={66}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <div className="text-white/40 text-sm text-center">
          &copy; {new Date().getFullYear()} MG Webworks. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a
            href="https://wa.me/918427144836"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:hello@mgwebworks.com" className="hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
