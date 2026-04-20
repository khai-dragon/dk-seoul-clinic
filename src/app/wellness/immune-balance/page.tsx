import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "면역 밸런스 케어 | DK서울의원",
  description: "NK세포 케어, 고함량 비타민, 항산화 면역, 호르몬 밸런스 등 종합 면역 관리 프로그램",
};

const wellnessMenu = menuData.find((m) => m.href === "/wellness")!;

const careCategories = [
  "면역세포(NK세포) 케어",
  "고함량 비타민 케어",
  "항산화 면역 케어",
  "호르몬 밸런스 케어",
];

const nkFunctions = [
  {
    title: "비정상 세포 감시",
    description: "NK세포는 우리 몸에서 비정상적인 세포를 빠르게 감지하는 선천 면역의 일부로 알려져 있습니다.",
  },
  {
    title: "감염 세포 방어",
    description: "바이러스 감염 세포에 대한 초기 방어 반응에 관여하는 것으로 설명됩니다.",
  },
  {
    title: "면역 균형 유지",
    description: "과도하거나 저하된 면역 반응 사이의 균형을 잡는 데 중요한 역할을 합니다.",
  },
  {
    title: "회복 리듬 관리",
    description: "면역 기능 저하가 우려되는 시기에 전반적인 컨디션 회복 전략과 함께 검토됩니다.",
  },
];

const vitaminEffects = [
  {
    title: "면역 반응 보조",
    description: "고함량 비타민 주사는 필요한 영양 공급을 보다 직접적으로 보조하는 선택지로 활용될 수 있습니다.",
  },
  {
    title: "항산화 관리",
    description: "산화 스트레스가 누적된 컨디션 회복 과정에서 항산화 관리의 한 축으로 검토됩니다.",
  },
  {
    title: "피로 회복",
    description: "일시적인 에너지 저하와 회복 지연을 느낄 때 보조적으로 적용되는 경우가 있습니다.",
  },
  {
    title: "생활 컨디션 개선",
    description: "과로, 수면 부족, 회복 지연 등 일상 컨디션 저하를 함께 관리하는 데 도움을 줄 수 있습니다.",
  },
];

const antioxidantIngredients = [
  {
    title: "글루타치온",
    description: "항산화 관리와 간 해독 보조 측면에서 자주 언급되는 성분입니다.",
  },
  {
    title: "알파리포산",
    description: "에너지 대사와 항산화 관리의 균형을 함께 고려할 때 검토되는 성분입니다.",
  },
  {
    title: "셀레늄",
    description: "면역과 항산화 효소 작용에 관여하는 미량 원소로 알려져 있습니다.",
  },
  {
    title: "아연",
    description: "면역 기능과 회복 리듬 유지에 중요한 미네랄로 자주 활용됩니다.",
  },
  {
    title: "비타민E",
    description: "지용성 항산화 비타민으로 세포막 보호 관점에서 함께 검토됩니다.",
  },
];

const hormonePrograms = [
  {
    title: "성인 성장호르몬 평가",
    description: "체성분 변화, 활력 저하, 수면의 질 저하 등과 함께 현재 호르몬 균형을 살펴보고, 필요 시 보충 치료 가능성을 검토합니다.",
    bullets: [
      "체지방과 근육량 변화 확인",
      "활력 저하와 수면 상태 함께 검토",
      "정밀 검사 후 적합성 판단",
    ],
  },
  {
    title: "남성 호르몬 평가",
    description: "근력 저하, 피로감, 복부 비만, 활력 감소가 느껴질 때 혈액 검사와 문진을 통해 부족 여부를 먼저 확인합니다.",
    bullets: [
      "근력 및 체력 저하 평가",
      "체성분 변화와 복부 비만 확인",
      "검사 결과에 따른 맞춤 상담",
    ],
  },
  {
    title: "여성호르몬 치료 상담",
    description: "폐경 전후의 안면 홍조, 발한, 수면 변화, 정서 기복 등을 바탕으로 치료 필요성과 위험 요인을 함께 검토합니다.",
    bullets: [
      "갱년기 증상과 생활 영향도 확인",
      "정밀 문진과 건강 이력 검토",
      "적합하지 않은 경우 대안적 관리 논의",
    ],
  },
];

const contraindications = [
  "유방암 또는 자궁내막암의 병력이 있는 경우",
  "원인 불명의 비정상 질 출혈이 있는 경우",
  "심부정맥 혈전증 또는 폐색전증의 병력이 있는 경우",
  "활동성 간 질환이 있는 경우",
  "관상동맥 질환 또는 뇌졸중의 병력이 있는 경우",
];

export default function ImmuneBalancePage() {
  return (
    <SubPageLayout
      category="웰니스"
      categoryHref="/wellness"
      title="면역 밸런스 케어"
      subtitle="Immune Balance Care"
      description="면역세포, 비타민, 항산화, 호르몬 밸런스를 함께 살펴 전반적인 컨디션 회복과 건강한 균형을 돕는 웰니스 프로그램입니다."
      sideMenu={wellnessMenu.subItems}
      currentPath="/wellness/immune-balance"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {careCategories.map((item) => (
          <div
            key={item}
            className="bg-card-bg rounded-2xl border border-border-color px-4 py-5 text-sm font-medium text-foreground"
          >
            {item}
          </div>
        ))}
      </div>

      <SectionTitle
        title="면역세포(NK세포) 케어"
        subtitle="NK세포는 우리 몸의 선천 면역 반응에서 중요한 역할을 하는 세포로 알려져 있으며, 면역 균형을 설명할 때 자주 언급됩니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.92fr] gap-6 mb-8">
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">NK세포란?</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            NK세포(Natural Killer Cell)는 선천 면역계에 속하는 림프구로, 비정상 세포나 감염 세포에 대한 초기 방어 반응에서 중요한 역할을 하는 것으로 알려져 있습니다.
            DK서울의원은 이를 면역 밸런스를 이해하는 하나의 지표로 활용해 전반적인 컨디션 관리 방향을 설명합니다.
          </p>
        </div>
        <div className="relative min-h-[280px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/wellness/immune-balance/nk-care.png"
            alt="면역세포 케어 비주얼"
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {nkFunctions.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <h3 className="text-lg font-bold text-foreground mb-4">싸이모신 알파 치료</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          싸이모신 알파(Thymosin Alpha-1)는 면역 반응 조절과 관련해 소개되는 펩타이드로, 면역 기능 저하가 우려되는 상황에서 보조적 관리 옵션으로 검토되기도 합니다.
          적용 여부는 현재 건강 상태와 진료 판단을 바탕으로 개별적으로 결정됩니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "면역세포 활성 관리 관점에서 검토",
            "선천 면역과 적응 면역의 균형 설명에 활용",
            "만성 감염 이후 컨디션 저하 시 보조적 선택지",
            "개인 상태에 맞춘 적용 여부 판단",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <SectionTitle
        title="고함량 비타민 케어"
        subtitle="필요한 비타민을 보다 직접적으로 보충해 면역과 회복 리듬을 관리하는 방법으로 검토할 수 있습니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-6 mb-8">
        <div className="relative min-h-[280px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/wellness/immune-balance/high-dose-vitamin.jpg"
            alt="고함량 비타민 케어 비주얼"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-foreground mb-4">고함량 비타민 케어란?</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            고함량 비타민 케어는 경구 복용만으로는 보충이 어려운 비타민을 보다 직접적으로 공급하는 방식으로,
            피로 누적이나 컨디션 저하가 있을 때 보조적 관리 옵션으로 활용될 수 있습니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {vitaminEffects.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <SectionTitle
        title="항산화 면역 케어"
        subtitle="산화 스트레스가 누적된 상태를 관리하기 위해 항산화 성분을 함께 검토하는 프로그램입니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.92fr] gap-6 mb-8">
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">항산화 면역 주사 효과</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "활성산소 관리와 세포 손상 부담 완화",
              "면역 균형 회복을 돕는 보조 전략",
              "간 해독 관리와 회복 리듬 보조",
              "만성적인 소진감과 컨디션 저하 관리",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <span className="text-sm text-text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[280px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/wellness/immune-balance/antioxidant-care.png"
            alt="항산화 면역 케어 비주얼"
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {antioxidantIngredients.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <SectionTitle
        title="호르몬 밸런스 케어"
        subtitle="호르몬 변화로 인한 활력 저하나 수면 변화가 느껴질 때, 정밀 검사와 문진을 바탕으로 균형 회복 방향을 검토합니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-6 mb-8">
        <div className="relative min-h-[280px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/wellness/immune-balance/hormone-balance.jpg"
            alt="호르몬 밸런스 케어 비주얼"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8 flex flex-col justify-center">
          <p className="text-sm text-text-muted leading-relaxed">
            호르몬 치료는 모든 사람에게 동일하게 적용되는 관리가 아닙니다. 증상, 검사 결과, 건강 이력을 함께 검토한 뒤
            필요한 경우에만 신중하게 상담과 적용 여부를 결정합니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {hormonePrograms.map((item) => (
          <div key={item.title} className="bg-card-bg rounded-2xl border border-border-color p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-4">{item.description}</p>
            <div className="space-y-2">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="text-sm text-text-muted">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-section-bg rounded-2xl p-6 border border-border-color">
        <h4 className="font-semibold text-foreground mb-3">여성호르몬 치료를 권하지 않는 경우</h4>
        <p className="text-sm text-text-muted leading-relaxed mb-3">
          아래 항목에 해당하는 경우 여성호르몬 치료가 적합하지 않을 수 있어, 전문의와 충분한 상담 후 다른 관리 방안을 우선 검토합니다.
        </p>
        <ul className="space-y-2">
          {contraindications.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
              <span className="text-sm text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SubPageLayout>
  );
}
