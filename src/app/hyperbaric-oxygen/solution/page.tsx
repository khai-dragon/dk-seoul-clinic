import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import ContentImageFrame from "@/components/ContentImageFrame";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "DK 산소치료 솔루션 | DK서울의원",
  description: "DK서울의원 고압산소치료 적용 분야와 치료 과정 안내",
};

const oxygenMenu = menuData.find((m) => m.href === "/hyperbaric-oxygen")!;

export default function HyperbaricOxygenSolutionPage() {
  return (
    <SubPageLayout
      category="고압산소케어"
      categoryHref="/hyperbaric-oxygen"
      title="DK 산소치료 솔루션"
      subtitle="DK Oxygen Therapy Solution"
      description="피부 미용부터 회복·재활까지, DK서울의원의 다양한 고압산소치료 적용 분야와 체계적인 치료 과정을 안내합니다."
      sideMenu={oxygenMenu.subItems}
      currentPath="/hyperbaric-oxygen/solution"
    >
      {/* 적용 분야 */}
      <SectionTitle
        title="고압산소치료 적용 분야"
        subtitle="고압산소치료는 다양한 건강 목적에 맞춰 폭넓게 활용될 수 있습니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="피부 미용"
          description="고농도 산소가 피부 깊숙이 전달되어 피부 탄력 회복, 톤 개선, 주름 완화 등 피부 재생 효과를 기대할 수 있습니다."
        />
        <InfoCard
          title="컨디션 개선"
          description="체내 산소 공급량을 높여 만성피로, 수면 장애, 집중력 저하 등 전반적인 컨디션을 회복시킵니다."
        />
        <InfoCard
          title="다이어트 & 헬스"
          description="산소 공급을 통해 기초대사량을 높이고 체지방 연소를 촉진하여 건강한 체중 관리를 돕습니다."
        />
        <InfoCard
          title="회복 & 재활"
          description="수술 후 회복, 스포츠 부상, 근육 손상 등 다양한 회복 과정에서 조직 재생을 촉진합니다."
        />
        <InfoCard
          title="질환 개선"
          description="당뇨병성 상처, 난청, 뇌졸중 후유증 등 다양한 질환에서 보조 치료로 활용되어 증상 개선에 도움을 줍니다."
        />
      </div>

      {/* DK서울의원 고압산소치료 과정 */}
      <SectionTitle
        title="DK서울의원 고압산소치료 과정"
        subtitle="전문 의료진의 체계적인 관리 아래, 안전하고 효과적인 고압산소치료가 진행됩니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-10">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">상담</h3>
              <p className="text-sm text-text-muted">전문의와 1:1 상담을 통해 환자의 건강 상태와 치료 목적을 파악하고, 맞춤 치료 계획을 수립합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">입실</h3>
              <p className="text-sm text-text-muted">편안한 고압산소챔버에 입실하여 치료를 준비합니다. 투명 슬라이딩 도어와 Smart TV로 편안하게 안내됩니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">가압 시작</h3>
              <p className="text-sm text-text-muted">챔버 내부 압력을 서서히 올리며 고농도 산소 호흡을 시작합니다. 귀 불편감이 있을 수 있으며 의료진이 안내합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">04</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">압력 유지</h3>
              <p className="text-sm text-text-muted">목표 압력에 도달한 후 일정 시간 동안 압력을 유지하며 고농도 산소를 충분히 호흡합니다. 실시간 모니터링이 진행됩니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">05</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">감압</h3>
              <p className="text-sm text-text-muted">치료가 완료되면 챔버 내부 압력을 서서히 낮추어 안전하게 정상 기압으로 돌아옵니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">06</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">종료</h3>
              <p className="text-sm text-text-muted">챔버에서 퇴실 후 의료진의 상태 확인을 거쳐 치료가 마무리됩니다. 다음 치료 일정과 주의사항을 안내받습니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 치료 과정 이미지 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContentImageFrame
          src="/content/hyperbaric-oxygen/solution/process-1-2.jpg"
          alt="고압산소치료 과정 1단계와 2단계 비주얼"
          className="w-full h-72"
          overlay
        />
        <ContentImageFrame
          src="/content/hyperbaric-oxygen/solution/process-3-4.jpg"
          alt="고압산소치료 과정 3단계와 4단계 비주얼"
          className="w-full h-72"
          overlay
        />
        <ContentImageFrame
          src="/content/hyperbaric-oxygen/solution/process-5-6.jpg"
          alt="고압산소치료 과정 5단계와 6단계 비주얼"
          className="w-full h-72"
          overlay
        />
      </div>
    </SubPageLayout>
  );
}
