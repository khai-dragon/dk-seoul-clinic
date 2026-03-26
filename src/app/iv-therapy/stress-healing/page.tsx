import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export default function StressHealingPage() {
  const ivMenu = menuData.find((m) => m.href === "/iv-therapy")!;

  return (
    <SubPageLayout
      category="수액 테라피"
      categoryHref="/iv-therapy"
      title="스트레스 힐링"
      subtitle="Stress Healing IV Therapy"
      description="심신 안정과 스트레스 해소를 위한 프리미엄 수액 테라피. 만성 스트레스와 불안에서 벗어나 편안한 일상을 되찾아 드립니다."
      sideMenu={ivMenu.subItems}
      currentPath="/iv-therapy/stress-healing"
    >
      {/* 공통 안내 */}
      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-12">
        <h3 className="text-lg font-bold text-foreground mb-3">맞춤 수액 배합이 중요한 이유</h3>
        <p className="text-sm text-text-muted leading-relaxed">
          같은 수액이라도 환자의 건강 상태, 생활습관, 영양 균형에 따라 효과가 달라집니다.
          DK서울의원은 가정의학과 전문의의 정밀 진단을 바탕으로 개인별 최적의 수액을 설계하여 효과를 극대화합니다.
        </p>
      </div>

      {/* 수액 설명 */}
      <SectionTitle
        title="스트레스 힐링 수액이란?"
        subtitle="심신 안정과 스트레스 해소에 특화된 프리미엄 수액 프로그램입니다."
      />

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1">
          <p className="text-text-muted leading-relaxed mb-4">
            스트레스 힐링 수액은 자율신경계 안정과 심리적 긴장 완화에 필요한 핵심 영양소를 고농도로 배합한
            프리미엄 수액입니다. 만성 스트레스, 불안감, 수면 장애 등을 체내 영양 균형 회복을 통해 근본적으로 개선합니다.
          </p>
          <p className="text-text-muted leading-relaxed">
            스트레스가 지속되면 체내 마그네슘, 비타민 등 핵심 영양소가 급격히 소모됩니다.
            DK서울의원의 전문의가 부족한 영양소를 정확히 파악하여 최적의 수액을 설계합니다.
          </p>
        </div>
        <div className="lg:w-80 shrink-0 bg-section-bg rounded-2xl aspect-[4/3] flex items-center justify-center text-text-muted">
          스트레스 힐링 이미지 영역
        </div>
      </div>

      {/* 주요 성분 및 효과 */}
      <SectionTitle
        title="주요 성분 및 효과"
        subtitle="심신 안정에 핵심적인 고농도 영양 성분을 배합합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="마그네슘"
          description="근육 이완과 신경 안정을 도와 긴장을 완화하고, 수면의 질 향상에 기여합니다."
        />
        <InfoCard
          title="고농도 비타민 B군"
          description="스트레스로 소모된 신경 전달 물질을 보충하고, 에너지 대사를 정상화하여 활력을 회복합니다."
        />
        <InfoCard
          title="타우린"
          description="뇌의 억제성 신경 전달 물질 활동을 지원하여 불안 완화와 심리적 안정에 도움을 줍니다."
        />
        <InfoCard
          title="항산화 비타민"
          description="스트레스로 인한 활성산소를 제거하고, 세포 손상을 예방하여 전반적인 건강을 보호합니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="이런 분께 추천합니다"
        subtitle="다음과 같은 증상이나 고민이 있으신 분께 스트레스 힐링 수액을 추천합니다."
      />

      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-16">
        <ul className="space-y-3">
          {[
            "만성 스트레스로 심신이 지쳐있는 분",
            "불안감이나 긴장이 지속되는 분",
            "수면 장애로 숙면을 취하기 어려운 분",
            "업무나 대인관계 스트레스가 과중한 분",
            "스트레스성 두통, 소화불량이 있는 분",
            "번아웃 증후군을 겪고 있는 분",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 시술 과정 */}
      <SectionTitle
        title="시술 과정 안내"
        subtitle="스트레스 힐링 수액 테라피는 다음과 같은 과정으로 진행됩니다."
      />

      <div className="space-y-6 mb-16">
        {[
          { step: "01", title: "전문의 상담", desc: "가정의학과 전문의가 스트레스 수준, 수면 패턴, 생활습관을 종합적으로 상담합니다." },
          { step: "02", title: "정밀 진단", desc: "필요 시 혈액검사를 통해 영양 결핍 상태와 스트레스 호르몬 수치를 파악합니다." },
          { step: "03", title: "맞춤 수액 설계", desc: "진단 결과를 바탕으로 심신 안정에 최적화된 성분과 용량을 설계합니다." },
          { step: "04", title: "수액 투여", desc: "VIP 라운지에서 편안하게 수액 치료를 받으시며, 전문 의료진이 상태를 모니터링합니다." },
          { step: "05", title: "사후 관리 안내", desc: "시술 후 스트레스 관리 방법과 생활습관 개선 가이드를 안내해 드립니다." },
        ].map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">
              {item.step}
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-center text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">스트레스 힐링 수액 상담 받기</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          전문의와의 1:1 상담을 통해 나에게 맞는 스트레스 케어 수액을 처방받으세요.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-colors"
        >
          상담 예약하기
        </Link>
      </div>
    </SubPageLayout>
  );
}
