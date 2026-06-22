import Link from "next/link";
import { GlowHorizon } from "@/components/ui/glow-horizon";

export function Hero() {
  return (
    <section className="relative w-[min(1180px,calc(100%-32px))] mx-auto pt-[clamp(54px,7vw,92px)] pb-[clamp(54px,7vw,92px)] border-b border-[rgba(255,255,255,0.08)]">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
         <GlowHorizon className="opacity-50 pointer-events-none" />
      </div>

      <div className="hero-copy grid grid-cols-1 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] items-end gap-[clamp(26px,5vw,72px)] mb-8">
        <div className="col-span-1 lg:col-span-2 flex items-center gap-[10px] mb-[20px] text-[var(--cyan)] text-[0.82rem] font-[700] uppercase before:content-[''] before:w-[38px] before:h-[1px] before:bg-gradient-to-r before:from-[var(--cyan)] before:to-transparent">
          Mriganshu Kumar Singh
        </div>
        
        <h1 className="col-span-1 lg:col-span-2 max-w-[1120px] m-0 text-[clamp(3.8rem,8.8vw,7.3rem)] leading-[0.93] tracking-normal text-balance font-bold">
          Creative Web Developer &<br/>3D Web Specialist
        </h1>
        
        <span className="col-start-1 mt-[16px] text-[var(--muted-custom)] text-[clamp(1.02rem,2vw,1.28rem)] font-[700] leading-[1.4]">
          MG Webworks
        </span>
        
        <p className="lg:col-start-2 lg:row-start-3 lg:row-span-2 max-w-[680px] m-0 text-[var(--muted-custom)] text-[clamp(1rem,1.5vw,1.17rem)] leading-[1.75]">
          Crafting immersive digital experiences through advanced 3D web technologies, high-performance development, and premium modern aesthetics. We build platforms that convert and scale.
        </p>
        
        <div className="col-start-1 flex flex-wrap gap-[12px] mt-[32px]">
          <Link href="/portfolio" className="btn primary inline-flex items-center justify-center min-h-[46px] px-[18px] border border-[rgba(56,231,255,0.62)] rounded-[8px] bg-gradient-to-br from-[rgba(56,231,255,0.95)] to-[rgba(157,98,255,0.95)] text-[#031018] font-[800] text-[0.95rem] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-[2px]">
            View Portfolio
          </Link>
          <Link href="/contact" className="btn inline-flex items-center justify-center min-h-[46px] px-[18px] border border-[var(--line)] rounded-[8px] bg-[rgba(255,255,255,0.06)] text-[var(--text-custom)] font-[800] text-[0.95rem] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-[2px] hover:border-[rgba(56,231,255,0.55)] hover:bg-[rgba(56,231,255,0.1)]">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="hero-stats grid grid-cols-1 md:grid-cols-3 gap-[10px] mt-[16px]">
        <div className="stat min-h-[88px] p-[16px] border border-[var(--line)] rounded-[8px] bg-[rgba(255,255,255,0.045)] transition-all [data-design=minimalism]:bg-transparent [data-design=minimalism]:border-transparent">
          <strong className="block text-[1.42rem] text-[var(--text-custom)]">5+</strong>
          <span className="block mt-[5px] text-[var(--muted-custom)] text-[0.82rem] leading-[1.35]">Years Experience</span>
        </div>
        <div className="stat min-h-[88px] p-[16px] border border-[var(--line)] rounded-[8px] bg-[rgba(255,255,255,0.045)] transition-all [data-design=minimalism]:bg-transparent [data-design=minimalism]:border-transparent">
          <strong className="block text-[1.42rem] text-[var(--text-custom)]">50+</strong>
          <span className="block mt-[5px] text-[var(--muted-custom)] text-[0.82rem] leading-[1.35]">Projects Delivered</span>
        </div>
        <div className="stat min-h-[88px] p-[16px] border border-[var(--line)] rounded-[8px] bg-[rgba(255,255,255,0.045)] transition-all [data-design=minimalism]:bg-transparent [data-design=minimalism]:border-transparent">
          <strong className="block text-[1.42rem] text-[var(--text-custom)]">100%</strong>
          <span className="block mt-[5px] text-[var(--muted-custom)] text-[0.82rem] leading-[1.35]">Client Satisfaction</span>
        </div>
      </div>
    </section>
  );
}
