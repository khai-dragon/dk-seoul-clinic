import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export default function IVTherapyPage() {
  const ivMenu = menuData.find((m) => m.href === "/iv-therapy");

  const therapies = [
    {
      name: "브레인 힐링",
      href: "/iv-therapy/brain-healing",
      description: "두뇌 건강과 집중력 회복을 위한 수액. 과로, 스트레스로 인한 두뇌 피로 시 추천",
    },
    {
      name: "닥터 비너스 힐링",
      href: "/iv-therapy/dr-venus-healing",
      description: "피부 미용과 탄력을 위한 수액. 피부 노화, 건조, 칙칙한 피부톤 고민 시 추천",
    },
    {
      name: "스트레스 힐링",
      href: "/iv-therapy/stress-healing",
      description: "심신 안정과 스트레스 해소를 위한 수액. 만성 스트레스, 불안, 수면 장애 시 추천",
    },
    {
      name: "타임 힐링",
      href: "/iv-therapy/time-healing",
      description: "노화 방지와 에너지 회복을 위한 수액. 활력 저하, 항산화가 필요할 때 추천",
    },
    {
      name: "디톡스 힐링",
      href: "/iv-therapy/detox-healing",
      description: "체내 독소 배출과 간 기능 회복을 위한 수액. 잦은 음주, 독소 배출이 필요할 때 추천",
    },
    {
      name: "파워 힐링",
      href: "/iv-therapy/power-healing",
      description: "체력 회복과 면역력 강화를 위한 수액. 수술 후 회복, 면역력 개선 시 추천",
    },
    {
      name: "퍼스널수액 처방",
      href: "/iv-therapy/personal-prescription",
      description: "가정의학과 전문의 심층 상담 후 진단에 따라 진행되는 프리미엄 맞춤 수액 테라피",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {therapies.map((therapy) => (
            <Link
              key={therapy.href}
              href={therapy.href}
              className="service-card bg-card-bg rounded-2xl p-6 border border-border-color group"
            >
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {therapy.name}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">{therapy.description}</p>
              <div className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기 →
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
