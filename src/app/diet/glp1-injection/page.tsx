import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "GLP-1 주사 | DK서울의원",
  description: "마운자로, 위고비, 삭센다 등 GLP-1 계열 비만 치료 주사를 전문의 진단 하에 안전하게 처방합니다.",
};

const dietMenu = menuData.find((m) => m.href === "/diet")!;

export default function GLP1InjectionPage() {
  return (
    <SubPageLayout
      category="다이어트"
      categoryHref="/diet"
      title="GLP-1 주사"
      subtitle="GLP-1 Receptor Agonist Injection"
      description="GLP-1 수용체 작용제 주사는 식욕 조절과 혈당 관리를 통해 효과적이고 안전한 체중 감량을 돕는 비만 치료제입니다."
      sideMenu={dietMenu.subItems}
      currentPath="/diet/glp1-injection"
    >
      {/* GLP-1 주사란 */}
      <SectionTitle
        title="GLP-1 주사란?"
        subtitle="GLP-1(글루카곤 유사 펩티드-1) 수용체 작용제는 체내에서 자연적으로 분비되는 호르몬과 유사하게 작용하여 식욕을 억제하고 포만감을 높이며, 혈당 조절과 체중 감량에 효과적인 비만 치료 주사입니다."
      />

      <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        GLP-1 주사 작용 원리 이미지 영역
      </div>

      {/* 마운자로 */}
      <SectionTitle
        title="마운자로 (Mounjaro)"
        subtitle="티르제파티드(Tirzepatide) 성분의 이중 수용체 작용제로, GLP-1과 GIP 두 가지 호르몬 수용체에 동시에 작용하여 강력한 체중 감량 효과를 제공합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm">
          마운자로 제품 이미지 영역
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">마운자로 주요 정보</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>성분:</strong> 티르제파티드 (Tirzepatide)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>작용 기전:</strong> GLP-1 + GIP 이중 수용체 작용</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>투여:</strong> 주 1회 피하 주사</span>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-border-color">
            <h4 className="font-semibold text-foreground mb-2">주요 효과</h4>
            <ul className="space-y-2">
              <li className="text-sm text-text-muted">- 강력한 식욕 억제 및 포만감 증가</li>
              <li className="text-sm text-text-muted">- 임상시험에서 최대 22.5% 체중 감량 확인</li>
              <li className="text-sm text-text-muted">- 혈당 조절 및 인슐린 저항성 개선</li>
              <li className="text-sm text-text-muted">- 심혈관 위험 인자 개선</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 위고비 */}
      <SectionTitle
        title="위고비 (Wegovy)"
        subtitle="세마글루티드(Semaglutide) 성분의 GLP-1 수용체 작용제로, 비만 치료 목적으로 FDA 승인을 받은 주사제입니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm">
          위고비 제품 이미지 영역
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">위고비 주요 정보</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>성분:</strong> 세마글루티드 (Semaglutide)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>작용 기전:</strong> GLP-1 수용체 작용</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>투여:</strong> 주 1회 피하 주사</span>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-border-color">
            <h4 className="font-semibold text-foreground mb-2">주요 효과</h4>
            <ul className="space-y-2">
              <li className="text-sm text-text-muted">- 식욕 중추에 작용하여 자연스러운 식욕 조절</li>
              <li className="text-sm text-text-muted">- 임상시험에서 평균 15~17% 체중 감량 확인</li>
              <li className="text-sm text-text-muted">- 심혈관 질환 위험 감소 효과</li>
              <li className="text-sm text-text-muted">- 단계적 용량 증량으로 부작용 최소화</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 삭센다 */}
      <SectionTitle
        title="삭센다 (Saxenda)"
        subtitle="리라글루티드(Liraglutide) 성분의 GLP-1 수용체 작용제로, 비만 치료에 오랫동안 사용되어 온 검증된 주사제입니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm">
          삭센다 제품 이미지 영역
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">삭센다 주요 정보</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>성분:</strong> 리라글루티드 (Liraglutide)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>작용 기전:</strong> GLP-1 수용체 작용</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <span className="text-sm text-text-muted"><strong>투여:</strong> 매일 1회 피하 주사</span>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-border-color">
            <h4 className="font-semibold text-foreground mb-2">주요 효과</h4>
            <ul className="space-y-2">
              <li className="text-sm text-text-muted">- 포만감 증가 및 식욕 감소</li>
              <li className="text-sm text-text-muted">- 임상시험에서 평균 5~10% 체중 감량 확인</li>
              <li className="text-sm text-text-muted">- 장기간 사용 안전성 데이터 확보</li>
              <li className="text-sm text-text-muted">- 혈당 조절 효과</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="GLP-1 주사 추천 대상"
        subtitle="다양한 건강 상태의 환자분들에게 GLP-1 주사가 도움이 될 수 있습니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="대사증후군"
          description="복부비만, 고혈압, 고혈당, 이상지질혈증 등 대사증후군 진단을 받은 분들에게 효과적입니다."
        />
        <InfoCard
          title="갱년기 체중 증가"
          description="갱년기 호르몬 변화로 인한 체중 증가와 대사 저하를 겪고 계신 분들에게 도움이 됩니다."
        />
        <InfoCard
          title="40~50대 중년"
          description="나이에 따른 기초대사량 감소로 체중 관리가 어려워진 40~50대 분들에게 적합합니다."
        />
        <InfoCard
          title="제2형 당뇨병"
          description="제2형 당뇨병 환자의 혈당 조절과 체중 관리를 동시에 도울 수 있습니다."
        />
        <InfoCard
          title="반복적 다이어트 실패"
          description="식이요법과 운동만으로는 체중 감량이 어려웠던 분들에게 효과적인 보조 치료입니다."
        />
        <InfoCard
          title="비만 관련 질환"
          description="수면무호흡증, 관절 질환, 지방간 등 비만과 관련된 다양한 질환을 동반한 분들에게 추천합니다."
        />
      </div>

      {/* BMI 권고 사항 */}
      <SectionTitle
        title="BMI 권고 사항 안내"
        subtitle="GLP-1 주사는 의학적 기준에 따라 처방되며, 오남용 없이 안전하게 사용됩니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <p className="text-sm text-text-muted">BMI 30 이상(비만)이거나, BMI 27 이상이면서 체중 관련 동반 질환(고혈압, 제2형 당뇨, 이상지질혈증 등)이 있는 경우 처방 대상입니다.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <p className="text-sm text-text-muted">DK서울의원은 전문의의 정밀 진단을 기반으로 BMI 권고 사항을 철저히 준수하여 처방합니다.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <p className="text-sm text-text-muted">미용 목적의 무분별한 사용이 아닌, 의학적 필요성에 따른 안전한 치료를 원칙으로 합니다.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <p className="text-sm text-text-muted">처방 후에도 정기적인 경과 관찰과 부작용 모니터링을 통해 안전한 치료를 지속합니다.</p>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
