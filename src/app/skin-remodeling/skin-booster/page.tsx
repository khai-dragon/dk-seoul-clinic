import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import { menuData } from "@/lib/menu-data";
import ProductShowcaseCard from "../_components/ProductShowcaseCard";
import VisualPanel from "../_components/VisualPanel";

export const metadata = {
  title: "스킨 부스터 | 스킨 리모델링 | DK서울의원",
  description:
    "리쥬란힐러, 엑소좀, 필로가135, 릴리이드, 물광주사 등 피부 깊숙이 수분과 영양을 공급하는 스킨 부스터 시술",
};

const skinRemodelingMenu = menuData.find(
  (m) => m.href === "/skin-remodeling"
)!;

const products = [
  {
    name: "리쥬란힐러",
    description:
      "연어 유래 폴리뉴클레오타이드(PN) 성분으로 피부 자체의 재생력을 높여주는 스킨 부스터입니다. 푸석한 피부결과 잔주름, 예민해진 피부 컨디션을 차분하게 정돈하는 데 도움을 줍니다.",
    benefits: [
      "피부 자체 재생력 강화",
      "잔주름 및 모공 개선",
      "피부 탄력 및 윤기 향상",
      "민감해진 피부 밸런스 회복",
    ],
    targets: [
      "거칠고 힘없는 피부",
      "잔주름이 신경 쓰이는 분",
      "회복감 있는 피부를 원하는 분",
      "피부 장벽이 예민해진 분",
    ],
    imageSrc: "/content/skin-remodeling/skin-booster/rejuran-lineup.jpg",
    imageAlt: "리쥬란힐러 제품 비주얼",
    badge: "PN",
    imageFit: "cover" as const,
  },
  {
    name: "엑소좀",
    description:
      "줄기세포 유래 신호 전달 성분을 활용해 피부 컨디션을 보다 정교하게 관리하는 스킨 부스터입니다. 진정, 재생, 피부 밀도 개선을 동시에 고려할 수 있는 프로그램으로 설계합니다.",
    benefits: [
      "세포 단위의 컨디션 케어",
      "강력한 진정 및 회복 서포트",
      "피부 장벽 강화",
      "콜라겐 및 엘라스틴 합성 환경 개선",
    ],
    targets: [
      "민감하고 지친 피부",
      "시술 후 빠른 회복을 원하는 분",
      "근본적인 피부 컨디션 개선을 원하는 분",
      "피부 밀도가 떨어졌다고 느끼는 분",
    ],
    imageSrc: "/content/skin-remodeling/skin-booster/exosome-asce-vials.jpg",
    imageAlt: "엑소좀 제품 비주얼",
    badge: "Exosome",
    imageFit: "contain" as const,
  },
  {
    name: "필로가135",
    description:
      "히알루론산과 다양한 영양 성분을 함께 공급하는 프리미엄 부스터입니다. 칙칙한 피부 톤과 건조함을 다루면서 결, 윤기, 수분감을 전체적으로 정돈하고 싶을 때 적합합니다.",
    benefits: [
      "복합 영양 성분 공급",
      "즉각적인 수분 충전 효과",
      "피부 광채 및 투명감 향상",
      "잔주름 완화 및 피부결 보정",
    ],
    targets: [
      "영양 부족한 피부",
      "칙칙하고 생기 없는 피부",
      "건조함이 심한 분",
      "광채 나는 피부 표현을 원하는 분",
    ],
    imageSrc: "/content/skin-remodeling/skin-booster/filorga-nctf-135ha.png",
    imageAlt: "필로가 135 제품 비주얼",
    badge: "NCTF",
    imageFit: "contain" as const,
  },
  {
    name: "릴리이드",
    description:
      "히알루론산 기반의 수분 부스터로 건조한 피부에 촉촉한 결감을 더하고 매끈한 인상을 만드는 데 도움을 줍니다. 피부 속 수분 저장고를 채우는 느낌의 관리가 필요한 경우에 제안합니다.",
    benefits: [
      "깊이감 있는 수분 충전",
      "피부결 개선 및 매끈한 피부 표현",
      "자연스러운 볼륨감 보완",
      "지속력 있는 보습감",
    ],
    targets: [
      "극심한 건조 피부",
      "수분감이 부족한 분",
      "피부결을 매끈하게 하고 싶은 분",
      "푸석한 화장이 고민인 분",
    ],
    imageSrc: "/content/skin-remodeling/skin-booster/lilied-vial.png",
    imageAlt: "릴리이드 제품 비주얼",
    badge: "HA",
    imageFit: "contain" as const,
  },
  {
    name: "물광주사",
    description:
      "피부 전반에 균일하게 수분과 광채를 더하는 대표적인 스킨 부스터 시술입니다. 중요한 일정 전 컨디션을 정돈하거나, 즉각적인 촉촉함과 윤기를 원하는 경우 유용합니다.",
    benefits: [
      "균일한 수분 공급으로 광채 피부 연출",
      "모공 및 피부결 정돈",
      "즉각적인 피부 윤기 개선",
      "메이크업 밀착감 향상",
    ],
    targets: [
      "촉촉한 물광 피부를 원하는 분",
      "건조하고 푸석한 피부",
      "모공이 넓어 고민인 분",
      "이벤트 전 컨디션 개선이 필요한 분",
    ],
    imageSrc: "/content/skin-remodeling/shared/injection-closeup.jpg",
    imageAlt: "물광주사 시술 비주얼",
    badge: "Procedure",
    imageFit: "cover" as const,
  },
];

const highlights = [
  {
    title: "수분과 영양 보충",
    description:
      "표면 관리가 아닌 진피층 중심의 접근으로 피부 속 컨디션을 끌어올립니다.",
  },
  {
    title: "회복과 진정",
    description:
      "예민해진 피부의 밸런스를 정돈하고 편안한 피부 표현을 돕습니다.",
  },
  {
    title: "광채와 탄력",
    description:
      "푸석함을 줄이고 건강한 윤기와 밀도를 되찾는 방향으로 설계합니다.",
  },
  {
    title: "맞춤형 조합",
    description:
      "피부 상태와 생활 패턴, 원하는 결과에 따라 제품과 주기를 섬세하게 조절합니다.",
  },
];

export default function SkinBoosterPage() {
  return (
    <SubPageLayout
      category="스킨 리모델링"
      categoryHref="/skin-remodeling"
      title="스킨 부스터"
      subtitle="Skin Booster"
      description="피부 속부터 채우는 수분과 영양, 건강한 피부의 시작"
      sideMenu={skinRemodelingMenu.subItems}
      currentPath="/skin-remodeling/skin-booster"
    >
      <section className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionTitle
            title="스킨 부스터란?"
            subtitle="스킨 부스터는 피부 진피층에 수분, 영양, 재생 성분을 직접 전달해 피부 컨디션을 정돈하는 시술입니다. 표면을 덮는 관리보다 한 단계 깊게 접근해 피부결, 수분감, 광채, 회복감을 함께 설계합니다."
          />

          <div className="rounded-[28px] border border-border-color/60 bg-section-bg/80 p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              DK서울의원 스킨 부스터 접근
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border-color/50 bg-white/70 p-4"
                >
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Hydration", "Glow", "Recovery", "Texture", "Balance"].map(
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
            src="/content/skin-remodeling/shared/stem-cell-science.jpg"
            alt="스킨 부스터 피부 재생 비주얼"
            className="min-h-[280px]"
            caption="피부 컨디션에 맞는 성분을 선택해 촉촉함과 회복감을 함께 설계합니다."
            eyebrow="Skin Science"
            priority
          />
          <VisualPanel
            src="/content/skin-remodeling/shared/injection-closeup.jpg"
            alt="스킨 부스터 시술 비주얼"
            className="min-h-[220px]"
            caption="정교한 깊이와 용량 설정이 자연스러운 결과를 만듭니다."
            eyebrow="Precise Delivery"
          />
        </div>
      </section>

      <section>
        <SectionTitle
          title="DK서울의원 스킨 부스터 라인업"
          subtitle="피부 상태와 목표에 따라 수분, 진정, 회복, 광채 중심의 제품을 나누어 제안합니다."
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
