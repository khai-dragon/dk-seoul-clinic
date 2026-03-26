import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export default function DetoxHealingPage() {
  const ivMenu = menuData.find((m) => m.href === "/iv-therapy")!;

  return (
    <SubPageLayout
      category="수액 테라피"
      categoryHref="/iv-therapy"
      title="디톡스 힐링"
      subtitle="Detox Healing IV Therapy"
      description="체내 독소 배출과 간 기능 회복을 위한 프리미엄 수액 테라피. 몸속 독소를 제거하고 깨끗한 컨디션을 되찾아 드립니다."
      sideMenu={ivMenu.subItems}
      currentPath="/iv-therapy/detox-healing"
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
        title="디톡스 힐링 수액이란?"
        subtitle="체내 독소 배출과 간 기능 회복에 특화된 프리미엄 수액 프로그램입니다."
      />

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1">
          <p className="text-text-muted leading-relaxed mb-4">
            디톡스 힐링 수액은 간 해독 기능을 강화하고 체내 축적된 독소를 효과적으로 배출하는 데 필요한
            고농도 영양소를 배합한 프리미엄 수액입니다. 잦은 음주, 불규칙한 식습관, 환경 독소 등으로
            손상된 간 기능을 회복하고 전신 컨디션을 개선합니다.
          </p>
          <p className="text-text-muted leading-relaxed">
            DK서울의원의 가정의학과 전문의가 간 기능 상태와 독소 축적 정도를 정밀 진단한 후,
            디톡스에 최적화된 성분을 개인별로 설계합니다.
          </p>
        </div>
        <div className="lg:w-80 shrink-0 bg-section-bg rounded-2xl aspect-[4/3] flex items-center justify-center text-text-muted">
          디톡스 힐링 이미지 영역
        </div>
      </div>

      {/* 주요 성분 및 효과 */}
      <SectionTitle
        title="주요 성분 및 효과"
        subtitle="간 해독과 독소 배출에 핵심적인 고농도 영양 성분을 배합합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="글루타치온"
          description="간의 핵심 해독 물질로 독소 분해와 중금속 배출을 촉진하고, 간세포를 보호합니다."
        />
        <InfoCard
          title="아미노산 복합체"
          description="간 대사 기능에 필수적인 아미노산을 공급하여 해독 효소 활성화와 간 기능 회복을 지원합니다."
        />
        <InfoCard
          title="고농도 비타민 B군"
          description="알코올 분해 과정에서 소모되는 비타민을 보충하고, 간의 에너지 대사를 정상화합니다."
        />
        <InfoCard
          title="미네랄 & 전해질"
          description="독소 배출 과정에서 손실된 미네랄과 전해질을 보충하여 체내 균형을 회복합니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="이런 분께 추천합니다"
        subtitle="다음과 같은 증상이나 고민이 있으신 분께 디톡스 힐링 수액을 추천합니다."
      />

      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-16">
        <ul className="space-y-3">
          {[
            "잦은 음주로 간 건강이 걱정되는 분",
            "숙취 해소가 잘 되지 않고 만성 피로가 있는 분",
            "체내 독소 배출과 디톡스가 필요한 분",
            "불규칙한 식습관으로 소화 기능이 저하된 분",
            "피부 트러블이 잦고 컨디션이 떨어지는 분",
            "환경 독소(미세먼지, 중금속 등)에 자주 노출되는 분",
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
        subtitle="디톡스 힐링 수액 테라피는 다음과 같은 과정으로 진행됩니다."
      />

      <div className="space-y-6 mb-16">
        {[
          { step: "01", title: "전문의 상담", desc: "가정의학과 전문의가 음주 습관, 식습관, 피로 정도를 종합적으로 상담합니다." },
          { step: "02", title: "간 기능 진단", desc: "혈액검사를 통해 간 수치, 영양 상태, 독소 축적 정도를 정확히 파악합니다." },
          { step: "03", title: "맞춤 수액 설계", desc: "진단 결과를 바탕으로 디톡스에 최적화된 성분과 용량을 설계합니다." },
          { step: "04", title: "수액 투여", desc: "VIP 라운지에서 편안하게 수액 치료를 받으시며, 전문 의료진이 상태를 모니터링합니다." },
          { step: "05", title: "사후 관리 안내", desc: "시술 후 간 건강 관리 방법과 생활습관 개선 가이드를 안내해 드립니다." },
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
        <h3 className="text-xl sm:text-2xl font-bold mb-3">디톡스 힐링 수액 상담 받기</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          전문의와의 1:1 상담을 통해 나에게 맞는 디톡스 수액을 처방받으세요.
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
