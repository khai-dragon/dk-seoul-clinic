import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "다이어트 약처방 | DK서울의원",
  description: "식약처 권고를 준수하는 안전한 다이어트 약 처방. 전문의 1:1 상담 기반 맞춤 처방.",
};

const dietMenu = menuData.find((m) => m.href === "/diet")!;

export default function DietMedicationPage() {
  return (
    <SubPageLayout
      category="다이어트"
      categoryHref="/diet"
      title="다이어트 약처방"
      subtitle="Diet Medication Prescription"
      description="전문의의 정밀 진단과 1:1 상담을 기반으로, 식약처 권고를 준수하는 안전하고 효과적인 다이어트 약을 처방합니다."
      sideMenu={dietMenu.subItems}
      currentPath="/diet/medication"
    >
      {/* 다이어트 약처방이란 */}
      <SectionTitle
        title="다이어트 약처방이란?"
        subtitle="다이어트 약처방은 의학적 진단을 기반으로 체중 감량에 도움이 되는 약물을 전문의가 처방하는 비만 치료 방법입니다. 식욕 억제, 지방 흡수 억제, 대사 촉진 등 다양한 기전의 약물을 환자의 상태에 맞게 선택하여 처방합니다."
      />

      <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        다이어트 약처방 이미지 영역
      </div>

      {/* 다이어트 약처방이 필요한 경우 */}
      <SectionTitle
        title="다이어트 약처방이 필요한 경우"
        subtitle="다음과 같은 경우, 전문의의 다이어트 약처방이 효과적인 도움이 될 수 있습니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="식이조절이 어려운 경우"
          description="강한 식욕이나 야식 습관 등으로 식이조절이 어려워 체중 감량에 실패를 반복하는 경우에 도움이 됩니다."
        />
        <InfoCard
          title="운동만으로 부족한 경우"
          description="꾸준히 운동을 해도 체중 감량 효과가 미미하거나 정체기가 지속되는 경우 약물 보조가 효과적입니다."
        />
        <InfoCard
          title="대사 기능 저하"
          description="나이, 호르몬 변화, 스트레스 등으로 기초대사량이 떨어져 체중이 쉽게 증가하는 경우에 도움이 됩니다."
        />
        <InfoCard
          title="단기간 체중 관리 필요"
          description="건강 관리 목적으로 단기간에 효과적인 체중 감량이 필요한 경우 전문의 관리 하에 약물 처방이 가능합니다."
        />
        <InfoCard
          title="비만 관련 질환 동반"
          description="고혈압, 당뇨, 이상지질혈증 등 비만 관련 질환이 있는 경우 체중 감량을 통한 질환 관리에 도움이 됩니다."
        />
        <InfoCard
          title="요요 현상 반복"
          description="반복적인 요요 현상으로 체중이 오히려 증가하는 패턴을 보이는 경우 전문적인 약물 관리가 필요합니다."
        />
      </div>

      {/* DK서울의원 특징 */}
      <SectionTitle
        title="DK서울의원 다이어트 약처방의 특징"
        subtitle="DK서울의원은 안전성과 효과를 모두 고려한 체계적인 다이어트 약 처방 시스템을 운영합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-10">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">전문의 1:1 상담</h3>
              <p className="text-sm text-text-muted">가정의학과 비만 전문의가 환자의 건강 상태, 비만 이력, 생활습관 등을 종합적으로 분석하여 개인에게 최적화된 약물을 선택합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">정밀 인바디 측정</h3>
              <p className="text-sm text-text-muted">정밀 인바디 기기로 체지방률, 근육량, 체수분, 내장지방 등을 측정하여 정확한 체성분 데이터를 기반으로 처방합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">식약처 권고 준수</h3>
              <p className="text-sm text-text-muted">식품의약품안전처의 권고 사항을 철저히 준수하여 안전성이 검증된 약물만을 처방하며, 처방 기간과 용량을 엄격히 관리합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">04</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">단기간 빠른 효과</h3>
              <p className="text-sm text-text-muted">환자의 상태에 맞는 최적의 약물 조합으로 단기간에 효과적인 체중 감량 결과를 기대할 수 있습니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">05</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">환자와의 소통</h3>
              <p className="text-sm text-text-muted">처방 후 정기적인 경과 관찰과 환자와의 긴밀한 소통을 통해 약물 반응과 부작용을 꼼꼼히 모니터링하며, 필요시 약물을 조절합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">06</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">체중 감소 & 식욕 억제 효과가 증명된 약제 처방</h3>
              <p className="text-sm text-text-muted">임상적으로 체중 감소 및 식욕 억제 효과가 검증된 약제만을 엄선하여 처방합니다. 과학적 근거와 임상 데이터를 기반으로 효과가 입증된 약물을 사용하여 안전하면서도 확실한 체중 감량 결과를 기대할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
