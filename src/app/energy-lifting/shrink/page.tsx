import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "슈링크 유니버스 | DK서울의원",
  description: "DK서울의원 슈링크 유니버스 - 고밀도 초음파로 SMAS층까지 정밀하게 타이트닝하는 리프팅 시술",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

export default function ShrinkPage() {
  return (
    <SubPageLayout
      category="에너지 리프팅"
      categoryHref="/energy-lifting"
      title="슈링크 유니버스"
      subtitle="Shrink Universe"
      description="고밀도 집속 초음파(HIFU) 에너지를 활용하여 SMAS층까지 정밀하게 타이트닝하는 차세대 초음파 리프팅 시술입니다."
      sideMenu={energyLiftingMenu.subItems}
      currentPath="/energy-lifting/shrink"
    >
      {/* 슈링크 유니버스란 */}
      <SectionTitle
        title="슈링크 유니버스란"
        subtitle="슈링크 유니버스는 한국 클래시스사에서 개발한 HIFU 리프팅 장비로, 독자적인 선형 초음파 기술을 통해 넓은 면적에 균일한 에너지를 전달하여 효과적인 리프팅을 실현합니다."
      />

      <div className="w-full h-72 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        슈링크 유니버스 장비 이미지 영역
      </div>

      {/* 시술 원리 */}
      <SectionTitle
        title="시술 원리"
        subtitle="고밀도 집속 초음파가 피부 심층부까지 균일하게 에너지를 전달하여 콜라겐을 수축하고 재생시킵니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">선형 초음파 기술</h3>
              <p className="text-sm text-text-muted">점 단위가 아닌 선 단위로 초음파 에너지를 조사하여 넓은 면적에 균일하고 빠르게 에너지를 전달합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">다층 에너지 전달</h3>
              <p className="text-sm text-text-muted">1.5mm, 3.0mm, 4.5mm 깊이의 카트리지를 사용하여 진피층부터 SMAS층까지 다양한 깊이에 에너지를 전달합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">콜라겐 수축 및 재생</h3>
              <p className="text-sm text-text-muted">열 에너지에 의해 기존 콜라겐이 즉각 수축되고, 이후 새로운 콜라겐 생성이 촉진되어 장기적인 리프팅 효과가 나타납니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 장점 */}
      <SectionTitle
        title="슈링크 유니버스의 장점"
        subtitle="슈링크 유니버스만의 차별화된 강점을 소개합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="균일한 에너지 전달"
          description="선형 초음파 기술로 넓은 면적에 균일하게 에너지를 전달하여 고른 리프팅 효과를 제공합니다."
        />
        <InfoCard
          title="빠른 시술 시간"
          description="선형 조사 방식으로 시술 시간이 짧아 바쁜 일상 중에도 부담 없이 시술받을 수 있습니다."
        />
        <InfoCard
          title="적은 통증"
          description="균일한 에너지 분포로 기존 HIFU 시술 대비 통증이 줄어 편안한 시술이 가능합니다."
        />
        <InfoCard
          title="최소 다운타임"
          description="시술 직후 일상생활이 가능할 정도로 회복 기간이 짧습니다."
        />
      </div>

      {/* 오로라 앰플 시너지 효과 */}
      <SectionTitle
        title="오로라 앰플 시너지 효과"
        subtitle="슈링크 유니버스와 오로라 앰플을 결합하면 리프팅 효과와 피부 재생 효과가 시너지를 이루어 더욱 뛰어난 결과를 제공합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-3">슈링크 유니버스</h3>
            <ul className="space-y-2">
              <li className="text-sm text-text-muted flex gap-2">
                <span className="text-primary shrink-0">-</span>
                <span>SMAS층까지 초음파 에너지 전달</span>
              </li>
              <li className="text-sm text-text-muted flex gap-2">
                <span className="text-primary shrink-0">-</span>
                <span>콜라겐 수축 및 재생 촉진</span>
              </li>
              <li className="text-sm text-text-muted flex gap-2">
                <span className="text-primary shrink-0">-</span>
                <span>리프팅 및 타이트닝 효과</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">오로라 앰플</h3>
            <ul className="space-y-2">
              <li className="text-sm text-text-muted flex gap-2">
                <span className="text-primary shrink-0">-</span>
                <span>피부 재생 성분 공급</span>
              </li>
              <li className="text-sm text-text-muted flex gap-2">
                <span className="text-primary shrink-0">-</span>
                <span>보습 및 영양 공급</span>
              </li>
              <li className="text-sm text-text-muted flex gap-2">
                <span className="text-primary shrink-0">-</span>
                <span>시술 후 피부 진정 및 회복 촉진</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border-color">
          <p className="text-sm text-primary font-medium text-center">시너지 효과: 리프팅 + 피부 재생 + 보습 + 진정의 올인원 케어</p>
        </div>
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="추천 대상"
        subtitle="다음과 같은 고민이 있으신 분께 슈링크 유니버스를 추천합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <InfoCard
          title="전체적인 처짐"
          description="얼굴 전체적으로 처짐이 진행되어 리프팅이 필요하신 분"
        />
        <InfoCard
          title="통증 걱정"
          description="기존 HIFU 시술의 통증이 걱정되시는 분"
        />
        <InfoCard
          title="빠른 시술 선호"
          description="짧은 시간 내에 효과적인 리프팅 시술을 받고 싶으신 분"
        />
        <InfoCard
          title="복합 케어"
          description="리프팅과 피부 재생을 동시에 원하시는 분"
        />
      </div>
    </SubPageLayout>
  );
}
