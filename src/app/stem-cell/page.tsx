import Link from "next/link";
import PageHero from "@/components/PageHero";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "줄기세포 | DK서울의원",
  description: "DK서울의원 줄기세포 프로그램 - 프리미엄 셀관리, 줄기세포 연구소, 셀테라피, 첨단재생의료실시기관",
};

const stemCellMenu = menuData.find((m) => m.href === "/stem-cell")!;

const subPages = [
  {
    name: "DK프리미엄 셀관리",
    href: "/stem-cell/premium-cell",
    desc: "프리미엄 셀뱅킹 서비스와 셀카운팅 시스템으로 최적의 세포 관리를 제공합니다.",
  },
  {
    name: "DK줄기세포 연구소",
    href: "/stem-cell/research-lab",
    desc: "자체 세포 연구실과 뱅킹 연구실을 갖춘 최첨단 줄기세포 연구소를 운영합니다.",
  },
  {
    name: "줄기세포 셀테라피",
    href: "/stem-cell/cell-therapy",
    desc: "혈액, 지방, 골수 유래 줄기세포를 활용한 맞춤형 세포 치료를 제공합니다.",
  },
  {
    name: "첨단재생의료실시기관",
    href: "/stem-cell/advanced-regenerative",
    desc: "첨단재생의료실시기관 지정을 통해 검증된 재생의료 서비스를 제공합니다.",
  },
];

export default function StemCellPage() {
  return (
    <>
      <PageHero
        title="줄기세포"
        subtitle="Stem Cell Therapy"
        description="DK서울의원은 자체 줄기세포 연구소를 기반으로 프리미엄 셀관리부터 첨단재생의료까지, 과학적이고 체계적인 줄기세포 치료를 제공합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">홈</Link>
          <span>/</span>
          <span className="text-primary font-medium">줄기세포</span>
        </nav>

        {/* Sub-page grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="service-card bg-card-bg rounded-2xl p-8 border border-border-color group"
            >
              <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {page.name}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{page.desc}</p>
              <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
