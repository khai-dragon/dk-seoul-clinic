import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "DK프리미엄 셀관리 | DK서울의원",
  description: "DK서울의원 프리미엄 셀뱅킹 서비스와 셀카운팅 시스템을 통한 최적의 세포 관리",
};

const stemCellMenu = menuData.find((m) => m.href === "/stem-cell")!;

export default function PremiumCellPage() {
  return (
    <SubPageLayout
      category="줄기세포"
      categoryHref="/stem-cell"
      title="DK프리미엄 셀관리"
      subtitle="Premium Cell Management"
      description="프리미엄 셀뱅킹과 셀카운팅 시스템으로 소중한 세포를 체계적으로 관리합니다."
      sideMenu={stemCellMenu.subItems}
      currentPath="/stem-cell/premium-cell"
    >
      {/* 프리미엄 셀뱅킹 서비스 */}
      <SectionTitle
        title="프리미엄 셀뱅킹 서비스"
        subtitle="최적의 상태에서 채취한 줄기세포를 안전하게 보관하고, 필요할 때 활용할 수 있는 프리미엄 셀뱅킹 서비스를 제공합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm">
          셀뱅킹 시설 이미지 영역
        </div>
        <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm">
          셀뱅킹 장비 이미지 영역
        </div>
      </div>

      {/* 셀카운팅 시스템 */}
      <SectionTitle
        title="셀카운팅 시스템"
        subtitle="정밀한 셀카운팅 시스템을 통해 세포의 수량과 활성도를 정확하게 측정하고 관리합니다."
      />

      <div className="w-full h-72 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        셀카운팅 장비 이미지 영역
      </div>

      {/* 서비스 활용 장점 */}
      <SectionTitle
        title="프리미엄 셀관리의 장점"
        subtitle="DK서울의원의 프리미엄 셀관리 서비스는 다양한 장점을 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="개인 맞춤 셀뱅킹"
          description="개인별 최적의 시점에 채취한 줄기세포를 안전하게 동결 보관하여, 미래의 치료에 활용할 수 있습니다."
        />
        <InfoCard
          title="정밀 셀카운팅"
          description="최첨단 셀카운팅 시스템으로 세포의 수량, 생존율, 활성도를 정확하게 분석하여 치료 효과를 극대화합니다."
        />
        <InfoCard
          title="체계적 세포 관리"
          description="채취부터 보관, 활용까지 전 과정을 체계적으로 관리하여 세포의 품질을 최상으로 유지합니다."
        />
        <InfoCard
          title="안전한 보관 시스템"
          description="GMP 수준의 시설에서 엄격한 품질 관리 기준에 따라 세포를 안전하게 보관합니다."
        />
        <InfoCard
          title="전문 의료진 관리"
          description="줄기세포 전문 의료진이 세포의 상태를 지속적으로 모니터링하고 최적의 관리를 제공합니다."
        />
        <InfoCard
          title="다양한 활용 가능"
          description="보관된 줄기세포는 피부 재생, 면역 강화, 항노화 등 다양한 치료에 활용할 수 있습니다."
        />
      </div>

      {/* 프리미엄 서비스 안내 */}
      <SectionTitle
        title="프리미엄 서비스 안내"
        subtitle="DK서울의원만의 차별화된 프리미엄 셀관리 서비스를 경험하세요."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-8">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">1:1 맞춤 상담</h3>
              <p className="text-sm text-text-muted">전문 의료진과의 심층 상담을 통해 개인별 최적의 셀관리 프로그램을 설계합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">세포 채취 및 분석</h3>
              <p className="text-sm text-text-muted">최적의 조건에서 세포를 채취하고, 셀카운팅 시스템으로 정밀 분석합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">안전 보관 및 관리</h3>
              <p className="text-sm text-text-muted">GMP 수준의 시설에서 세포를 안전하게 동결 보관하며 지속적으로 품질을 관리합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">04</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">맞춤 치료 적용</h3>
              <p className="text-sm text-text-muted">보관된 세포를 활용하여 필요한 시점에 최적의 줄기세포 치료를 제공합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
