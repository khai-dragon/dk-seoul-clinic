import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "안티 스트레스 | DK서울의원",
  description: "심리 지표와 신체 지표 분석 기반 정신 건강 종합 진단 및 맞춤 솔루션 제시",
};

const wellnessMenu = menuData.find((m) => m.href === "/wellness")!;

const psychologicalTests = [
  {
    title: "다면적 인성검사 (MMPI)",
    description: "표준화된 심리검사를 통해 현재 정서 상태와 스트레스 반응 양상을 폭넓게 살펴봅니다.",
  },
  {
    title: "기질 및 성격 검사 (TCI)",
    description: "개인의 기질과 성향을 파악해 어떤 상황에서 스트레스가 누적되는지 해석하는 데 도움을 줍니다.",
  },
  {
    title: "문장 완성 검사 (SCT)",
    description: "내면의 감정과 생각 흐름을 보다 섬세하게 이해하기 위한 보조 평가로 활용합니다.",
  },
];

const processSteps = [
  {
    title: "초기 상담",
    description: "현재 스트레스 요인과 수면, 피로, 감정 변화를 문진으로 먼저 정리합니다.",
  },
  {
    title: "심리·신체 지표 확인",
    description: "심리 검사와 생체 지표를 함께 살펴 서로 다른 신호가 어떻게 연결되는지 확인합니다.",
  },
  {
    title: "결과 리포트 및 제안",
    description: "종합 결과를 바탕으로 수액, 영양, 생활 습관 등 회복 방향을 맞춤 제안합니다.",
  },
];

const prescriptions = [
  {
    title: "맞춤 수액",
    description: "스트레스로 소진된 컨디션 회복을 돕기 위해 필요한 영양 성분을 선별해 적용합니다.",
  },
  {
    title: "맞춤 영양제",
    description: "생활 패턴과 검사 결과를 바탕으로, 일상에서 유지하기 쉬운 보충 전략을 제안합니다.",
  },
  {
    title: "고압산소치료",
    description: "집중력 저하나 과로 이후 회복 관리가 필요한 경우 보조적 선택지로 검토할 수 있습니다.",
  },
  {
    title: "맞춤 생활 습관",
    description: "수면, 활동, 호흡, 일상 루틴을 조정해 스트레스 반응이 과도하게 누적되지 않도록 돕습니다.",
  },
];

export default function AntiStressPage() {
  return (
    <SubPageLayout
      category="웰니스"
      categoryHref="/wellness"
      title="안티 스트레스"
      subtitle="Anti-Stress Program"
      description="심리 지표와 신체 지표를 함께 읽어 현재의 스트레스 상태를 보다 입체적으로 이해하고, 개인에게 맞는 회복 방향을 제안합니다."
      sideMenu={wellnessMenu.subItems}
      currentPath="/wellness/anti-stress"
    >
      <SectionTitle
        title="DK 안티 스트레스란?"
        subtitle="스트레스를 단순한 기분 문제로만 보지 않고, 심리 검사와 신체 지표를 함께 해석해 지금의 컨디션을 정리하는 프로그램입니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-6 mb-16">
        <div className="relative min-h-[320px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/wellness/anti-stress/hero.jpg"
            alt="안티 스트레스 프로그램 비주얼"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8 flex flex-col justify-center">
          <p className="text-sm text-text-muted leading-relaxed">
            같은 스트레스라도 누군가는 수면 저하로, 누군가는 피로 누적이나 감정 기복으로 나타납니다.
            DK 안티 스트레스는 이런 반응 차이를 심리 지표와 신체 지표를 함께 보며 정리합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {[
              "심리 검사 기반 해석",
              "신체 지표와 교차 확인",
              "결과 리포트 제공",
              "맞춤 회복 방향 제안",
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
      </div>

      <SectionTitle
        title="검사 진행 흐름"
        subtitle="문진부터 결과 설명까지, 현재 상태를 부담 없이 이해할 수 있도록 단계별로 안내합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className="bg-card-bg rounded-2xl border border-border-color p-6"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center mb-4">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <SectionTitle
        title="심리 지표 분석"
        subtitle="표준화된 심리 검사 도구를 활용해 현재의 정서 상태와 스트레스 반응을 객관적으로 살펴봅니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {psychologicalTests.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <SectionTitle
        title="신체 지표 분석"
        subtitle="스트레스가 신체에 어떤 방식으로 반영되고 있는지, 생체 지표를 통해 함께 확인합니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-6 mb-16">
        <div className="relative min-h-[280px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/wellness/anti-stress/hormone-analysis.jpg"
            alt="안티 스트레스 지표 분석 비주얼"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">타액 호르몬 분석</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            타액 호르몬 분석은 스트레스 호르몬의 하루 변화를 살펴보며, 몸이 얼마나 긴장 상태에 머물러 있는지 이해하는 데 도움을 줍니다.
            비침습적인 방식으로 진행할 수 있어 비교적 부담 없이 현재 상태를 정리할 수 있습니다.
          </p>
          <div className="space-y-3 mt-6 pt-6 border-t border-border-color">
            {[
              "스트레스 반응 패턴과 회복 리듬을 함께 확인",
              "심리 검사 결과와 교차해 해석의 폭을 넓힘",
              "일상 루틴 조정이 필요한 지점을 보다 구체적으로 파악",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <span className="text-sm text-text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionTitle
        title="우울 및 스트레스 상태 종합 진단"
        subtitle="심리 지표와 신체 지표를 분리해서 보지 않고, 현재 상태를 하나의 흐름으로 정리해 설명합니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 mb-16">
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <p className="text-text-muted leading-relaxed mb-6">
            DK서울의원의 안티 스트레스 프로그램은 심리 검사와 호르몬 지표를 함께 비교해 해석합니다.
            감정적 피로와 신체적 소진이 어느 지점에서 맞물려 있는지 살피며, 단일 검사만으로 놓치기 쉬운 패턴을 이해하는 데 초점을 둡니다.
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
            이렇게 정리된 결과는 회복 우선순위를 정하는 기준이 되며, 이후 맞춤 수액이나 생활 습관 제안으로 자연스럽게 이어집니다.
          </p>
        </div>
        <div className="relative min-h-[320px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/wellness/anti-stress/report.jpg"
            alt="안티 스트레스 결과 리포트 상담 비주얼"
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <SectionTitle
        title="종합 결과 보고서 기반 맞춤 제안"
        subtitle="결과 리포트를 바탕으로, 현재 상태에 맞는 회복 방향을 단계적으로 제안합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {prescriptions.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </SubPageLayout>
  );
}
