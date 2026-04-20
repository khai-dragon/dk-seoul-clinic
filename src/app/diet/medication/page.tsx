import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "다이어트 약처방 | DK서울의원",
  description: "식약처 권고를 준수하는 안전한 다이어트 약 처방. 전문의 1:1 상담 기반 맞춤 처방.",
};

const dietMenu = menuData.find((m) => m.href === "/diet")!;

const medicationNeeds = [
  {
    title: "식이조절이 어려운 경우",
    description: "강한 식욕이나 잦은 야식으로 식사 조절이 반복적으로 무너지는 경우 보조 치료를 검토할 수 있습니다.",
  },
  {
    title: "운동만으로 부족한 경우",
    description: "꾸준히 운동해도 체중 변화가 정체되어 있을 때 현재 상태를 다시 평가해 약물 보조가 필요한지 살펴봅니다.",
  },
  {
    title: "대사 기능 저하",
    description: "나이, 호르몬 변화, 스트레스 등으로 기초대사량이 낮아진 경우 체중 관리 전략을 세밀하게 조정합니다.",
  },
  {
    title: "생활 리듬 교정이 필요한 경우",
    description: "식사 시간, 수면 패턴, 활동량이 불규칙해 감량 흐름이 흔들리는 경우 함께 관리합니다.",
  },
  {
    title: "비만 관련 질환 동반",
    description: "고혈압, 당뇨, 이상지질혈증 등 체중과 연관된 지표를 함께 관리해야 하는 경우에 검토할 수 있습니다.",
  },
  {
    title: "요요 현상 반복",
    description: "감량과 증량을 반복해 몸의 부담이 커진 경우, 보다 안정적인 관리 계획을 다시 세우는 데 도움을 줍니다.",
  },
];

const medicationFeatures = [
  {
    title: "전문의 1:1 상담",
    description: "가정의학과 전문의가 건강 상태, 기존 감량 이력, 생활 습관을 종합적으로 살펴 처방 방향을 정합니다.",
  },
  {
    title: "정밀 인바디 측정",
    description: "체지방률, 근육량, 체수분, 내장지방 등을 확인해 보다 현실적인 감량 목표를 설정합니다.",
  },
  {
    title: "식약처 권고 준수",
    description: "적응증과 용법, 복용 기간을 기준에 맞춰 관리하며 안전성이 우선되는 범위에서 처방합니다.",
  },
  {
    title: "경과 및 부작용 모니터링",
    description: "복용 후 반응과 컨디션 변화를 살피며, 필요 시 용량이나 약제를 조정합니다.",
  },
  {
    title: "생활 습관과의 연계",
    description: "약물만으로 끝나지 않도록 식사, 활동량, 수면 관리까지 함께 안내합니다.",
  },
  {
    title: "검증된 약제 중심 처방",
    description: "체중 감소 및 식욕 조절 효과가 알려진 약제를 중심으로, 환자 상태에 맞는 선택지를 정리합니다.",
  },
];

export default function DietMedicationPage() {
  return (
    <SubPageLayout
      category="다이어트"
      categoryHref="/diet"
      title="다이어트 약처방"
      subtitle="Diet Medication Prescription"
      description="전문의의 정밀 진단과 1:1 상담을 기반으로, 안전성과 실행 가능성을 함께 고려한 맞춤 다이어트 약 처방을 진행합니다."
      sideMenu={dietMenu.subItems}
      currentPath="/diet/medication"
    >
      <SectionTitle
        title="다이어트 약처방이란?"
        subtitle="다이어트 약처방은 체중 관리가 필요한 상황에서, 현재 건강 상태와 생활 패턴을 함께 살펴 의료적으로 적절한 약물 보조를 설계하는 과정입니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-6 mb-16">
        <div className="relative min-h-[320px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/diet/medication/overview.jpg"
            alt="다이어트 약처방 비주얼"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">DK서울의원 처방 원칙</h3>
          <div className="space-y-4">
            {[
              "현재 BMI와 체성분, 기존 질환, 복용 중인 약물을 함께 확인합니다.",
              "식욕 패턴과 생활 리듬을 고려해 실제로 유지 가능한 계획을 세웁니다.",
              "과도한 처방보다 적합한 약제 선택과 모니터링을 우선합니다.",
              "필요 시 생활 습관 교정과 다른 치료 옵션을 함께 제안합니다.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <p className="text-sm text-text-muted">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-primary/5 border border-primary/15 p-5">
            <p className="text-sm text-foreground leading-relaxed">
              약물 처방은 단독 솔루션이 아니라 <strong className="text-primary">감량 전략의 한 요소</strong>로 사용됩니다.
              안전한 복용과 경과 관찰이 함께 이뤄져야 의미 있는 관리로 이어질 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      <SectionTitle
        title="다이어트 약처방이 필요한 경우"
        subtitle="다음과 같은 상황에서는 생활 습관 교정과 함께 약물 보조가 도움이 될 수 있습니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {medicationNeeds.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <SectionTitle
        title="DK서울의원 다이어트 약처방의 특징"
        subtitle="안전성, 실행 가능성, 경과 관찰까지 포함해 처방 전후 과정을 함께 설계합니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-6">
        <div className="relative min-h-[320px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/diet/medication/consultation.jpg"
            alt="다이어트 약처방 상담 비주얼"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <div className="space-y-6">
            {medicationFeatures.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
