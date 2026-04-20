import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "다이어트 | DK서울의원",
  description: "DK서울의원 다이어트 프로그램 - DK 맞춤 다이어트, GLP-1 주사, 다이어트 약처방",
};

const subPages = [
  {
    name: "DK 맞춤 다이어트",
    href: "/diet/custom-diet",
    desc: "건강 기능 회복을 통한 요요 없는 다이어트. 비만 전문의의 1:1 맞춤 상담으로 근본적인 체중 관리를 시작하세요.",
    imageSrc: "/content/diet/landing/custom-diet.jpg",
  },
  {
    name: "GLP-1 주사",
    href: "/diet/glp1-injection",
    desc: "마운자로, 위고비, 삭센다 등 GLP-1 계열 비만 치료 주사를 전문의 진단 하에 안전하게 처방합니다.",
    imageSrc: "/content/diet/landing/glp1-injection.jpg",
  },
  {
    name: "다이어트 약처방",
    href: "/diet/medication",
    desc: "식약처 권고와 생활 패턴을 함께 고려한 맞춤 처방으로, 체중 관리의 실행력을 높여드립니다.",
    imageSrc: "/content/diet/landing/medication.jpg",
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

        <div className="bg-card-bg border border-border-color rounded-3xl p-8 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
            <div>
              <p className="font-serif text-accent text-lg italic tracking-wide mb-3">Sustainable Balance</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                체중 숫자만이 아니라<br />생활 리듬까지 함께 보는 다이어트
              </h2>
              <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed max-w-2xl">
                DK서울의원의 다이어트 프로그램은 단기간의 변화만을 강조하기보다,
                현재 건강 상태와 생활 습관을 함께 살펴 지속 가능한 감량 전략을 설계하는 데 집중합니다.
                상담, 체성분 확인, 치료 옵션 검토를 하나의 흐름으로 안내합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                {[
                  "전문의 상담 기반",
                  "체성분 및 생활 패턴 확인",
                  "주사·약·코칭 맞춤 조합",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border-color bg-section-bg px-4 py-3 text-sm text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[240px] sm:min-h-[300px] rounded-[28px] overflow-hidden bg-section-bg">
              <Image
                src="/content/diet/landing/custom-diet.jpg"
                alt="DK서울의원 다이어트 프로그램 비주얼"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Sub-page grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="service-card bg-card-bg rounded-2xl border border-border-color overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden bg-section-bg">
                <Image
                  src={page.imageSrc}
                  alt={page.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {page.name}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{page.desc}</p>
                <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  자세히 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
