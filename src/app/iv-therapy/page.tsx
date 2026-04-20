import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";

export default function IVTherapyPage() {
  const therapies = [
    {
      name: "브레인 힐링",
      href: "/iv-therapy/brain-healing",
      description: "과로와 집중 저하로 지친 컨디션 관리를 돕는 수액 프로그램입니다.",
      imageSrc: "/content/iv-therapy/brain-healing.jpg",
    },
    {
      name: "닥터 비너스 힐링",
      href: "/iv-therapy/dr-venus-healing",
      description: "피부 미용과 탄력을 위한 수액. 피부 노화, 건조, 칙칙한 피부톤 고민 시 추천",
      imageSrc: "/content/iv-therapy/dr-venus-healing.jpg",
    },
    {
      name: "스트레스 힐링",
      href: "/iv-therapy/stress-healing",
      description: "긴장 완화와 휴식 리듬 관리를 돕는 수액 프로그램입니다.",
      imageSrc: "/content/iv-therapy/stress-healing.jpg",
    },
    {
      name: "타임 힐링",
      href: "/iv-therapy/time-healing",
      description: "노화 방지와 에너지 회복을 위한 수액. 활력 저하, 항산화가 필요할 때 추천",
      imageSrc: "/content/iv-therapy/time-healing.jpg",
    },
    {
      name: "디톡스 힐링",
      href: "/iv-therapy/detox-healing",
      description: "컨디션 정리와 회복 관리를 돕는 수액 프로그램입니다.",
      imageSrc: "/content/iv-therapy/detox-healing.jpg",
    },
    {
      name: "파워 힐링",
      href: "/iv-therapy/power-healing",
      description: "활력 보충과 회복 리듬 관리를 돕는 수액 프로그램입니다.",
      imageSrc: "/content/iv-therapy/power-healing.jpg",
    },
    {
      name: "퍼스널수액 처방",
      href: "/iv-therapy/personal-prescription",
      description: "가정의학과 전문의 심층 상담 후 진단에 따라 진행되는 프리미엄 맞춤 수액 테라피",
      imageSrc: "/content/iv-therapy/personal-prescription.jpg",
    },
  ];

  return (
    <>
      <PageHero
        title="수액 테라피"
        subtitle="IV Therapy"
        description="DK서울의원의 프리미엄 수액 테라피는 가정의학과 전문의의 정밀 진단을 바탕으로 환자 개개인의 건강 상태에 맞는 최적의 수액을 배합하여 제공합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">홈</Link>
          <span>/</span>
          <span className="text-primary font-medium">수액 테라피</span>
        </nav>

        <div className="bg-card-bg border border-border-color rounded-3xl p-8 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
            <div>
              <p className="font-serif text-accent text-lg italic tracking-wide mb-3">Tailored Infusion</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                오늘의 컨디션과 회복 목적에 맞춰<br />정교하게 설계하는 수액 테라피
              </h2>
              <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed max-w-2xl">
                DK서울의원의 수액 테라피는 일괄적인 배합보다 현재 컨디션과 생활 리듬,
                피로 양상과 회복 목표를 함께 읽는 방식으로 진행됩니다.
                빠른 컨디션 회복부터 장기적인 밸런스 관리까지 자연스럽게 연결합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                {[
                  "가정의학과 전문의 진단 기반",
                  "목적별 프로그램 + 맞춤 처방",
                  "편안한 라운지형 케어 환경",
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
                src="/content/iv-therapy/personal-prescription.jpg"
                alt="DK서울의원 수액 테라피 비주얼"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* 맞춤 수액이 중요한 이유 */}
        <SectionTitle
          title="맞춤 수액 배합이 중요한 이유"
          subtitle="같은 수액이라도 환자의 건강 상태, 생활습관, 영양 균형에 따라 효과가 달라집니다. DK서울의원은 전문의 상담을 통해 개인별 최적의 수액을 설계합니다."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <InfoCard
            title="정밀 진단 기반"
            description="혈액검사, 체성분 분석 등 정밀 진단을 통해 부족한 영양소와 신체 상태를 정확히 파악합니다."
          />
          <InfoCard
            title="1:1 맞춤 배합"
            description="진단 결과를 바탕으로 가정의학과 전문의가 환자에게 최적화된 수액 성분과 용량을 직접 설계합니다."
          />
          <InfoCard
            title="프리미엄 VIP 케어"
            description="편안한 VIP 라운지에서 전문 의료진의 케어 아래 안전하고 쾌적하게 수액 치료를 받으실 수 있습니다."
          />
        </div>

        {/* 수액 프로그램 목록 */}
        <SectionTitle
          title="수액 테라피 프로그램"
          subtitle="DK서울의원이 제공하는 프리미엄 수액 테라피 라인업입니다. 증상과 목적에 따라 최적의 프로그램을 선택하세요."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {therapies.map((therapy) => (
            <Link
              key={therapy.href}
              href={therapy.href}
              className="service-card bg-card-bg rounded-2xl border border-border-color overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden bg-section-bg">
                <Image
                  src={therapy.imageSrc}
                  alt={therapy.name}
                  fill
                  sizes="(min-width: 1280px) 24vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {therapy.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{therapy.description}</p>
                <div className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  자세히 보기 →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 시술 과정 */}
        <SectionTitle
          title="수액 테라피 진행 과정"
          subtitle="DK서울의원의 체계적인 진료 프로세스를 안내합니다."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { step: "01", title: "전문의 상담", desc: "가정의학과 전문의가 건강 상태, 생활습관, 증상을 종합적으로 파악합니다." },
            { step: "02", title: "정밀 진단", desc: "필요 시 혈액검사, 체성분 분석 등을 통해 정확한 상태를 진단합니다." },
            { step: "03", title: "맞춤 수액 배합", desc: "진단 결과를 바탕으로 환자에게 최적화된 수액 성분을 설계합니다." },
            { step: "04", title: "수액 투여", desc: "VIP 라운지에서 편안하게 수액 치료를 받으시며 전문 의료진이 모니터링합니다." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 sm:p-14 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">나에게 맞는 수액이 궁금하신가요?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            가정의학과 전문의가 1:1 심층 상담을 통해 최적의 수액 프로그램을 추천해 드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-colors text-lg"
          >
            무료 상담 예약하기
          </Link>
        </div>
      </div>
    </>
  );
}
