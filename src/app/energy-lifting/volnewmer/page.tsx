import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "볼뉴머 | DK서울의원",
  description: "DK서울의원 볼뉴머 - 고주파 에너지로 콜라겐 생성을 촉진하여 볼륨 회복과 리프팅을 동시에",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

export default function VolnewmerPage() {
  return (
    <SubPageLayout
      category="에너지 리프팅"
      categoryHref="/energy-lifting"
      title="볼뉴머"
      subtitle="Volnewmer"
      description="고주파 에너지로 콜라겐 생성을 촉진하여 볼륨 회복과 리프팅 효과를 동시에 제공하는 차세대 리프팅 시술입니다."
      sideMenu={energyLiftingMenu.subItems}
      currentPath="/energy-lifting/volnewmer"
    >
      {/* 볼뉴머란 */}
      <SectionTitle
        title="볼뉴머란"
        subtitle="볼뉴머는 고주파(RF) 에너지를 진피층에 정밀하게 전달하여 콜라겐과 엘라스틴의 생성을 촉진하고, 잃어버린 볼륨을 회복하면서 리프팅 효과까지 제공하는 시술입니다."
      />

      <div className="w-full h-72 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        볼뉴머 장비 이미지 영역
      </div>

      {/* 시술 원리 */}
      <SectionTitle
        title="시술 원리"
        subtitle="고주파 에너지를 활용하여 진피층의 콜라겐 재생을 촉진하고, 자연스러운 볼륨 회복과 리프팅을 유도합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">고주파 에너지 전달</h3>
              <p className="text-sm text-text-muted">정밀하게 제어된 고주파 에너지를 진피층에 균일하게 전달하여 열 자극을 가합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">콜라겐·엘라스틴 재생</h3>
              <p className="text-sm text-text-muted">열 자극에 의해 섬유아세포가 활성화되어 새로운 콜라겐과 엘라스틴이 생성됩니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">볼륨 회복 및 리프팅</h3>
              <p className="text-sm text-text-muted">증가된 콜라겐이 피부 밀도를 높여 자연스러운 볼륨 회복과 리프팅 효과를 제공합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 장점 */}
      <SectionTitle
        title="볼뉴머의 장점"
        subtitle="볼뉴머만의 차별화된 강점을 소개합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="볼륨 + 리프팅"
          description="단순 리프팅을 넘어 잃어버린 볼륨까지 회복하여 한층 젊어 보이는 효과를 제공합니다."
        />
        <InfoCard
          title="자연스러운 효과"
          description="자체 콜라겐 재생을 통한 자연스러운 볼륨 회복으로 부자연스러움이 없습니다."
        />
        <InfoCard
          title="비침습 시술"
          description="절개나 주사 없이 에너지만으로 시술하여 안전하고 편안합니다."
        />
        <InfoCard
          title="짧은 다운타임"
          description="시술 후 특별한 다운타임 없이 바로 일상생활이 가능합니다."
        />
        <InfoCard
          title="장기적 효과"
          description="시술 후 수개월에 걸쳐 콜라겐이 지속적으로 생성되며 효과가 오래 유지됩니다."
        />
        <InfoCard
          title="다양한 부위 적용"
          description="얼굴 전체, 볼, 턱선, 눈가 등 다양한 부위에 맞춤 시술이 가능합니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="추천 대상"
        subtitle="다음과 같은 고민이 있으신 분께 볼뉴머를 추천합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <InfoCard
          title="볼륨 감소 고민"
          description="나이가 들면서 볼살이 빠지고 얼굴이 꺼져 보이시는 분"
        />
        <InfoCard
          title="탄력 저하"
          description="피부 탄력이 떨어지고 처짐이 느껴지시는 분"
        />
        <InfoCard
          title="필러 대안"
          description="필러 시술 없이 자연스러운 볼륨 회복을 원하시는 분"
        />
        <InfoCard
          title="예방적 관리"
          description="노화 진행을 늦추고 피부 탄력을 유지하고 싶으신 분"
        />
      </div>
    </SubPageLayout>
  );
}
