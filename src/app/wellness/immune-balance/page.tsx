import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "면역 밸런스 케어 | DK서울의원",
  description: "NK세포 케어, 고함량 비타민, 항산화 면역, 호르몬 밸런스 등 종합 면역 관리 프로그램",
};

const wellnessMenu = menuData.find((m) => m.href === "/wellness")!;

export default function ImmuneBalancePage() {
  return (
    <SubPageLayout
      category="웰니스"
      categoryHref="/wellness"
      title="면역 밸런스 케어"
      subtitle="Immune Balance Care"
      description="NK세포 케어, 고함량 비타민, 항산화 면역, 호르몬 밸런스까지 종합적인 면역 관리를 통해 건강한 균형을 되찾아드립니다."
      sideMenu={wellnessMenu.subItems}
      currentPath="/wellness/immune-balance"
    >
      {/* ========== 1. 면역세포(NK세포) 케어 ========== */}
      <SectionTitle
        title="면역세포(NK세포) 케어"
        subtitle="우리 몸의 최전선에서 암세포와 바이러스 감염 세포를 직접 공격하는 NK세포를 활성화하여 면역력을 강화합니다."
      />

      {/* NK세포란 */}
      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-8">
        <h3 className="text-lg font-bold text-foreground mb-4">NK세포란?</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          NK세포(Natural Killer Cell, 자연살해세포)는 선천 면역계에 속하는 림프구의 일종으로, 별도의 항원 인식 과정 없이 비정상 세포를 즉각적으로 인식하고 제거하는 면역 세포입니다. 암세포, 바이러스 감염 세포 등을 스스로 감지하여 빠르게 공격할 수 있어, 면역 방어의 최전선에서 핵심적인 역할을 합니다.
        </p>
        <div className="w-full h-48 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm">
          NK세포 이미지 영역
        </div>
      </div>

      {/* NK세포의 기능 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <InfoCard
          title="암세포 감시 및 제거"
          description="체내에서 발생하는 비정상 세포와 암세포를 조기에 감지하고 직접 공격하여 제거합니다."
        />
        <InfoCard
          title="바이러스 감염 방어"
          description="바이러스에 감염된 세포를 빠르게 인식하고 파괴하여 감염 확산을 차단합니다."
        />
        <InfoCard
          title="면역 항상성 유지"
          description="면역계의 균형을 유지하며 과도한 면역 반응이나 면역 저하를 방지합니다."
        />
        <InfoCard
          title="노화된 세포 청소"
          description="기능이 저하된 노화 세포를 제거하여 조직의 건강한 상태를 유지합니다."
        />
      </div>

      {/* 싸이모신 알파 치료 */}
      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <h3 className="text-lg font-bold text-foreground mb-4">싸이모신 알파 치료</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          싸이모신 알파(Thymosin Alpha-1)는 흉선에서 유래한 면역 조절 펩타이드로, NK세포를 포함한 면역 세포의 활성을 높여 면역력을 강화합니다. 특히 면역력이 저하된 환자, 만성 감염, 암 보조 치료 등에 활용되며, 안전성이 검증된 면역 치료제입니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">NK세포 및 T세포 활성 증가</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">선천 면역과 적응 면역 모두 강화</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">만성 B형 간염, C형 간염 보조 치료</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">암 치료 시 면역력 보조 요법</span>
          </div>
        </div>
      </div>

      {/* ========== 2. 고함량 비타민 케어 ========== */}
      <SectionTitle
        title="고함량 비타민 케어"
        subtitle="경구 섭취보다 훨씬 높은 농도의 비타민을 정맥 주사로 직접 투여하여, 면역력 강화와 항산화 효과를 극대화합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-8">
        <h3 className="text-lg font-bold text-foreground mb-4">고함량 비타민 케어란?</h3>
        <p className="text-sm text-text-muted leading-relaxed">
          고함량 비타민 케어는 비타민C를 비롯한 필수 비타민을 일반 경구 섭취로는 도달할 수 없는 고농도로 정맥에 직접 투여하는 치료입니다. 혈중 비타민 농도를 빠르게 올려 면역 세포를 활성화하고, 강력한 항산화 작용으로 세포 손상을 방지합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="면역력 강화"
          description="고함량 비타민C가 백혈구의 기능을 활성화하고 면역 반응을 강화하여 감염에 대한 저항력을 높입니다."
        />
        <InfoCard
          title="항산화 효과"
          description="강력한 항산화 작용으로 활성산소를 제거하고 세포 손상을 방지하여 노화를 억제합니다."
        />
        <InfoCard
          title="피로 회복"
          description="에너지 대사에 필요한 비타민을 빠르게 보충하여 만성피로를 개선하고 활력을 되찾아줍니다."
        />
        <InfoCard
          title="피부 개선"
          description="콜라겐 합성을 촉진하고 멜라닌 생성을 억제하여 피부 탄력 증가와 톤 개선 효과를 제공합니다."
        />
      </div>

      {/* ========== 3. 항산화 면역 케어 ========== */}
      <SectionTitle
        title="항산화 면역 케어"
        subtitle="강력한 항산화 성분을 정맥 주사로 투여하여 활성산소를 제거하고, 면역 체계의 균형을 회복합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-8">
        <h3 className="text-lg font-bold text-foreground mb-4">항산화 면역 주사 효과</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">활성산소 제거로 세포 손상 방지</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">면역 세포 활성화 및 면역력 강화</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">간 해독 기능 개선</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">만성 염증 억제 및 노화 방지</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="글루타치온"
          description="체내 가장 강력한 항산화 물질로, 간 해독, 면역 강화, 피부 미백 효과가 있습니다. 세포 내 활성산소를 직접 제거합니다."
        />
        <InfoCard
          title="알파리포산"
          description="수용성과 지용성 모두에서 작용하는 만능 항산화제로, 다른 항산화 물질의 재생을 돕고 에너지 대사를 촉진합니다."
        />
        <InfoCard
          title="셀레늄"
          description="필수 미량 원소로 글루타치온 과산화효소의 구성 성분이며, 면역 세포 활성화와 갑상선 기능 유지에 중요합니다."
        />
        <InfoCard
          title="아연"
          description="300가지 이상의 효소 반응에 관여하는 필수 미네랄로, 면역 세포 발달과 항염 작용에 핵심적인 역할을 합니다."
        />
        <InfoCard
          title="비타민E"
          description="세포막을 보호하는 지용성 항산화 비타민으로, 심혈관 건강과 피부 보호에 효과적입니다."
        />
      </div>

      {/* ========== 4. 호르몬 밸런스 케어 ========== */}
      <SectionTitle
        title="호르몬 밸런스 케어"
        subtitle="나이가 들면서 감소하는 주요 호르몬을 적절히 보충하여, 활력과 건강한 신체 기능을 유지합니다."
      />

      {/* 성인 성장호르몬 주사 */}
      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-8">
        <h3 className="text-lg font-bold text-foreground mb-4">성인 성장호르몬 주사</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          성장호르몬은 소아기 성장뿐 아니라 성인에게도 체지방 분해, 근육량 유지, 뼈 건강, 피부 탄력, 면역력 등 다양한 기능에 관여합니다. 나이가 들면서 분비량이 급격히 감소하며, 이를 적절히 보충하면 노화 방지와 전반적인 건강 개선에 도움이 됩니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">체지방 감소 및 근육량 증가</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">피부 탄력 개선 및 주름 감소</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">골밀도 증가 및 뼈 건강 유지</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">에너지 증가 및 수면의 질 향상</span>
          </div>
        </div>
      </div>

      {/* 남성 호르몬 주사 */}
      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-8">
        <h3 className="text-lg font-bold text-foreground mb-4">남성 호르몬 주사</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          남성의 테스토스테론은 30대 이후 매년 약 1~2%씩 감소하며, 이로 인해 근력 저하, 피로감, 복부 비만, 성기능 감퇴, 우울감 등 다양한 증상이 나타날 수 있습니다. 정밀 혈액 검사를 통해 호르몬 수치를 확인한 후, 부족한 테스토스테론을 안전하게 보충합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">근력 및 체력 회복</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">복부 지방 감소 및 체성분 개선</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">활력 증가 및 우울감 개선</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">성기능 및 생식 건강 유지</span>
          </div>
        </div>
      </div>

      {/* 여성 호르몬 치료 */}
      <div className="bg-card-bg rounded-2xl border border-border-color p-8">
        <h3 className="text-lg font-bold text-foreground mb-4">여성호르몬 치료</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          폐경 전후 여성에게 나타나는 에스트로겐 감소로 인한 안면 홍조, 발한, 수면 장애, 골밀도 저하, 질 건조 등의 갱년기 증상을 완화하기 위한 호르몬 보충 치료입니다. 개인의 건강 상태와 위험 요인을 철저히 평가한 후, 최적의 호르몬 치료 방법을 결정합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">안면 홍조, 발한 등 갱년기 증상 완화</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">골밀도 유지 및 골다공증 예방</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">수면의 질 향상 및 정서 안정</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            <span className="text-sm text-text-muted">피부 탄력 유지 및 질 건강 개선</span>
          </div>
        </div>

        {/* 여성호르몬 치료를 권하지 않는 경우 */}
        <div className="bg-section-bg rounded-xl p-6">
          <h4 className="font-semibold text-foreground mb-3">여성호르몬 치료를 권하지 않는 경우</h4>
          <p className="text-sm text-text-muted leading-relaxed mb-3">
            아래에 해당하는 경우, 여성호르몬 치료가 적합하지 않을 수 있으며, 전문의와 충분한 상담 후 대안적 치료를 고려합니다.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
              <span className="text-sm text-text-muted">유방암 또는 자궁내막암의 병력이 있는 경우</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
              <span className="text-sm text-text-muted">원인 불명의 비정상 질 출혈이 있는 경우</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
              <span className="text-sm text-text-muted">심부정맥 혈전증 또는 폐색전증의 병력이 있는 경우</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
              <span className="text-sm text-text-muted">활동성 간 질환이 있는 경우</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
              <span className="text-sm text-text-muted">관상동맥 질환 또는 뇌졸중의 병력이 있는 경우</span>
            </li>
          </ul>
        </div>
      </div>
    </SubPageLayout>
  );
}
