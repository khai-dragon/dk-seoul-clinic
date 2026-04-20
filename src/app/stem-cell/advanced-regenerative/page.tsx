import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "첨단재생의료실시기관 | DK서울의원",
  description: "DK서울의원 재생의료 운영 기준과 연구 인프라 안내",
};

const stemCellMenu = menuData.find((m) => m.href === "/stem-cell")!;

export default function AdvancedRegenerativePage() {
  return (
    <SubPageLayout
      category="줄기세포"
      categoryHref="/stem-cell"
      title="첨단재생의료실시기관"
      subtitle="Advanced Regenerative Medicine"
      description="재생의료 시스템, 시설 기준, 준비 현황을 중심으로 DK서울의원의 첨단재생의료 운영 방향을 안내합니다."
      sideMenu={stemCellMenu.subItems}
      currentPath="/stem-cell/advanced-regenerative"
    >
      {/* 재생의료 운영 인프라 소개 */}
      <SectionTitle
        title="재생의료 운영 기준 안내"
        subtitle="현재는 연구 인프라와 운영 방향을 중심으로 안내하며, 공식 지정 또는 인증 자료는 확인 후 별도 고지될 수 있습니다."
      />

      <div className="relative w-full h-96 bg-section-bg rounded-2xl overflow-hidden mb-6 border border-border-color">
        <Image
          src="/content/stem-cell/research-lab/banking-room.png"
          alt="재생의료 시스템 준비 비주얼"
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 text-white">
          <p className="text-[11px] tracking-[0.16em] uppercase text-accent-light/90 mb-3">Document Update Ready</p>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">재생의료 운영 인프라 소개</h3>
          <p className="text-sm text-white/75 max-w-2xl leading-relaxed">
            현재는 연구 환경과 운영 기준을 중심으로 먼저 안내하고 있으며, 공식 문서가 확인되는 경우 별도 안내 섹션으로 확장할 수 있도록 구성했습니다.
          </p>
        </div>
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-16">
        재생의료 관련 운영은 시설, 인력, 장비, 운영 체계 등 다양한 요건을 바탕으로 검토되는 영역입니다.
        본 페이지는 그 기준에 맞춰 준비된 연구 환경과 재생의료 운영 방향을 중심으로 먼저 안내하고 있습니다.
      </p>

      {/* 운영 기준의 의미 */}
      <SectionTitle
        title="재생의료 운영 기준이 중요한 이유"
        subtitle="재생의료는 시설, 인력, 장비, 품질 관리 체계가 함께 갖춰져야 보다 신뢰도 높은 진료 환경으로 이어질 수 있습니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="안전성 검토 기준"
          description="시설, 인력, 장비의 적합성은 재생의료 진료 환경을 평가할 때 핵심적으로 확인되는 요소입니다."
        />
        <InfoCard
          title="체계적 품질 관리 시스템"
          description="세포 준비부터 보관, 적용까지 전 과정의 품질 관리 체계는 재생의료 운영의 기본이 됩니다."
        />
        <InfoCard
          title="전문 인력 확보"
          description="재생의료 분야에서는 전문 의료진과 연구 인력의 협업 구조가 진료 완성도에 큰 영향을 줍니다."
        />
        <InfoCard
          title="최첨단 시설 및 장비"
          description="세포 처리 시설과 연구 장비 수준은 재생의료 관련 진료와 연구 흐름을 안정적으로 뒷받침합니다."
        />
      </div>

      {/* 환자 관점의 확인 포인트 */}
      <SectionTitle
        title="환자 상담 시 확인할 포인트"
        subtitle="재생의료 관련 상담에서는 아래 요소를 함께 확인하면 현재 시스템을 보다 입체적으로 이해하는 데 도움이 됩니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">운영 기준의 투명성</h3>
              <p className="text-sm text-text-muted">시설과 장비, 운영 체계가 어떤 기준으로 구성되어 있는지 확인하는 것이 중요합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">품질 관리 체계</h3>
              <p className="text-sm text-text-muted">세포 준비와 보관, 적용 과정이 어떤 방식으로 관리되는지 상담 시 확인할 수 있습니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">의료진과 연구 인력의 협업</h3>
              <p className="text-sm text-text-muted">의료진 상담과 연구 인프라가 어떻게 연결되는지 확인하면 진료 흐름을 이해하기 쉽습니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">04</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">연구 기반 진료 방향</h3>
              <p className="text-sm text-text-muted">현재 연구 인프라와 진료 방향이 어떤 방식으로 연결되는지 살펴보는 것이 좋습니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* DK서울의원의 차별점 */}
      <SectionTitle
        title="DK서울의원의 재생의료 차별점"
        subtitle="DK서울의원은 재생의료 관련 연구 인프라와 진료 시스템을 바탕으로 차별화된 방향성을 구축하고 있습니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard
          title="자체 줄기세포 연구소"
          description="의원 내 연구소를 통해 세포 채취, 배양, 보관 과정을 보다 일관된 흐름으로 관리합니다."
        />
        <InfoCard
          title="GMP 수준의 시설"
          description="품질 관리 기준을 고려한 시설 환경을 바탕으로 세포 관련 진료와 연구를 뒷받침합니다."
        />
        <InfoCard
          title="원스톱 치료 시스템"
          description="상담, 검사, 세포 채취, 치료, 사후 관리까지 한 흐름으로 연결되는 시스템을 지향합니다."
        />
      </div>
    </SubPageLayout>
  );
}
