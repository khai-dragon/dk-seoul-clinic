import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import { menuData } from "@/lib/menu-data";
import ProductShowcaseCard from "../_components/ProductShowcaseCard";
import VisualPanel from "../_components/VisualPanel";

export const metadata = {
  title: "ECM 부스터 | 스킨 리모델링 | DK서울의원",
  description:
    "엘라비에 리투오, 셀르디엠, 쥬브아셀 등 세포외기질(ECM)을 활성화하여 피부 재생을 돕는 ECM 부스터 시술",
};

const skinRemodelingMenu = menuData.find(
  (m) => m.href === "/skin-remodeling"
)!;

const products = [
  {
    name: "엘라비에 리투오",
    description:
      "피부 구조의 기반이 되는 ECM 환경을 정돈하는 데 초점을 둔 부스터입니다. 탄력 저하와 피부 밀도 약화가 함께 나타나는 경우에 바탕부터 단단하게 잡아주는 느낌으로 접근합니다.",
    benefits: [
      "ECM 환경 최적화로 피부 기반 강화",
      "콜라겐 및 엘라스틴 생성 환경 조성",
      "깊은 주름 및 탄력 개선",
      "장기적인 피부 구조 개선",
    ],
    targets: [
      "피부 탄력이 현저히 저하된 분",
      "깊은 주름이 고민인 분",
      "근본적 피부 재생을 원하는 분",
      "기존 시술 효과를 높이고 싶은 분",
    ],
    imageSrc: "/content/skin-remodeling/ecm-booster/elravie-re2o-box.png",
    imageAlt: "엘라비에 리투오 제품 비주얼",
    badge: "ECM",
    imageFit: "contain" as const,
  },
  {
    name: "셀르디엠",
    description:
      "손상된 세포외기질의 회복과 피부 환경 개선을 함께 고려하는 프로그램입니다. 쉽게 무너지는 피부 컨디션과 늘어진 느낌을 보다 구조적으로 정리하고 싶을 때 활용할 수 있습니다.",
    benefits: [
      "ECM 회복 기반 마련",
      "세포 활성도 증가",
      "피부 자연 재생력 강화",
      "노화 징후 완화",
    ],
    targets: [
      "피부 재생력이 저하된 분",
      "피부 노화가 빠르게 진행 중인 분",
      "세포 활력을 되찾고 싶은 분",
      "종합적 피부 개선을 원하는 분",
    ],
    imageSrc: "/content/skin-remodeling/ecm-booster/cellrdm-box.jpg",
    imageAlt: "셀르디엠 제품 비주얼",
    badge: "Rebuild",
    imageFit: "cover" as const,
  },
  {
    name: "쥬브아셀",
    description:
      "수분감과 구조적 탄탄함을 동시에 고려하는 ECM 부스터로, 건조함과 탄력 저하가 함께 오는 피부에 균형 잡힌 변화를 기대할 수 있습니다. 촉촉하면서도 무너지지 않는 피부 표현을 목표로 합니다.",
    benefits: [
      "수분 보유력과 ECM 강화 동시 효과",
      "촉촉하면서 탄탄한 피부 표현",
      "자연스러운 볼륨감 보완",
      "지속적인 피부 컨디션 향상",
    ],
    targets: [
      "건조함과 탄력 저하가 동시에 고민인 분",
      "피부에 볼륨감을 주고 싶은 분",
      "촉촉하고 탄탄한 피부를 원하는 분",
      "복합적 피부 고민을 정돈하고 싶은 분",
    ],
    imageSrc: "/content/skin-remodeling/ecm-booster/juveacell-set.jpg",
    imageAlt: "쥬브아셀 제품 비주얼",
    badge: "Balance",
    imageFit: "cover" as const,
  },
];

const insights = [
  {
    title: "기초 구조 강화",
    description:
      "피부세포가 머무는 환경을 정돈해 재생과 탄력 개선이 일어나기 쉬운 바탕을 만듭니다.",
  },
  {
    title: "복합 고민 동시 접근",
    description:
      "건조함, 얇아진 피부, 탄력 저하처럼 여러 고민이 겹친 피부에 유연하게 대응합니다.",
  },
  {
    title: "다른 시술과의 시너지",
    description:
      "스킨 부스터나 콜라겐 부스터와 함께 설계할 때 피부 완성도를 더 섬세하게 높일 수 있습니다.",
  },
];

export default function EcmBoosterPage() {
  return (
    <SubPageLayout
      category="스킨 리모델링"
      categoryHref="/skin-remodeling"
      title="ECM 부스터"
      subtitle="ECM Booster"
      description="세포외기질(ECM) 활성화로 피부 재생의 근본적 토대를 강화하는 시술"
      sideMenu={skinRemodelingMenu.subItems}
      currentPath="/skin-remodeling/ecm-booster"
    >
      <section className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionTitle
            title="ECM 부스터란?"
            subtitle="ECM(세포외기질) 부스터는 피부 세포를 둘러싼 구조적 환경을 건강하게 정돈해 재생의 토대를 만드는 시술입니다. 콜라겐과 엘라스틴이 잘 자리 잡을 수 있는 기반을 다듬는 개념으로 이해하면 좋습니다."
          />

          <div className="rounded-[28px] border border-border-color/60 bg-section-bg/80 p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              ECM 부스터를 고려하는 이유
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {insights.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-2xl border border-border-color/50 bg-white/70 p-4"
                >
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    {insight.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-text-muted">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Foundation", "Elasticity", "Synergy", "Recovery"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/20 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-accent"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <VisualPanel
            src="/content/skin-remodeling/shared/soft-wave.jpg"
            alt="ECM 부스터 메인 비주얼"
            className="min-h-[280px]"
            caption="피부의 겉보다 먼저, 구조가 안정적으로 자리 잡는 환경을 설계합니다."
            eyebrow="Matrix Care"
            priority
          />
          <VisualPanel
            src="/content/skin-remodeling/ecm-booster/juveacell-set.jpg"
            alt="ECM 부스터 제품 비주얼"
            className="min-h-[220px]"
            caption="수분과 구조적 안정감을 함께 보고 싶은 피부에 적합한 접근입니다."
            eyebrow="Texture + Support"
          />
          <VisualPanel
            src="/content/skin-remodeling/ecm-booster/elravie-re2o-syringe.png"
            alt="엘라비에 리투오 시린지 비주얼"
            className="min-h-[200px]"
            fit="contain"
            caption="제품별 제형과 적용 방향도 상담 시 함께 비교해 볼 수 있습니다."
            eyebrow="Precision Formula"
          />
        </div>
      </section>

      <section>
        <SectionTitle
          title="DK서울의원 ECM 부스터 라인업"
          subtitle="피부 구조의 바탕부터 다루는 방향으로, 목적이 다른 세 가지 ECM 프로그램을 구성했습니다."
        />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {products.map((product) => (
            <ProductShowcaseCard
              key={product.name}
              name={product.name}
              description={product.description}
              benefits={product.benefits}
              targets={product.targets}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              badge={product.badge}
              imageFit={product.imageFit}
            />
          ))}
        </div>
      </section>
    </SubPageLayout>
  );
}
