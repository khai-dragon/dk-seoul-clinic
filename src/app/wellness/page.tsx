import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "웰니스 | DK서울의원",
  description: "DK서울의원 웰니스 프로그램 - 안티 스트레스, 만성피로 케어, 면역 밸런스 케어",
};

const subPages = [
  {
    name: "안티 스트레스",
    href: "/wellness/anti-stress",
    desc: "심리 지표와 신체 지표를 함께 읽어 현재의 스트레스 상태를 정리하고, 맞춤 회복 방향을 제안합니다.",
    imageSrc: "/content/wellness/landing/anti-stress.jpg",
  },
  {
    name: "만성피로 케어",
    href: "/wellness/chronic-fatigue",
    desc: "지속되는 피로의 배경을 세포 영양 검사와 생활 리듬 관점에서 살펴보고, 맞춤 회복 계획을 안내합니다.",
    imageSrc: "/content/wellness/landing/chronic-fatigue.jpg",
  },
  {
    name: "면역 밸런스 케어",
    href: "/wellness/immune-balance",
    desc: "면역세포, 비타민, 항산화, 호르몬 밸런스를 함께 고려해 컨디션 관리의 폭을 넓혀드립니다.",
    imageSrc: "/content/wellness/landing/immune-balance.png",
  },
];

export default function WellnessPage() {
  return (
    <>
      <PageHero
        title="웰니스"
        subtitle="Wellness Program"
        description="DK서울의원은 스트레스 관리, 만성피로 회복, 면역 밸런스까지 현대인의 건강 리듬을 세심하게 살피는 종합 웰니스 솔루션을 제공합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">홈</Link>
          <span>/</span>
          <span className="text-primary font-medium">웰니스</span>
        </nav>

        <div className="bg-card-bg border border-border-color rounded-3xl p-8 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
            <div>
              <p className="font-serif text-accent text-lg italic tracking-wide mb-3">Daily Recovery</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                바쁜 일상에서 흐트러진<br />몸의 균형을 다시 정돈하는 웰니스
              </h2>
              <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed max-w-2xl">
                웰니스 프로그램은 특정 증상만을 분리해서 보기보다, 스트레스와 피로, 면역 저하처럼 서로 연결된 신호를 함께 읽어
                보다 정돈된 회복 흐름을 설계하는 데 집중합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                {[
                  "심리·신체 지표 병행 확인",
                  "피로와 컨디션 회복 중심 설계",
                  "면역·영양·호르몬 균형 검토",
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
                src="/content/wellness/landing/anti-stress.jpg"
                alt="DK서울의원 웰니스 프로그램 비주얼"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>

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
