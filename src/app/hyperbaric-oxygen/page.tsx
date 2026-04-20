import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "고압산소케어 | DK서울의원",
  description: "DK서울의원 고압산소케어 - 고압산소치료, DK 고압산소챔버, DK 산소치료 솔루션",
};

const subPages = [
  {
    name: "고압산소케어란",
    href: "/hyperbaric-oxygen/about",
    desc: "고압산소치료의 정의와 치료 원리를 알아보고, 건강 회복에 어떤 도움을 줄 수 있는지 확인하세요.",
    imageSrc: "/content/hyperbaric-oxygen/about/concept.jpg",
  },
  {
    name: "DK 고압산소챔버",
    href: "/hyperbaric-oxygen/chamber",
    desc: "DK서울의원의 검증된 고압산소챔버 장비와 환자 중심의 편안한 치료 환경을 소개합니다.",
    imageSrc: "/content/hyperbaric-oxygen/chamber/exterior.jpg",
  },
  {
    name: "DK 산소치료 솔루션",
    href: "/hyperbaric-oxygen/solution",
    desc: "피부 미용부터 회복·재활까지, DK서울의원의 다양한 고압산소치료 적용 분야와 치료 과정을 안내합니다.",
    imageSrc: "/content/hyperbaric-oxygen/solution/process-1-2.jpg",
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

        <div className="bg-card-bg border border-border-color rounded-3xl p-8 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
            <div>
              <p className="font-serif text-accent text-lg italic tracking-wide mb-3">Oxygen Recovery</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                산소 공급을 높여<br />회복 리듬을 다시 정돈하는 고압산소 케어
              </h2>
              <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed max-w-2xl">
                DK서울의원은 고압 환경에서의 산소 공급 원리를 바탕으로 회복, 컨디션 관리,
                피부와 재활 보조까지 폭넓게 접근합니다. 장비 안전성과 편안한 치료 경험을 함께 고려해
                고압산소 케어를 구성합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                {[
                  "고압 환경 기반 산소 공급",
                  "장비 안전성과 실시간 모니터링",
                  "회복 목적별 맞춤 적용 안내",
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
                src="/content/hyperbaric-oxygen/chamber/exterior.jpg"
                alt="DK서울의원 고압산소 챔버 비주얼"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
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
