import Link from "next/link";
import PageHero from "@/components/PageHero";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "웰니스 | DK서울의원",
  description: "DK서울의원 웰니스 프로그램 - 안티 스트레스, 만성피로 케어, 면역 밸런스 케어",
};

const wellnessMenu = menuData.find((m) => m.href === "/wellness")!;

const subPages = [
  {
    name: "안티 스트레스",
    href: "/wellness/anti-stress",
    desc: "심리 지표와 신체 지표 분석을 기반으로 정신 건강 종합 결과를 도출하고, 맞춤 솔루션을 제시합니다.",
  },
  {
    name: "만성피로 케어",
    href: "/wellness/chronic-fatigue",
    desc: "만성피로의 근본 원인을 세포 영양 검사로 분석하고, 맞춤 수액 처방으로 회복을 돕습니다.",
  },
  {
    name: "면역 밸런스 케어",
    href: "/wellness/immune-balance",
    desc: "NK세포 케어, 고함량 비타민, 항산화 면역, 호르몬 밸런스까지 종합적인 면역 관리를 제공합니다.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <PageHero
        title="웰니스"
        subtitle="Wellness Program"
        description="DK서울의원은 스트레스 관리, 만성피로 회복, 면역력 강화까지 현대인의 건강 균형을 위한 종합 웰니스 솔루션을 제공합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">홈</Link>
          <span>/</span>
          <span className="text-primary font-medium">웰니스</span>
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
