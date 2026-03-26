import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "DK 고압산소챔버 | DK서울의원",
  description: "DK서울의원 고압산소챔버 장점과 아이벡스 IBEX Light3 장비 소개",
};

const oxygenMenu = menuData.find((m) => m.href === "/hyperbaric-oxygen")!;

export default function HyperbaricOxygenChamberPage() {
  return (
    <SubPageLayout
      category="고압산소케어"
      categoryHref="/hyperbaric-oxygen"
      title="DK 고압산소챔버"
      subtitle="DK Hyperbaric Oxygen Chamber"
      description="검증된 장비와 환자 중심의 편안한 환경으로, 안전하고 효과적인 고압산소치료를 제공합니다."
      sideMenu={oxygenMenu.subItems}
      currentPath="/hyperbaric-oxygen/chamber"
    >
      {/* DK서울의원 고압산소챔버 장점 */}
      <SectionTitle
        title="DK서울의원 고압산소챔버 장점"
        subtitle="DK서울의원은 의료 전문 고압산소챔버를 도입하여, 정밀한 진단과 안전한 치료 환경을 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="검증된 장비"
          description="의료기기 인증을 받은 전문 고압산소챔버를 사용하여 안전성과 치료 효과를 보장합니다."
        />
        <InfoCard
          title="정밀 진단 기반"
          description="치료 전 전문의의 정밀 진단을 통해 환자 상태에 맞는 최적의 압력과 시간을 설정합니다."
        />
        <InfoCard
          title="실시간 모니터링"
          description="치료 중 환자의 상태를 실시간으로 모니터링하여 안전하고 효과적인 치료를 진행합니다."
        />
        <InfoCard
          title="환자 중심 편안한 환경"
          description="쾌적한 치료 공간과 편안한 챔버 환경을 조성하여 치료 중에도 편안하게 쉴 수 있습니다."
        />
      </div>

      {/* 아이벡스 IBEX Light3 */}
      <SectionTitle
        title="아이벡스 IBEX Light3"
        subtitle="DK서울의원이 도입한 아이벡스 IBEX Light3는 최첨단 1인용 고압산소챔버입니다."
      />

      <div className="w-full h-80 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-10">
        아이벡스 IBEX Light3 장비 이미지 영역
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <InfoCard
          title="최대 3기압"
          description="최대 3기압까지 가압 가능하여 높은 치료 효과를 기대할 수 있습니다."
        />
        <InfoCard
          title="1인용 전용 챔버"
          description="1인용 전용 챔버로 개인 프라이버시를 보장하며 맞춤형 치료가 가능합니다."
        />
        <InfoCard
          title="투명 슬라이딩 도어"
          description="투명한 슬라이딩 도어로 개방감을 제공하여 폐쇄 공포증 걱정 없이 편안하게 치료받을 수 있습니다."
        />
        <InfoCard
          title="인터폰 통신"
          description="내장 인터폰을 통해 치료 중에도 의료진과 실시간 소통이 가능합니다."
        />
        <InfoCard
          title="Smart TV 내장"
          description="챔버 내 Smart TV가 설치되어 치료 시간 동안 영상 시청 등 편안한 시간을 보낼 수 있습니다."
        />
      </div>

      {/* 추가 안내 */}
      <div className="bg-card-bg rounded-2xl border border-border-color p-8">
        <h3 className="text-lg font-bold text-foreground mb-4">IBEX Light3 주요 사양</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-text-muted">최대 작동 압력: 3.0 ATA</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-text-muted">챔버 타입: 1인용 모노플레이스</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-text-muted">도어: 투명 아크릴 슬라이딩 도어</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-text-muted">편의시설: 인터폰, Smart TV</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-text-muted">안전 시스템: 실시간 압력 모니터링</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-text-muted">의료기기 인증 완료</span>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
