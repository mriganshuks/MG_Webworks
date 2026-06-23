export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 py-12 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-primary font-bold text-xl tracking-tighter">MG</span>
          <span className="font-bold text-lg tracking-wide">
            WEBWORKS
          </span>
        </div>
        <div className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} MG Webworks. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
