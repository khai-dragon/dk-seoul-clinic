import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import ContentImageFrame from "@/components/ContentImageFrame";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "티타늄 리프팅 | DK서울의원",
  description: "DK서울의원 티타늄 리프팅 - 3가지 파장의 레이저를 동시에 조사하여 탄력, 리프팅, 톤 개선을 한 번에",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

export default function TitaniumPage() {
  return (
    <SubPageLayout
      category="에너지 리프팅"
      categoryHref="/energy-lifting"
      title="티타늄 리프팅"
      subtitle="Titanium Lifting"
      description="3가지 파장의 레이저를 동시에 조사하여 피부 탄력, 리프팅, 톤 개선을 한 번의 시술로 해결하는 복합 레이저 리프팅 시술입니다."
      sideMenu={energyLiftingMenu.subItems}
      currentPath="/energy-lifting/titanium"
    >
      {/* 티타늄 리프팅이란 */}
      <SectionTitle
        title="티타늄 리프팅이란"
        subtitle="티타늄은 3가지 파장(1060nm, 1470nm, 2940nm)의 레이저를 동시에 조사하여 피부의 다양한 층을 한 번에 개선하는 차세대 레이저 리프팅 장비입니다."
      />

      <ContentImageFrame
        src="/content/energy-lifting/titanium/device.webp"
        alt="티타늄 리프팅 장비 비주얼"
        className="w-full h-72 mb-16"
        fit="contain"
      />

      {/* 시술 원리 */}
      <SectionTitle
        title="시술 원리"
        subtitle="3가지 파장의 레이저가 피부의 서로 다른 깊이에 동시에 작용하여 복합적인 피부 개선 효과를 제공합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">1060nm 파장</h3>
              <p className="text-sm text-text-muted">피부 심층부까지 침투하여 콜라겐과 엘라스틴 재생을 촉진하고 피부 탄력을 회복합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">1470nm 파장</h3>
              <p className="text-sm text-text-muted">진피층의 수분에 반응하여 열 에너지를 생성하고, 피부 타이트닝과 리프팅 효과를 제공합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">2940nm 파장</h3>
              <p className="text-sm text-text-muted">피부 표면층에 작용하여 피부결 개선, 톤 균일화, 모공 축소 등의 효과를 제공합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 장점 */}
      <SectionTitle
        title="티타늄 리프팅의 장점"
        subtitle="3파장 동시 조사로 기존 단일 레이저 시술 대비 뛰어난 복합 효과를 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="3파장 동시 조사"
          description="3가지 파장의 레이저가 동시에 작용하여 한 번의 시술로 탄력, 리프팅, 톤 개선을 동시에 해결합니다."
        />
        <InfoCard
          title="짧은 시술 시간"
          description="3가지 시술을 한 번에 진행하므로 개별 시술 대비 시간이 대폭 단축됩니다."
        />
        <InfoCard
          title="최소 다운타임"
          description="비침습적 방식으로 피부 손상을 최소화하여 시술 후 빠른 일상 복귀가 가능합니다."
        />
        <InfoCard
          title="시너지 효과"
          description="각 파장이 서로 다른 깊이에서 작용하여 단일 레이저 대비 시너지 효과가 뛰어납니다."
        />
      </div>

      {/* 모드별 특징 */}
      <SectionTitle
        title="모드별 특징"
        subtitle="티타늄은 다양한 모드를 통해 환자의 고민에 맞는 맞춤 시술이 가능합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">리프팅 모드</h3>
          <p className="text-sm text-text-muted leading-relaxed">피부 심층부에 집중적으로 에너지를 전달하여 콜라겐 수축 및 재생을 유도하고, 강력한 리프팅과 타이트닝 효과를 제공합니다.</p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">스킨 리쥬비네이션 모드</h3>
          <p className="text-sm text-text-muted leading-relaxed">피부 표면과 진피층에 동시에 작용하여 피부결 개선, 톤 균일화, 모공 축소, 잔주름 개선 등 전반적인 피부 재생 효과를 제공합니다.</p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">콤비네이션 모드</h3>
          <p className="text-sm text-text-muted leading-relaxed">리프팅 모드와 리쥬비네이션 모드를 결합하여 탄력 회복과 피부 개선을 동시에 진행하는 올인원 모드입니다.</p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">아이 모드</h3>
          <p className="text-sm text-text-muted leading-relaxed">민감한 눈 주변에 최적화된 모드로, 눈가 잔주름, 다크서클, 눈 밑 처짐을 개선합니다.</p>
        </div>
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="추천 대상"
        subtitle="다음과 같은 고민이 있으신 분께 티타늄 리프팅을 추천합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <InfoCard
          title="복합적 피부 고민"
          description="탄력 저하, 주름, 피부톤 불균일 등 여러 가지 피부 고민을 한 번에 해결하고 싶으신 분"
        />
        <InfoCard
          title="효율적인 시술 선호"
          description="여러 시술을 따로 받을 시간이 없어 한 번에 복합 효과를 원하시는 분"
        />
        <InfoCard
          title="자연스러운 개선"
          description="자연스럽고 점진적인 피부 개선과 리프팅을 원하시는 분"
        />
        <InfoCard
          title="눈가 노화 고민"
          description="눈가 주름, 다크서클 등 눈 주변 노화가 신경 쓰이시는 분"
        />
      </div>
    </SubPageLayout>
  );
}
