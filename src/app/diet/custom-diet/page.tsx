import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "DK 맞춤 다이어트 | DK서울의원",
  description: "건강 기능 회복을 통한 요요 없는 다이어트. 비만 전문의 1:1 맞춤 상담과 정밀 검사 기반 프로그램.",
};

const dietMenu = menuData.find((m) => m.href === "/diet")!;

const recoveryHighlights = [
  "체중만이 아니라 피로도, 식욕 패턴, 생활 리듬까지 함께 확인합니다.",
  "반복된 다이어트 실패 원인을 건강 지표 관점에서 다시 해석합니다.",
  "검사 결과와 목표에 맞춰 주사, 약물, 수액, 코칭의 구성을 달리합니다.",
];

const failureAnalysisItems = [
  {
    title: "호르몬 불균형 분석",
    description: "인슐린, 갑상선, 성호르몬 등 체중 변화와 연관된 요소를 확인해 감량을 방해하는 요인을 살펴봅니다.",
  },
  {
    title: "대사 기능 평가",
    description: "기초대사량, 체지방률, 근육량, 내장지방 등을 함께 확인해 현재의 체성분 흐름을 읽어냅니다.",
  },
  {
    title: "영양 결핍 확인",
    description: "식사 패턴과 영양 균형을 점검해 쉽게 지치거나 폭식으로 이어지는 배경을 함께 봅니다.",
  },
  {
    title: "생활습관 분석",
    description: "수면, 운동, 식사 시간, 스트레스 반응까지 포함해 실제 생활에서 실천 가능한 전략을 설계합니다.",
  },
];

const specialistCredentials = [
  "가정의학과 전문의",
  "비만 전문 인증의",
  "국제 생활습관의학 전문의 (IBLM)",
];

const programItems = [
  {
    title: "정밀 인바디 측정",
    description: "체지방, 근육량, 체수분, 내장지방 등을 정밀하게 측정해 현재 체성분 상태를 객관적으로 파악합니다.",
  },
  {
    title: "GLP-1 주사 또는 약 처방",
    description: "검사 결과와 생활 패턴을 바탕으로, 주사 치료와 약물 치료 중 적절한 방향을 함께 검토합니다.",
  },
  {
    title: "맞춤 수액",
    description: "대사와 컨디션 회복에 필요한 영양 성분을 보충해 감량 과정에서의 피로 누적을 줄이는 데 도움을 줍니다.",
  },
  {
    title: "일상 다이어트 코칭",
    description: "식사, 수면, 활동량을 무리 없이 조정할 수 있도록 현실적인 생활 코칭을 제공합니다.",
  },
  {
    title: "기기 관리",
    description: "필요 시 체형 관리와 컨디션 유지에 도움이 되는 의료 기기를 병행해 프로그램의 완성도를 높입니다.",
  },
];

export default function CustomDietPage() {
  return (
    <SubPageLayout
      category="다이어트"
      categoryHref="/diet"
      title="DK 맞춤 다이어트"
      subtitle="DK Custom Diet Program"
      description="단순히 체형이나 체중을 줄이는 것이 아니라, 건강 기능 회복을 바탕으로 지속 가능한 감량 전략을 설계하는 맞춤 프로그램입니다."
      sideMenu={dietMenu.subItems}
      currentPath="/diet/custom-diet"
    >
      <SectionTitle
        title="건강 기능 회복을 통한 요요 없는 다이어트"
        subtitle="DK서울의원의 다이어트는 체중계 숫자만을 바라보기보다, 왜 감량이 어렵고 왜 다시 늘어나는지를 건강 지표 중심으로 살펴보는 것에서 출발합니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-6 mb-16">
        <div className="relative min-h-[320px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/diet/custom-diet/program-overview.jpg"
            alt="DK 맞춤 다이어트 프로그램 비주얼"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8 flex flex-col justify-center">
          <p className="text-sm text-text-muted leading-relaxed">
            무리한 식이 제한이나 일시적인 처방만으로는 체중 변화가 오래 유지되기 어렵습니다.
            DK 맞춤 다이어트는 현재 컨디션과 생활 패턴을 함께 확인한 뒤, 감량과 회복이 균형을 이루는 방향으로 계획을 세웁니다.
          </p>
          <div className="space-y-3 mt-6">
            {recoveryHighlights.map((item) => (
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
        title="비만 정밀 검사를 통한 실패 원인 분석"
        subtitle="그동안의 다이어트 경험이 왜 오래가지 않았는지, 몸의 상태와 생활 요소를 함께 보며 원인을 정리합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {failureAnalysisItems.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <SectionTitle
        title="가정의학과 전문의 1:1 맞춤 상담"
        subtitle="비만 전문 인증의이자 국제 생활습관의학 전문의인 가정의학과 전문의가 직접 현재 상태와 목표를 함께 설계합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="relative min-h-[280px] rounded-2xl overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/diet/custom-diet/consultation.jpg"
            alt="DK서울의원 맞춤 다이어트 상담 비주얼"
            fill
            sizes="(min-width: 768px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-foreground mb-4">전문의 자격 및 상담 포인트</h3>
          <ul className="space-y-3">
            {specialistCredentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <span className="text-sm text-text-muted">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-muted leading-relaxed mt-6 pt-6 border-t border-border-color">
            상담 단계에서는 기존 감량 경험, 복용 약, 수면과 식사 습관, 컨디션 변화까지 함께 확인해
            이후 프로그램 구성이 실제 생활에 맞게 이어질 수 있도록 돕습니다.
          </p>
        </div>
      </div>

      <SectionTitle
        title="DK 맞춤 다이어트 프로그램 구성"
        subtitle="정밀 검사와 상담 결과를 바탕으로, 필요한 치료와 코칭을 무리 없이 조합합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {programItems.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
        <p className="text-sm text-foreground leading-relaxed">
          <strong className="text-primary">프로그램 운영 원칙</strong> 현재 건강 상태와 감량 목표를 함께 검토한 뒤,
          필요한 치료를 단계적으로 구성합니다. 모든 치료 옵션은 상담과 평가 결과에 따라 개인별로 달라질 수 있습니다.
        </p>
      </div>
    </SubPageLayout>
  );
}
