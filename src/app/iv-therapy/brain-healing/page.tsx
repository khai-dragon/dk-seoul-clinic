import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export default function BrainHealingPage() {
  const ivMenu = menuData.find((m) => m.href === "/iv-therapy")!;

  return (
    <SubPageLayout
      category="수액 테라피"
      categoryHref="/iv-therapy"
      title="브레인 힐링"
      subtitle="Brain Healing IV Therapy"
      description="두뇌 건강과 집중력 회복을 위한 프리미엄 수액 테라피. 과로와 스트레스로 지친 두뇌에 활력을 되찾아 드립니다."
      sideMenu={ivMenu.subItems}
      currentPath="/iv-therapy/brain-healing"
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
        title="브레인 힐링 수액이란?"
        subtitle="두뇌 건강과 집중력 회복에 특화된 프리미엄 수액 프로그램입니다."
      />

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1">
          <p className="text-text-muted leading-relaxed mb-4">
            브레인 힐링 수액은 두뇌 기능 활성화와 집중력 향상에 필요한 핵심 영양소를 고농도로 배합한
            프리미엄 수액입니다. 과로, 스트레스, 수면 부족 등으로 인한 두뇌 피로를 빠르게 회복시키고,
            인지 기능과 기억력 개선에 도움을 줍니다.
          </p>
          <p className="text-text-muted leading-relaxed">
            DK서울의원의 가정의학과 전문의가 환자의 상태를 정밀 진단한 후,
            개인에게 최적화된 성분과 용량으로 수액을 배합하여 투여합니다.
          </p>
        </div>
        <div className="lg:w-80 shrink-0 bg-section-bg rounded-2xl aspect-[4/3] flex items-center justify-center text-text-muted">
          브레인 힐링 이미지 영역
        </div>
      </div>

      {/* 주요 성분 및 효과 */}
      <SectionTitle
        title="주요 성분 및 효과"
        subtitle="두뇌 건강에 핵심적인 고농도 영양 성분을 배합합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="고농도 비타민 B군"
          description="신경 전달 물질 합성을 촉진하고 두뇌 에너지 대사를 활성화하여 집중력과 기억력을 향상시킵니다."
        />
        <InfoCard
          title="아미노산 복합체"
          description="두뇌 신경세포의 기능을 지원하고, 정신적 피로 회복과 인지 기능 개선에 기여합니다."
        />
        <InfoCard
          title="미네랄 & 전해질"
          description="두뇌의 전기 신호 전달을 원활하게 하고, 신경 안정과 스트레스 완화에 도움을 줍니다."
        />
        <InfoCard
          title="항산화 성분"
          description="뇌세포를 산화 스트레스로부터 보호하고, 두뇌 노화를 예방하는 데 기여합니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="이런 분께 추천합니다"
        subtitle="다음과 같은 증상이나 고민이 있으신 분께 브레인 힐링 수액을 추천합니다."
      />

      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-16">
        <ul className="space-y-3">
          {[
            "과로와 스트레스로 두뇌 피로가 심한 분",
            "집중력 저하와 기억력 감퇴가 느껴지는 분",
            "장시간 업무나 학습으로 정신적 피로가 누적된 분",
            "수면 부족으로 두통이나 멍한 느낌이 지속되는 분",
            "시험, 프레젠테이션 등 중요한 일정을 앞둔 분",
            "번아웃 증후군으로 인지 기능 저하를 경험하는 분",
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
        subtitle="브레인 힐링 수액 테라피는 다음과 같은 과정으로 진행됩니다."
      />

      <div className="space-y-6 mb-16">
        {[
          { step: "01", title: "전문의 상담", desc: "가정의학과 전문의가 두뇌 피로 정도, 생활습관, 수면 패턴 등을 종합적으로 상담합니다." },
          { step: "02", title: "정밀 진단", desc: "필요 시 혈액검사 등을 통해 영양 결핍 상태와 스트레스 수치를 정확히 파악합니다." },
          { step: "03", title: "맞춤 수액 설계", desc: "진단 결과를 바탕으로 두뇌 건강에 최적화된 성분과 용량을 설계합니다." },
          { step: "04", title: "수액 투여", desc: "VIP 라운지에서 편안하게 수액 치료를 받으시며, 전문 의료진이 상태를 모니터링합니다." },
          { step: "05", title: "사후 관리 안내", desc: "시술 후 생활습관 개선 및 지속적인 두뇌 건강 관리를 위한 가이드를 안내해 드립니다." },
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
        <h3 className="text-xl sm:text-2xl font-bold mb-3">브레인 힐링 수액 상담 받기</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          전문의와의 1:1 상담을 통해 나에게 맞는 두뇌 건강 수액을 처방받으세요.
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
