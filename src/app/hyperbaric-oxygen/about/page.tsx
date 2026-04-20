import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import ContentImageFrame from "@/components/ContentImageFrame";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "고압산소케어란 | DK서울의원",
  description: "고압산소치료의 정의, 목적, 치료 원리를 알아보세요. DK서울의원 고압산소케어 안내.",
};

const oxygenMenu = menuData.find((m) => m.href === "/hyperbaric-oxygen")!;

export default function HyperbaricOxygenAboutPage() {
  return (
    <SubPageLayout
      category="고압산소케어"
      categoryHref="/hyperbaric-oxygen"
      title="고압산소케어란"
      subtitle="What is Hyperbaric Oxygen Care"
      description="고압산소치료의 정의와 원리, 그리고 컨디션 관리 관점에서의 활용 방향을 소개합니다."
      sideMenu={oxygenMenu.subItems}
      currentPath="/hyperbaric-oxygen/about"
    >
      {/* 고압산소치료의 정의 */}
      <SectionTitle
        title="고압산소치료란?"
        subtitle="일반 대기압보다 높은 압력 환경에서 고농도 산소를 호흡하여, 혈액과 체내 조직에 산소를 충분히 공급하는 치료법입니다."
      />

      <ContentImageFrame
        src="/content/hyperbaric-oxygen/about/concept.jpg"
        alt="고압산소치료 개념 비주얼"
        className="w-full h-72 mb-16"
        overlay
      />

      {/* 치료 목적 */}
      <SectionTitle
        title="고압산소치료의 목적"
        subtitle="체내 산소 농도를 높여 회복 환경을 돕고, 컨디션 관리 관점에서 어떤 방식으로 활용되는지 살펴봅니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="조직 회복 촉진"
          description="고농도 산소 공급은 회복이 필요한 조직 환경을 설명할 때 자주 언급되는 접근입니다."
        />
        <InfoCard
          title="염증 및 회복 관리"
          description="염증 반응과 회복 리듬을 함께 살펴보는 보조적 관리 관점에서 검토될 수 있습니다."
        />
        <InfoCard
          title="혈액 순환 개선"
          description="산소 용해도 증가를 통해 산소 전달 환경을 보다 원활하게 이해하는 데 도움을 줍니다."
        />
        <InfoCard
          title="피로 회복"
          description="과로와 컨디션 저하가 있을 때 회복 관리 선택지 중 하나로 상담될 수 있습니다."
        />
        <InfoCard
          title="집중 리듬 관리"
          description="집중력 저하나 멍한 느낌이 있을 때 회복 리듬 관점에서 보조적으로 검토될 수 있습니다."
        />
        <InfoCard
          title="항산화 관리"
          description="산화 스트레스 관리와 전반적인 컨디션 케어 관점에서 설명될 수 있는 접근입니다."
        />
      </div>

      {/* 치료 원리 */}
      <SectionTitle
        title="고압산소치료의 원리"
        subtitle="대기압보다 높은 압력 환경에서 산소를 호흡하면, 혈장에 녹는 산소량이 크게 증가하여 평소 산소가 도달하기 어려운 조직까지 산소가 공급됩니다."
      />

      <ContentImageFrame
        src="/content/hyperbaric-oxygen/about/principle.webp"
        alt="고압산소치료 원리 도식"
        className="w-full h-72 mb-10"
        fit="contain"
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-8">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">고압 환경 조성</h3>
              <p className="text-sm text-text-muted">밀폐된 챔버 내부를 1.3~3기압으로 가압하여 일반 대기압보다 높은 환경을 만듭니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">고농도 산소 호흡</h3>
              <p className="text-sm text-text-muted">고압 환경에서 고농도(최대 100%) 산소를 호흡하여 혈장 내 용존 산소량을 극대화합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">산소 전달 극대화</h3>
              <p className="text-sm text-text-muted">용존 산소가 혈액을 통해 온몸의 세포와 조직, 특히 손상되거나 산소 부족 상태인 부위에 효과적으로 전달됩니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">04</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">세포 회복 및 재생</h3>
              <p className="text-sm text-text-muted">충분한 산소 공급으로 세포의 에너지 대사가 활성화되고, 손상 조직의 회복과 재생이 촉진됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
