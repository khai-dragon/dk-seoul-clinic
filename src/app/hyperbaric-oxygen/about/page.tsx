import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
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
      description="고압산소치료의 정의와 원리, 그리고 우리 몸에 미치는 효과를 알아봅니다."
      sideMenu={oxygenMenu.subItems}
      currentPath="/hyperbaric-oxygen/about"
    >
      {/* 고압산소치료의 정의 */}
      <SectionTitle
        title="고압산소치료란?"
        subtitle="일반 대기압보다 높은 압력 환경에서 고농도 산소를 호흡하여, 혈액과 체내 조직에 산소를 충분히 공급하는 치료법입니다."
      />

      <div className="w-full h-72 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        고압산소치료 개념 이미지 영역
      </div>

      {/* 치료 목적 */}
      <SectionTitle
        title="고압산소치료의 목적"
        subtitle="체내 산소 농도를 높여 손상된 조직의 회복을 촉진하고, 다양한 건강 문제를 개선하는 것을 목표로 합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="조직 회복 촉진"
          description="고농도 산소가 손상된 조직에 직접 전달되어 세포 재생과 회복 속도를 높여줍니다."
        />
        <InfoCard
          title="항염 및 면역력 강화"
          description="체내 염증 반응을 억제하고 면역 세포의 활성도를 높여 면역력을 강화합니다."
        />
        <InfoCard
          title="혈액 순환 개선"
          description="산소 용해도를 증가시켜 모세혈관까지 산소가 원활하게 공급되도록 돕습니다."
        />
        <InfoCard
          title="피로 회복"
          description="세포 에너지 생산을 촉진하여 만성피로와 컨디션 저하를 개선합니다."
        />
        <InfoCard
          title="뇌기능 활성화"
          description="뇌에 충분한 산소를 공급하여 집중력, 기억력 등 인지 기능 향상에 도움을 줍니다."
        />
        <InfoCard
          title="노화 방지"
          description="세포 수준에서 산화 스트레스를 줄이고 텔로미어 길이 유지에 기여하여 항노화 효과를 기대할 수 있습니다."
        />
      </div>

      {/* 치료 원리 */}
      <SectionTitle
        title="고압산소치료의 원리"
        subtitle="대기압보다 높은 압력 환경에서 산소를 호흡하면, 혈장에 녹는 산소량이 크게 증가하여 평소 산소가 도달하기 어려운 조직까지 산소가 공급됩니다."
      />

      <div className="w-full h-72 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-10">
        고압산소치료 원리 도식 이미지 영역
      </div>

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
