import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "DK 맞춤 다이어트 | DK서울의원",
  description: "건강 기능 회복을 통한 요요 없는 다이어트. 비만 전문의 1:1 맞춤 상담과 정밀 검사 기반 프로그램.",
};

const dietMenu = menuData.find((m) => m.href === "/diet")!;

export default function CustomDietPage() {
  return (
    <SubPageLayout
      category="다이어트"
      categoryHref="/diet"
      title="DK 맞춤 다이어트"
      subtitle="DK Custom Diet Program"
      description="단순히 체형이나 체중을 줄이는 것이 아닌, 건강 회복을 목적으로 한 지속 가능한 맞춤 다이어트 프로그램입니다."
      sideMenu={dietMenu.subItems}
      currentPath="/diet/custom-diet"
    >
      {/* 핵심 철학 */}
      <SectionTitle
        title="건강 기능 회복을 통한 요요 없는 다이어트"
        subtitle="DK서울의원의 다이어트는 단순한 체중 감량이 아닙니다. 몸의 건강 기능을 정상으로 회복시켜 자연스럽게 체중이 관리되도록 하는, 근본적이고 지속 가능한 다이어트입니다."
      />

      <div className="w-full h-72 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        DK 맞춤 다이어트 컨셉 이미지 영역
      </div>

      {/* 실패 원인 분석 */}
      <SectionTitle
        title="비만 정밀 검사를 통한 실패 원인 분석"
        subtitle="그동안 다이어트에 실패했던 이유를 정밀 검사를 통해 과학적으로 분석합니다. 호르몬 불균형, 대사 저하, 영양 결핍 등 숨겨진 원인을 찾아냅니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="호르몬 불균형 분석"
          description="비만과 관련된 인슐린, 갑상선, 성호르몬 등의 불균형을 정밀 검사로 확인합니다."
        />
        <InfoCard
          title="대사 기능 평가"
          description="기초대사량, 체지방률, 근육량 등을 분석하여 대사 저하 원인을 파악합니다."
        />
        <InfoCard
          title="영양 결핍 확인"
          description="체내 필수 영양소 수치를 확인하여 영양 불균형으로 인한 비만 요인을 분석합니다."
        />
        <InfoCard
          title="생활습관 분석"
          description="식습관, 운동량, 수면 패턴 등 일상 생활습관을 종합적으로 분석합니다."
        />
      </div>

      {/* 전문의 상담 */}
      <SectionTitle
        title="가정의학과 전문의 1:1 맞춤 상담"
        subtitle="비만 전문 인증의이자 국제 생활습관의학 전문의인 가정의학과 전문의가 직접 1:1 맞춤 상담을 진행합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm">
          전문의 상담 이미지 영역
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-foreground mb-4">전문의 자격</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted">가정의학과 전문의</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted">비만 전문 인증의</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted">국제 생활습관의학 전문의 (IBLM)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* DK 맞춤 다이어트 프로그램 구성 */}
      <SectionTitle
        title="DK 맞춤 다이어트 프로그램 구성"
        subtitle="정밀 검사와 전문의 상담을 기반으로, 개인에게 최적화된 다이어트 프로그램을 구성합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <InfoCard
          title="정밀 인바디 측정"
          description="체지방, 근육량, 체수분, 내장지방 등을 정밀하게 측정하여 현재 체성분 상태를 정확히 파악합니다."
        />
        <InfoCard
          title="GLP-1 주사 or 약 처방"
          description="검사 결과에 따라 GLP-1 계열 주사 또는 다이어트 약을 최적의 방법으로 처방합니다."
        />
        <InfoCard
          title="맞춤 수액"
          description="체내 부족한 영양소와 대사 기능 개선에 필요한 성분을 맞춤 수액으로 보충합니다."
        />
        <InfoCard
          title="일상 다이어트 코칭"
          description="식단, 운동, 수면 등 일상생활에서 실천 가능한 맞춤 다이어트 코칭을 제공합니다."
        />
        <InfoCard
          title="기기관리"
          description="체지방 감소와 체형 관리를 돕는 전문 의료 기기를 활용한 관리 프로그램을 병행합니다."
        />
      </div>
    </SubPageLayout>
  );
}
