import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import { menuData } from "@/lib/menu-data";
import ProductShowcaseCard from "../_components/ProductShowcaseCard";
import VisualPanel from "../_components/VisualPanel";

export const metadata = {
  title: "필러 | 스킨 리모델링 | DK서울의원",
  description:
    "레스틸렌, 벨로테로, 쥬비덤 등 정품 필러를 사용한 볼륨 및 윤곽 시술. DK by MDcode 시그니처 프로그램 운영",
};

const skinRemodelingMenu = menuData.find(
  (m) => m.href === "/skin-remodeling"
)!;

const principles = [
  {
    title: "정품 사용",
    description: "공식 유통 경로를 통해 인증된 정품만 사용합니다.",
  },
  {
    title: "정량 사용",
    description:
      "약속된 용량을 정확하게 사용하고, 과교정보다 균형 잡힌 결과를 우선합니다.",
  },
  {
    title: "퍼스널 진단",
    description:
      "얼굴 구조와 피부 두께, 원하는 분위기까지 고려해 맞춤 디자인을 설계합니다.",
  },
  {
    title: "전문의 직접 시술",
    description:
      "상담부터 시술, 사후 계획까지 한 흐름 안에서 세밀하게 진행합니다.",
  },
];

const products = [
  {
    name: "레스틸렌",
    description:
      "다양한 점성과 라인업을 갖춘 히알루론산 필러로, 부위 특성에 맞춘 세밀한 선택이 가능한 제품입니다. 자연스러운 윤곽 보정과 부드러운 볼륨 표현에 활용합니다.",
    benefits: [
      "세계적으로 검증된 안전성",
      "자연스럽고 부드러운 볼륨감",
      "다양한 라인업으로 맞춤 시술 가능",
      "안정적인 지속력",
    ],
    targets: [
      "자연스러운 볼륨 개선을 원하는 분",
      "팔자주름, 입가 주름이 고민인 분",
      "코, 턱 등 윤곽 개선을 원하는 분",
      "검증된 제품을 선호하는 분",
    ],
    imageSrc: "/content/skin-remodeling/filler/restylane-lineup.png",
    imageAlt: "레스틸렌 제품 비주얼",
    badge: "HA Filler",
    imageFit: "contain" as const,
  },
  {
    name: "벨로테로",
    description:
      "조직과의 부드러운 융합감이 강점인 프리미엄 필러입니다. 얇은 피부 부위나 섬세한 라인 교정처럼 정교한 결과가 필요한 부위에서 자연스러운 인상을 기대할 수 있습니다.",
    benefits: [
      "피부 조직과의 뛰어난 융합도",
      "자연스러운 시술 결과",
      "섬세한 부위 시술에 적합",
      "부드럽고 매끄러운 질감",
    ],
    targets: [
      "자연스러움을 최우선으로 원하는 분",
      "눈가, 입술 등 섬세한 시술이 필요한 분",
      "이물감이 걱정되는 분",
      "얇은 피부 부위 시술이 필요한 분",
    ],
    imageSrc: "/content/skin-remodeling/filler/belotero-lineup.png",
    imageAlt: "벨로테로 제품 비주얼",
    badge: "Soft Contour",
    imageFit: "contain" as const,
  },
  {
    name: "쥬비덤",
    description:
      "볼륨감과 유지력, 디자인 자유도가 조화로운 프리미엄 필러입니다. 얼굴의 입체감을 보다 또렷하게 정리하고 싶을 때 폭넓게 활용할 수 있습니다.",
    benefits: [
      "부드러움과 볼륨감의 조화",
      "오래 지속되는 효과",
      "다양한 시술 부위에 활용 가능",
      "입체적인 얼굴 윤곽 설계",
    ],
    targets: [
      "오래 지속되는 효과를 원하는 분",
      "볼, 턱, 코 등 볼륨 시술이 필요한 분",
      "입체적인 얼굴 윤곽을 원하는 분",
      "프리미엄 필러를 선호하는 분",
    ],
    imageSrc: "/content/skin-remodeling/filler/juvederm-clean.jpg",
    imageAlt: "쥬비덤 제품 비주얼",
    badge: "Premium",
    imageFit: "cover" as const,
  },
];

export default function FillerPage() {
  return (
    <SubPageLayout
      category="스킨 리모델링"
      categoryHref="/skin-remodeling"
      title="필러"
      subtitle="Filler"
      description="정품, 정량 사용 원칙으로 안전하고 자연스러운 필러 시술"
      sideMenu={skinRemodelingMenu.subItems}
      currentPath="/skin-remodeling/filler"
    >
      <section className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionTitle
            title="필러란?"
            subtitle="필러는 볼륨이 줄어든 부위와 윤곽이 필요한 부위를 자연스럽게 정돈하는 시술입니다. 단순히 채우는 것이 아니라, 얼굴 전체의 비율과 표정이 편안하게 보이도록 설계하는 것이 중요합니다."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-border-color/60 bg-section-bg/80 p-5"
              >
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-text-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <VisualPanel
            src="/content/skin-remodeling/filler/juvederm-signature.jpg"
            alt="쥬비덤 시그니처 비주얼"
            className="min-h-[280px]"
            caption="볼륨을 과하게 드러내기보다, 인상이 또렷해지는 방향으로 디자인합니다."
            eyebrow="Contour Design"
            priority
          />
          <VisualPanel
            src="/content/skin-remodeling/filler/restylane-lineup.png"
            alt="필러 라인업 비주얼"
            className="min-h-[220px]"
            caption="부위와 조직 특성에 맞는 라인업 선택이 결과의 자연스러움을 좌우합니다."
            eyebrow="Product Range"
            fit="contain"
          />
        </div>
      </section>

      <section className="mb-16 rounded-[32px] border border-accent/30 bg-gradient-to-br from-[#faf7f0] to-white p-8 sm:p-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Signature Program
            </span>
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
              DK by MDcode
            </h3>
            <p className="mb-5 text-[14px] leading-relaxed text-text-muted">
              DK서울의원만의 시그니처 필러 프로그램입니다. 쥬비덤을 기반으로
              얼굴의 중심축과 라인, 표정의 흐름을 함께 읽어 과하지 않지만
              확실히 정돈된 인상을 완성하는 방향으로 설계합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "퍼스널 얼굴 분석",
                "맞춤 시술 디자인",
                "쥬비덤 정품 사용",
                "정량 사용 원칙",
                "전문의 직접 시술",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/20 bg-white px-3 py-1.5 text-[12px] font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <VisualPanel
            src="/content/skin-remodeling/filler/juvederm-signature.jpg"
            alt="DK by MDcode 비주얼"
            className="min-h-[320px]"
            caption="프리미엄 라인과 정밀 디자인을 결합한 DK서울의원 시그니처 접근입니다."
            eyebrow="DK Signature"
          />
        </div>
      </section>

      <section>
        <SectionTitle
          title="DK서울의원 필러 라인업"
          subtitle="검증된 정품 필러를 바탕으로, 부위 특성과 원하는 분위기에 맞는 선택을 제안합니다."
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
              isSignature={product.name === "쥬비덤"}
            />
          ))}
        </div>
      </section>
    </SubPageLayout>
  );
}
