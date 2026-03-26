import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "안티 스트레스 | DK서울의원",
  description: "심리 지표와 신체 지표 분석 기반 정신 건강 종합 진단 및 맞춤 솔루션 제시",
};

const wellnessMenu = menuData.find((m) => m.href === "/wellness")!;

export default function AntiStressPage() {
  return (
    <SubPageLayout
      category="웰니스"
      categoryHref="/wellness"
      title="안티 스트레스"
      subtitle="Anti-Stress Program"
      description="심리 지표 분석과 신체 지표 분석을 통해 정신 건강 상태를 종합적으로 진단하고, 개인에게 최적화된 맞춤 솔루션을 제시합니다."
      sideMenu={wellnessMenu.subItems}
      currentPath="/wellness/anti-stress"
    >
      {/* DK 안티 스트레스 */}
      <SectionTitle
        title="DK 안티 스트레스란?"
        subtitle="DK서울의원의 안티 스트레스 프로그램은 심리 지표와 신체 지표를 함께 분석하여 정신 건강의 종합적인 결과를 도출하고, 과학적 근거를 바탕으로 맞춤 솔루션을 제시하는 프로그램입니다."
      />

      <div className="w-full h-72 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        DK 안티 스트레스 프로그램 이미지 영역
      </div>

      {/* 심리 지표 분석 */}
      <SectionTitle
        title="심리 지표 분석"
        subtitle="표준화된 심리 검사 도구를 활용하여 스트레스, 성격 특성, 심리적 상태를 객관적으로 분석합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="다면적 인성검사 (MMPI)"
          description="세계적으로 가장 널리 사용되는 표준화된 심리검사로, 성격 특성과 정신건강 상태를 다면적으로 평가합니다."
        />
        <InfoCard
          title="기질 및 성격 검사 (TCI)"
          description="개인의 기질과 성격 차원을 과학적으로 분석하여, 스트레스 대처 방식과 심리적 취약점을 파악합니다."
        />
        <InfoCard
          title="문장 완성 검사 (SCT)"
          description="미완성 문장을 완성하는 투사적 검사를 통해 내면의 감정, 갈등, 무의식적 욕구를 탐색합니다."
        />
      </div>

      {/* 신체 지표 분석 */}
      <SectionTitle
        title="신체 지표 분석"
        subtitle="스트레스가 신체에 미치는 영향을 객관적인 생체 지표를 통해 확인합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <h3 className="text-lg font-bold text-foreground mb-4">타액 호르몬 분석</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          타액(침)을 통해 스트레스 호르몬인 코르티솔 수치와 그 변동 패턴을 분석합니다. 하루 중 시간대별 코르티솔 분비 패턴을 확인하여 부신 기능 상태와 스트레스 부하 정도를 객관적으로 평가합니다. 비침습적 검사로 편안하게 진행됩니다.
        </p>
        <div className="w-full h-48 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm">
          타액 호르몬 분석 이미지 영역
        </div>
      </div>

      {/* 종합 진단 */}
      <SectionTitle
        title="우울 및 스트레스 상태 종합 진단"
        subtitle="신체 지표와 심리 지표를 통합 분석하여 우울 및 스트레스 상태를 종합적으로 진단합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <p className="text-text-muted leading-relaxed mb-6">
          DK서울의원의 안티 스트레스 프로그램은 심리 검사(MMPI, TCI, SCT)와 신체 검사(타액 호르몬 분석)의
          결과를 종합적으로 교차 분석합니다. 심리적 우울·불안 수준과 신체적 스트레스 호르몬 수치를 함께 비교하여,
          단순한 심리 상담이나 단독 검사로는 파악하기 어려운 정신 건강의 전체적인 그림을 정밀하게 진단합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-section-bg p-5 rounded-xl text-center">
            <p className="text-sm font-semibold text-foreground mb-1">심리 지표</p>
            <p className="text-xs text-text-muted">MMPI + TCI + SCT</p>
          </div>
          <div className="bg-primary/10 p-5 rounded-xl text-center flex items-center justify-center">
            <p className="text-sm font-semibold text-primary">종합 교차 분석</p>
          </div>
          <div className="bg-section-bg p-5 rounded-xl text-center">
            <p className="text-sm font-semibold text-foreground mb-1">신체 지표</p>
            <p className="text-xs text-text-muted">타액 호르몬 분석</p>
          </div>
        </div>
        <p className="text-text-muted leading-relaxed mt-6">
          종합 결과 보고서를 바탕으로 우울·스트레스의 원인과 수준을 명확히 파악하고,
          이에 따른 맞춤 처방을 진행합니다.
        </p>
      </div>

      {/* 종합 진단 후 맞춤 처방 */}
      <SectionTitle
        title="종합 결과 보고서 기반 맞춤 처방"
        subtitle="종합 진단 결과를 토대로, 개인에게 최적화된 4가지 맞춤 처방을 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InfoCard
          title="맞춤 수액"
          description="스트레스로 소진된 영양소와 에너지를 보충하는 맞춤 수액을 처방하여 신체 회복을 돕습니다."
        />
        <InfoCard
          title="맞춤 영양제"
          description="검사 결과에 따라 부족한 영양소를 보충하고 스트레스 저항력을 높이는 맞춤 영양제를 처방합니다."
        />
        <InfoCard
          title="고압산소치료"
          description="고압산소치료를 통해 뇌에 충분한 산소를 공급하여 집중력 회복과 정신적 피로 해소를 돕습니다."
        />
        <InfoCard
          title="맞춤 생활 습관"
          description="수면, 운동, 호흡법, 이완 기법 등 일상에서 실천할 수 있는 맞춤 생활 습관 개선 방안을 제안합니다."
        />
      </div>
    </SubPageLayout>
  );
}
