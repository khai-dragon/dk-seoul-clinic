import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "줄기세포 셀테라피 | DK서울의원",
  description: "DK서울의원 줄기세포 셀테라피 - 혈액, 지방, 골수 유래 줄기세포를 활용한 맞춤형 세포 치료",
};

const stemCellMenu = menuData.find((m) => m.href === "/stem-cell")!;

export default function CellTherapyPage() {
  return (
    <SubPageLayout
      category="줄기세포"
      categoryHref="/stem-cell"
      title="줄기세포 셀테라피"
      subtitle="Stem Cell Therapy"
      description="줄기세포의 재생 능력을 활용하여 손상된 조직을 복구하고 신체 기능을 회복하는 첨단 치료입니다."
      sideMenu={stemCellMenu.subItems}
      currentPath="/stem-cell/cell-therapy"
    >
      {/* 줄기세포란? */}
      <SectionTitle
        title="줄기세포란?"
        subtitle="줄기세포는 우리 몸의 다양한 세포로 분화할 수 있는 능력을 가진 미분화 세포입니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              줄기세포는 자기 복제(self-renewal) 능력과 다양한 세포로 분화할 수 있는 능력을 동시에 가진 세포입니다. 이러한 특성 덕분에 손상된 조직의 재생, 면역 기능 회복, 항노화 등 다양한 의료 분야에서 활용됩니다.
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              DK서울의원에서는 환자의 상태와 치료 목적에 따라 최적의 줄기세포 유형을 선택하여 개인 맞춤형 셀테라피를 제공합니다.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              자체 줄기세포 연구소에서 채취, 분리, 배양, 투여까지 전 과정을 직접 관리하여 안전하고 효과적인 치료를 보장합니다.
            </p>
          </div>
          <div className="w-full h-64 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm">
            줄기세포 개념 이미지 영역
          </div>
        </div>
      </div>

      {/* 줄기세포 종류 */}
      <SectionTitle
        title="줄기세포의 종류"
        subtitle="치료 목적과 환자 상태에 따라 다양한 유래의 줄기세포를 활용합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm mb-4">
            혈액 유래 줄기세포 이미지 영역
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">혈액 유래 줄기세포</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">
            말초 혈액에서 채취하는 줄기세포로, 비교적 간편한 채취 과정이 장점입니다.
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              간편한 채취 과정
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              면역 세포 활성화에 효과적
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              반복 채취 가능
            </li>
          </ul>
        </div>

        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm mb-4">
            지방 유래 줄기세포 이미지 영역
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">지방 유래 줄기세포</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">
            지방 조직에서 추출하는 줄기세포로, 풍부한 세포 수를 확보할 수 있습니다.
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              풍부한 세포 수 확보
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              조직 재생 능력 우수
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              피부 재생 및 항노화에 활용
            </li>
          </ul>
        </div>

        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm mb-4">
            골수 유래 줄기세포 이미지 영역
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">골수 유래 줄기세포</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">
            골수에서 채취하는 줄기세포로, 가장 오랜 연구 역사를 가진 줄기세포입니다.
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              가장 오랜 임상 연구 기반
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              뼈, 연골 재생에 효과적
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-0.5">&#10022;</span>
              면역 조절 기능 우수
            </li>
          </ul>
        </div>
      </div>

      {/* 줄기세포 치료 방법 */}
      <SectionTitle
        title="줄기세포 치료 방법"
        subtitle="치료 목적에 따라 최적의 투여 방법을 선택하여 줄기세포를 투여합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card-bg rounded-2xl border border-border-color p-8">
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm mb-6">
            정맥 주사 이미지 영역
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">정맥 주사 (IV Injection)</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            줄기세포를 정맥을 통해 전신에 투여하는 방법입니다. 혈류를 따라 전신으로 순환하며 손상된 부위를 찾아가 재생을 촉진합니다.
          </p>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">적용 분야</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-section-bg text-xs text-text-muted rounded-full">전신 항노화</span>
              <span className="px-2.5 py-1 bg-section-bg text-xs text-text-muted rounded-full">면역력 강화</span>
              <span className="px-2.5 py-1 bg-section-bg text-xs text-text-muted rounded-full">만성 피로 회복</span>
              <span className="px-2.5 py-1 bg-section-bg text-xs text-text-muted rounded-full">장기 기능 개선</span>
            </div>
          </div>
        </div>

        <div className="bg-card-bg rounded-2xl border border-border-color p-8">
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm mb-6">
            피부 주사 이미지 영역
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">피부 주사 (Skin Injection)</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            줄기세포를 피부 조직에 직접 투여하는 방법입니다. 타겟 부위에 집중적으로 줄기세포를 전달하여 피부 재생과 개선 효과를 극대화합니다.
          </p>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">적용 분야</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-section-bg text-xs text-text-muted rounded-full">피부 재생</span>
              <span className="px-2.5 py-1 bg-section-bg text-xs text-text-muted rounded-full">주름 개선</span>
              <span className="px-2.5 py-1 bg-section-bg text-xs text-text-muted rounded-full">탄력 회복</span>
              <span className="px-2.5 py-1 bg-section-bg text-xs text-text-muted rounded-full">흉터 치료</span>
            </div>
          </div>
        </div>
      </div>

      {/* 치료 과정 안내 */}
      <SectionTitle
        title="줄기세포 셀테라피 과정"
        subtitle="체계적인 과정을 통해 안전하고 효과적인 줄기세포 치료를 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoCard
          title="상담 및 검사"
          description="전문 의료진과의 상담 및 혈액 검사를 통해 환자의 건강 상태를 정밀하게 파악합니다."
        />
        <InfoCard
          title="세포 채취"
          description="환자의 상태에 따라 최적의 줄기세포 유형을 선택하여 안전하게 채취합니다."
        />
        <InfoCard
          title="세포 처리 및 배양"
          description="자체 연구소에서 줄기세포를 분리, 정제, 배양하여 치료에 최적의 상태로 준비합니다."
        />
        <InfoCard
          title="줄기세포 투여"
          description="치료 목적에 따라 정맥 주사 또는 피부 주사 방식으로 줄기세포를 투여합니다."
        />
      </div>
    </SubPageLayout>
  );
}
