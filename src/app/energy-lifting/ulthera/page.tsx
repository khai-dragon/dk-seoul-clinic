import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import ContentImageFrame from "@/components/ContentImageFrame";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "울쎄라 프라임 | DK서울의원",
  description: "DK서울의원 울쎄라 프라임 - 초음파 에너지로 SMAS층까지 접근하는 리프팅 장비 안내",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

export default function UltheraPage() {
  return (
    <SubPageLayout
      category="에너지 리프팅"
      categoryHref="/energy-lifting"
      title="울쎄라 프라임"
      subtitle="Ulthera Prime"
      description="초음파 에너지를 피부 심층(SMAS층)까지 전달해 리프팅 방향을 설계하는 프리미엄 리프팅 시술입니다."
      sideMenu={energyLiftingMenu.subItems}
      currentPath="/energy-lifting/ulthera"
    >
      {/* 울쎄라 프라임이란 */}
      <SectionTitle
        title="울쎄라 프라임이란"
        subtitle="울쎄라 프라임은 미국 Merz사의 고밀도 집속 초음파(HIFU) 기술을 활용하여, 피부 깊은 층(SMAS층)까지 에너지를 전달하는 비수술 리프팅 시술입니다."
      />

      <ContentImageFrame
        src="/content/energy-lifting/ulthera/device.webp"
        alt="울쎄라 프라임 장비 비주얼"
        className="w-full h-72 mb-16"
        fit="contain"
      />

      {/* 시술 원리 */}
      <SectionTitle
        title="시술 원리"
        subtitle="고밀도 집속 초음파(HIFU)가 피부의 SMAS층까지 정밀하게 열 에너지를 전달하여 조직을 수축시키고 콜라겐 재생을 촉진합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">초음파 에너지 집속</h3>
              <p className="text-sm text-text-muted">고밀도 집속 초음파(HIFU)가 피부 표면 손상 없이 목표 깊이에 정밀하게 열 에너지를 전달합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">SMAS층 자극</h3>
              <p className="text-sm text-text-muted">성형외과 수술 시 당기는 층인 SMAS층까지 에너지가 도달하여 근본적인 리프팅 효과를 제공합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">콜라겐 신생</h3>
              <p className="text-sm text-text-muted">열 응고점을 생성하여 콜라겐 재생을 유도하고, 시술 후 2~3개월에 걸쳐 점진적으로 리프팅 효과가 극대화됩니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 업그레이드 울쎄라 프라임 */}
      <SectionTitle
        title="DK서울의원의 업그레이드 울쎄라 프라임"
        subtitle="초음파 영상 기술, 맞춤 디자인, 커스터마이징 팁을 결합하여 한 차원 높은 울쎄라 시술을 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="초음파 영상 기술"
          description="실시간 초음파 영상으로 피부 조직의 깊이와 상태를 확인하며 시술하여 정밀도와 안전성을 높입니다."
        />
        <InfoCard
          title="맞춤 디자인"
          description="환자 개개인의 얼굴 구조와 처짐 정도를 분석하여 부위별 맞춤 시술 디자인을 설계합니다."
        />
        <InfoCard
          title="커스터마이징 팁"
          description="1.5mm, 3.0mm, 4.5mm 세 가지 깊이의 팁을 부위별로 최적 조합하여 시술합니다."
        />
      </div>

      {/* 시술 부위 */}
      <SectionTitle
        title="시술 부위"
        subtitle="울쎄라 프라임은 얼굴과 목 전반에 걸쳐 시술이 가능합니다."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {["이마·눈썹", "볼·팔자", "턱선·이중턱", "목·데콜테"].map((area) => (
          <div key={area} className="bg-card-bg rounded-2xl border border-border-color p-5 text-center">
            <p className="text-sm font-medium text-foreground">{area}</p>
          </div>
        ))}
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="추천 대상"
        subtitle="다음과 같은 고민이 있으신 분께 울쎄라 프라임을 추천합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="강력한 리프팅 효과"
          description="확실한 리프팅 효과를 원하시는 분"
        />
        <InfoCard
          title="피부 처짐 고민"
          description="얼굴 전체적으로 처짐이 진행되어 탄력 회복이 필요하신 분"
        />
        <InfoCard
          title="비수술 선호"
          description="수술 없이 자연스럽고 강력한 리프팅을 원하시는 분"
        />
        <InfoCard
          title="턱선·이중턱 고민"
          description="흐릿해진 턱선과 이중턱을 개선하고 싶으신 분"
        />
      </div>

      {/* DK서울의원 특징 */}
      <SectionTitle
        title="DK서울의원 울쎄라 프라임의 특징"
        subtitle="비대칭 얼굴 분석 후 커스텀 디자인으로 보다 자연스럽고 균형 잡힌 리프팅을 실현합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <InfoCard
          title="비대칭 분석 시스템"
          description="정밀 분석을 통해 얼굴의 비대칭을 파악하고 좌우 균형을 맞춘 맞춤 시술을 설계합니다."
        />
        <InfoCard
          title="커스텀 디자인 시술"
          description="환자 개개인의 골격과 피부 상태에 맞는 1:1 맞춤 리프팅 디자인을 제공합니다."
        />
        <InfoCard
          title="풍부한 시술 경험"
          description="다수의 울쎄라 시술 경험을 보유한 전문 의료진이 직접 시술합니다."
        />
      </div>
    </SubPageLayout>
  );
}
