import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "첨단재생의료실시기관 | DK서울의원",
  description: "DK서울의원 첨단재생의료실시기관 지정 - 검증된 재생의료 서비스 제공",
};

const stemCellMenu = menuData.find((m) => m.href === "/stem-cell")!;

export default function AdvancedRegenerativePage() {
  return (
    <SubPageLayout
      category="줄기세포"
      categoryHref="/stem-cell"
      title="첨단재생의료실시기관"
      subtitle="Advanced Regenerative Medicine"
      description="DK서울의원은 첨단재생의료실시기관으로서, 국가가 인정한 안전하고 체계적인 재생의료 서비스를 제공합니다."
      sideMenu={stemCellMenu.subItems}
      currentPath="/stem-cell/advanced-regenerative"
    >
      {/* 지정서 이미지 영역 */}
      <SectionTitle
        title="첨단재생의료실시기관 지정"
        subtitle="DK서울의원은 보건복지부로부터 첨단재생의료실시기관으로 지정받았습니다."
      />

      <div className="w-full h-96 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-6">
        첨단재생의료실시기관 지정서 이미지 영역 (추후 지정 후 삽입)
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-16">
        첨단재생의료실시기관 지정서는 보건복지부 산하 기관의 엄격한 심사를 통과한 의료기관에만 부여됩니다. 해당 지정을 받기 위해서는 시설, 인력, 장비, 품질 관리 시스템 등 다양한 요건을 충족해야 합니다.
      </p>

      {/* 지정의 의미 */}
      <SectionTitle
        title="첨단재생의료실시기관 지정이 가지는 의미"
        subtitle="첨단재생의료실시기관 지정은 의료기관의 재생의료 역량을 국가 차원에서 검증한 것입니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="국가 공인 안전성 검증"
          description="보건복지부의 엄격한 심사를 통해 시설, 인력, 장비의 안전성과 적합성이 공식적으로 인정된 의료기관입니다."
        />
        <InfoCard
          title="체계적 품질 관리 시스템"
          description="세포 치료제의 제조부터 투여까지 전 과정에 걸친 품질 관리 시스템을 구축하고 운영하고 있음을 의미합니다."
        />
        <InfoCard
          title="전문 인력 확보"
          description="재생의료 분야의 전문 의료진과 연구 인력을 갖추고 있어, 전문적이고 안전한 치료를 제공할 수 있습니다."
        />
        <InfoCard
          title="최첨단 시설 및 장비"
          description="GMP 수준의 세포 처리 시설과 최첨단 연구 장비를 보유하여 높은 품질의 세포 치료를 수행할 수 있습니다."
        />
      </div>

      {/* 환자에게 주는 의미 */}
      <SectionTitle
        title="환자에게 주는 의미"
        subtitle="첨단재생의료실시기관 지정은 환자분들에게 다음과 같은 가치를 제공합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">검증된 안전한 치료</h3>
              <p className="text-sm text-text-muted">국가가 인정한 시설에서 엄격한 기준에 따라 시행되는 재생의료 치료를 받으실 수 있습니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">높은 치료 품질 보장</h3>
              <p className="text-sm text-text-muted">체계적인 품질 관리 시스템을 통해 일관되고 높은 수준의 치료 품질을 경험하실 수 있습니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">전문 의료진의 치료</h3>
              <p className="text-sm text-text-muted">재생의료 분야에 전문성을 갖춘 의료진이 직접 상담부터 치료까지 담당합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">04</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">첨단 치료 접근성</h3>
              <p className="text-sm text-text-muted">최신 재생의료 기술과 치료법에 빠르게 접근할 수 있어, 보다 효과적인 치료를 받으실 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* DK서울의원의 차별점 */}
      <SectionTitle
        title="DK서울의원의 재생의료 차별점"
        subtitle="DK서울의원은 첨단재생의료실시기관으로서 차별화된 가치를 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard
          title="자체 줄기세포 연구소"
          description="의원 내 자체 연구소에서 세포의 채취, 배양, 보관을 직접 수행하여 치료의 일관성과 안전성을 확보합니다."
        />
        <InfoCard
          title="GMP 수준의 시설"
          description="의약품 제조 품질 관리 기준에 준하는 시설을 갖추어 세포 치료의 안전성을 보장합니다."
        />
        <InfoCard
          title="원스톱 치료 시스템"
          description="상담, 검사, 세포 채취, 치료, 사후 관리까지 모든 과정을 원스톱으로 제공합니다."
        />
      </div>
    </SubPageLayout>
  );
}
