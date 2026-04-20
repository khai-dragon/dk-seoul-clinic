import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import { menuData } from "@/lib/menu-data";
import ProductShowcaseCard from "../_components/ProductShowcaseCard";
import VisualPanel from "../_components/VisualPanel";

export const metadata = {
  title: "콜라겐 부스터 | 스킨 리모델링 | DK서울의원",
  description:
    "쥬베룩, 스컬트라, 레디어스, 울트라콜 등 콜라겐 생성을 촉진하여 피부 탄력을 회복시키는 콜라겐 부스터 시술",
};

const skinRemodelingMenu = menuData.find(
  (m) => m.href === "/skin-remodeling"
)!;

const products = [
  {
    name: "쥬베룩",
    description:
      "PLLA 기반의 하이브리드 포뮬러로 피부 속 자가 콜라겐 생성을 점진적으로 유도하는 시술입니다. 자연스럽게 탄력과 피부결을 정돈하고 싶은 경우에 적합합니다.",
    benefits: [
      "자가 콜라겐 생성 촉진",
      "자연스러운 탄력 회복",
      "잔주름 및 피부결 개선",
      "점진적이면서 부드러운 변화",
    ],
    targets: [
      "피부 탄력이 떨어진 분",
      "자연스러운 피부 개선을 원하는 분",
      "잔주름이 고민인 분",
      "거칠어진 피부결이 신경 쓰이는 분",
    ],
    imageSrc: "/content/skin-remodeling/collagen-booster/juvelook-vial.png",
    imageAlt: "쥬베룩 제품 비주얼",
    badge: "PLLA",
    imageFit: "contain" as const,
  },
  {
    name: "스컬트라",
    description:
      "대표적인 콜라겐 부스터로 시간이 지나며 천천히 피부 속 볼륨과 탄력을 회복시키는 시술입니다. 즉각적인 과교정보다는 자연스러운 안티에이징에 강점이 있습니다.",
    benefits: [
      "점진적인 볼륨 및 탄력 개선",
      "장기 지속 효과",
      "콜라겐 신생을 통한 피부 밀도 개선",
      "얼굴 전체 인상 보정",
    ],
    targets: [
      "볼륨 감소가 고민인 분",
      "오래 지속되는 효과를 원하는 분",
      "자연스러운 안티에이징을 원하는 분",
      "전반적인 리프팅감이 필요한 분",
    ],
    imageSrc: "/content/skin-remodeling/collagen-booster/sculptra-box.jpg",
    imageAlt: "스컬트라 제품 비주얼",
    badge: "Collagen",
    imageFit: "cover" as const,
  },
  {
    name: "레디어스",
    description:
      "즉각적인 윤곽 보완과 함께 콜라겐 생성 환경을 만드는 제품으로, 탄력과 볼륨을 동시에 보고 싶을 때 활용할 수 있습니다. 보다 또렷한 라인을 원할 때 강점이 있습니다.",
    benefits: [
      "즉각적인 볼륨감과 콜라겐 유도",
      "뛰어난 생체 적합성",
      "피부 탄력 및 리프팅 효과",
      "윤곽 라인 정돈",
    ],
    targets: [
      "즉각적인 변화를 원하는 분",
      "콜라겐 개선도 함께 원하는 분",
      "턱선과 팔자 부위가 고민인 분",
      "입체적인 인상을 원하는 분",
    ],
    imageSrc: "/content/skin-remodeling/collagen-booster/radiesse-boxes.jpg",
    imageAlt: "레디어스 제품 비주얼",
    badge: "CaHA",
    imageFit: "cover" as const,
  },
  {
    name: "울트라콜",
    description:
      "콜라겐 보충과 피부결 개선을 함께 고려하는 시술로, 얇고 힘없는 피부 표현을 보다 단단하게 정돈하는 데 도움을 줍니다. 빠른 컨디션 변화가 필요한 경우에도 고려할 수 있습니다.",
    benefits: [
      "콜라겐 밀도 강화",
      "빠른 피부 탄력 개선",
      "자연스러운 피부 질감 향상",
      "잔잔한 볼륨감 보완",
    ],
    targets: [
      "빠른 탄력 개선을 원하는 분",
      "피부가 얇고 힘없어 보이는 분",
      "피부 질감이 거칠어진 분",
      "탄탄한 피부를 원하는 분",
    ],
    imageSrc: "/content/skin-remodeling/collagen-booster/ultracol-vials.jpg",
    imageAlt: "울트라콜 제품 비주얼",
    badge: "Density",
    imageFit: "cover" as const,
  },
];

const phases = [
  {
    title: "현재 볼륨 진단",
    description:
      "꺼짐이 중심인지, 탄력 저하가 중심인지 먼저 구분해 무리한 교정을 피합니다.",
  },
  {
    title: "콜라겐 유도 설계",
    description:
      "점진적 변화를 기본으로 두고 피부 타입과 부위별 특성에 맞춰 제품을 선택합니다.",
  },
  {
    title: "인상 정돈",
    description:
      "얼굴이 갑자기 달라 보이기보다 시간이 지날수록 편안하게 정리되는 방향을 우선합니다.",
  },
];

export default function CollagenBoosterPage() {
  return (
    <SubPageLayout
      category="스킨 리모델링"
      categoryHref="/skin-remodeling"
      title="콜라겐 부스터"
      subtitle="Collagen Booster"
      description="콜라겐 생성을 촉진하여 피부 탄력을 근본적으로 회복시키는 시술"
      sideMenu={skinRemodelingMenu.subItems}
      currentPath="/skin-remodeling/collagen-booster"
    >
      <section className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionTitle
            title="콜라겐 부스터란?"
            subtitle="콜라겐 부스터는 피부 안에서 스스로 콜라겐을 만들어내는 환경을 유도해 탄력과 밀도를 회복하는 시술입니다. 즉각적인 변화만을 노리기보다 시간이 지날수록 더 자연스럽게 정돈되는 안티에이징에 가깝습니다."
          />

          <div className="rounded-[28px] border border-border-color/60 bg-section-bg/80 p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              DK서울의원 콜라겐 설계 포인트
            </h3>
            <div className="space-y-4">
              {phases.map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-2xl border border-border-color/50 bg-white/70 p-5"
                >
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    {phase.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-text-muted">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Firmness", "Density", "Contour", "Gradual Lift"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/20 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <VisualPanel
            src="/content/skin-remodeling/shared/collagen-injection.jpg"
            alt="콜라겐 부스터 시술 비주얼"
            className="min-h-[280px]"
            caption="피부 탄력 저하와 볼륨 감소를 동시에 고려해 콜라겐 재생을 설계합니다."
            eyebrow="Collagen Remodeling"
            priority
          />
          <VisualPanel
            src="/content/skin-remodeling/shared/soft-wave.jpg"
            alt="콜라겐 부스터 무드 비주얼"
            className="min-h-[220px]"
            caption="점진적이고 자연스러운 변화가 콜라겐 부스터의 핵심입니다."
            eyebrow="Natural Aging Care"
          />
        </div>
      </section>

      <section>
        <SectionTitle
          title="DK서울의원 콜라겐 부스터 라인업"
          subtitle="점진적 탄력 개선부터 윤곽 보완까지, 피부 목표에 맞춰 적절한 결을 선택합니다."
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
