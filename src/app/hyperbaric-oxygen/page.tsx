import Link from "next/link";
import PageHero from "@/components/PageHero";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "고압산소케어 | DK서울의원",
  description: "DK서울의원 고압산소케어 - 고압산소치료, DK 고압산소챔버, DK 산소치료 솔루션",
};

const oxygenMenu = menuData.find((m) => m.href === "/hyperbaric-oxygen")!;

const subPages = [
  {
    name: "고압산소케어란",
    href: "/hyperbaric-oxygen/about",
    desc: "고압산소치료의 정의와 치료 원리를 알아보고, 건강 회복에 어떤 도움을 줄 수 있는지 확인하세요.",
  },
  {
    name: "DK 고압산소챔버",
    href: "/hyperbaric-oxygen/chamber",
    desc: "DK서울의원의 검증된 고압산소챔버 장비와 환자 중심의 편안한 치료 환경을 소개합니다.",
  },
  {
    name: "DK 산소치료 솔루션",
    href: "/hyperbaric-oxygen/solution",
    desc: "피부 미용부터 회복·재활까지, DK서울의원의 다양한 고압산소치료 적용 분야와 치료 과정을 안내합니다.",
  },
];

export default function HyperbaricOxygenPage() {
  return (
    <>
      <PageHero
        title="고압산소케어"
        subtitle="Hyperbaric Oxygen Care"
        description="DK서울의원은 최첨단 고압산소챔버와 전문 의료진의 정밀 진단을 기반으로, 환자 개개인에게 최적화된 산소치료 솔루션을 제공합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">홈</Link>
          <span>/</span>
          <span className="text-primary font-medium">고압산소케어</span>
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
