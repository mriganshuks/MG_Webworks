import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-[min(1180px,calc(100%-32px))] mx-auto py-[22px] pb-[34px] text-[var(--muted-custom)] text-[0.9rem] border-t border-[rgba(255,255,255,0.08)] mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} MG Webworks. All rights reserved.</p>
        <div className="flex gap-4 font-semibold">
          <Link href="/privacy" className="hover:text-[var(--cyan)] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[var(--cyan)] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
