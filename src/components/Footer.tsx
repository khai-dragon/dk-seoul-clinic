import Link from "next/link";
import { menuData } from "@/lib/menu-data";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-3xl font-semibold text-accent italic">DK</span>
              <div className="w-px h-5 bg-white/20" />
              <span className="text-[12px] font-medium tracking-[0.1em] text-white/70 uppercase">Seoul Clinic</span>
            </div>
            <p className="text-[13px] text-white/70 leading-relaxed mb-8">
              힐링과 케어의 공간<br />
              최첨단 의료 기술과 프리미엄 서비스로<br />
              고객님의 건강한 아름다움을 실현합니다.
            </p>
            <div className="space-y-3 text-[13px] text-white/60">
              <p>서울특별시 강남구</p>
              <p>02-XXX-XXXX</p>
              <p>평일 10:00 – 19:00 &nbsp;|&nbsp; 토 10:00 – 15:00</p>
            </div>
          </div>

          {/* Menu columns */}
          {menuData.slice(0, 3).map((category) => (
            <div key={category.name}>
              <h3 className="text-[12px] font-medium tracking-[0.1em] text-accent uppercase mb-5">{category.name}</h3>
              <div className="w-6 h-px bg-accent/50 mb-5" />
              <ul className="space-y-2.5">
                {category.subItems.map((sub) => (
                  <li key={sub.href}>
                    <Link href={sub.href} className="text-[13px] text-white/60 hover:text-white/90 transition-colors">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/45 tracking-wide">
            &copy; {new Date().getFullYear()} DK Seoul Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-[12px] text-white/45 tracking-wide">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
