import Link from "next/link";
import PageHero from "@/components/PageHero";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "다이어트 | DK서울의원",
  description: "DK서울의원 다이어트 프로그램 - DK 맞춤 다이어트, GLP-1 주사, 다이어트 약처방",
};

const dietMenu = menuData.find((m) => m.href === "/diet")!;

const subPages = [
  {
    name: "DK 맞춤 다이어트",
    href: "/diet/custom-diet",
    desc: "건강 기능 회복을 통한 요요 없는 다이어트. 비만 전문의의 1:1 맞춤 상담으로 근본적인 체중 관리를 시작하세요.",
  },
  {
    name: "GLP-1 주사",
    href: "/diet/glp1-injection",
    desc: "마운자로, 위고비, 삭센다 등 GLP-1 계열 비만 치료 주사를 전문의 진단 하에 안전하게 처방합니다.",
  },
  {
    name: "다이어트 약처방",
    href: "/diet/medication",
    desc: "식약처 권고를 준수하는 안전한 다이어트 약 처방으로 단기간 효과적인 체중 감량을 돕습니다.",
  },
];

export default function DietPage() {
  return (
    <>
      <PageHero
        title="다이어트"
        subtitle="Diet Program"
        description="DK서울의원은 단순한 체중 감량이 아닌, 건강 회복을 목적으로 한 과학적이고 지속 가능한 다이어트 솔루션을 제공합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">홈</Link>
          <span>/</span>
          <span className="text-primary font-medium">다이어트</span>
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
