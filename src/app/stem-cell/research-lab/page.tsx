import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "DK줄기세포 연구소 | DK서울의원",
  description: "DK서울의원 자체 줄기세포 연구소 - 세포 연구실, 뱅킹 연구실, GMP 시설, 최첨단 연구 장비",
};

const stemCellMenu = menuData.find((m) => m.href === "/stem-cell")!;

export default function ResearchLabPage() {
  return (
    <SubPageLayout
      category="줄기세포"
      categoryHref="/stem-cell"
      title="DK줄기세포 연구소"
      subtitle="DK Stem Cell Research Lab"
      description="DK서울의원은 자체 줄기세포 연구소를 보유하여, 세포의 채취부터 배양, 보관까지 전 과정을 직접 관리합니다."
      sideMenu={stemCellMenu.subItems}
      currentPath="/stem-cell/research-lab"
    >
      {/* 줄기세포 연구소란? */}
      <SectionTitle
        title="줄기세포 연구소란?"
        subtitle="DK서울의원은 의원 내 자체 줄기세포 연구소를 운영하여, 외부 위탁 없이 직접 세포를 연구하고 관리합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">세포 연구실</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            줄기세포의 분리, 배양, 분석을 수행하는 핵심 연구 공간입니다. 최첨단 장비를 갖추고 전문 연구원이 상주하여 세포의 품질과 안전성을 보장합니다.
          </p>
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm">
            세포 연구실 이미지 영역
          </div>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">뱅킹 연구실</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            채취된 줄기세포를 안전하게 동결 보관하는 전용 공간입니다. 엄격한 온도 관리와 품질 기준을 유지하여 세포의 생존율과 활성도를 최상으로 유지합니다.
          </p>
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm">
            뱅킹 연구실 이미지 영역
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 mb-16">
        <p className="text-sm text-foreground leading-relaxed">
          <strong className="text-primary">자체 연구소의 강점</strong> — DK서울의원은 외부 기관에 위탁하지 않고 자체 연구소에서 직접 세포를 처리합니다. 이를 통해 세포의 이동 시간을 최소화하고, 품질 관리의 일관성을 확보하며, 환자 맞춤형 치료를 신속하게 제공할 수 있습니다.
        </p>
      </div>

      {/* GMP 시설 */}
      <SectionTitle
        title="GMP 시설"
        subtitle="의약품 제조 및 품질 관리 기준(GMP)에 준하는 시설을 갖추어 세포 치료의 안전성과 품질을 보장합니다."
      />

      <div className="w-full h-80 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-6">
        GMP 시설 이미지 / 영상 삽입 영역
      </div>
      <div className="w-full h-48 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        GMP 관련 추가 콘텐츠 예정 영역
      </div>

      {/* 줄기세포 연구소가 필요한 이유 */}
      <SectionTitle
        title="줄기세포 연구소가 필요한 이유"
        subtitle="의원 내 자체 연구소 보유는 안전하고 효과적인 줄기세포 치료의 핵심입니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="세포 품질 극대화"
          description="채취 후 즉시 처리가 가능하여 세포의 생존율과 활성도를 최대한으로 유지할 수 있습니다."
        />
        <InfoCard
          title="맞춤형 치료 가능"
          description="환자 개인의 상태에 맞춰 세포를 분석하고 최적의 치료 프로토콜을 설계할 수 있습니다."
        />
        <InfoCard
          title="안전성 확보"
          description="외부 운송 과정 없이 의원 내에서 전 과정이 이루어져 오염 및 손상 위험을 최소화합니다."
        />
        <InfoCard
          title="신속한 처리"
          description="연구소가 의원 내에 위치하여 세포 처리 시간을 단축하고 치료 효율을 높입니다."
        />
      </div>

      {/* 최첨단 연구 장비 */}
      <SectionTitle
        title="최첨단 연구 장비 보유"
        subtitle="DK줄기세포 연구소는 세계적 수준의 연구 장비를 갖추고 있습니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm mb-4">
            Cell Counter 장비 이미지 영역
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Cell Counter</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            세포의 수량과 생존율을 정밀하게 측정하는 자동 세포 계수기입니다. 정확한 세포 분석을 통해 치료의 효과를 극대화합니다.
          </p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm mb-4">
            Cell-3 장비 이미지 영역
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Cell-3</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            세포의 배양과 증식을 위한 고성능 세포 처리 장비입니다. 최적의 환경에서 세포를 배양하여 높은 품질의 줄기세포를 확보합니다.
          </p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="w-full h-48 bg-section-bg rounded-xl flex items-center justify-center text-text-muted text-sm mb-4">
            도립현미경 장비 이미지 영역
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Inverted Microscope</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            세포의 형태와 상태를 고배율로 관찰하는 도립현미경입니다. 세포의 건강 상태를 실시간으로 모니터링하여 최적의 치료 시점을 결정합니다.
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
}
