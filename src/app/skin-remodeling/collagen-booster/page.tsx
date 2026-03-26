import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { menuData } from "@/lib/menu-data";

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
      "폴리디옥사논(PDO) 성분을 미세입자 형태로 주입하여 자가 콜라겐 생성을 촉진하는 시술입니다. 녹는 실의 원료와 동일한 성분으로 안전성이 검증되었으며, 피부 속에서 서서히 콜라겐을 만들어 자연스러운 탄력 개선 효과를 제공합니다.",
    benefits: [
      "자가 콜라겐 생성 촉진",
      "자연스러운 탄력 회복",
      "잔주름 및 피부결 개선",
      "안전성이 검증된 PDO 성분",
    ],
    targets: [
      "피부 탄력이 떨어진 분",
      "자연스러운 피부 개선을 원하는 분",
      "잔주름이 고민인 분",
      "꺼진 볼륨을 채우고 싶은 분",
    ],
  },
  {
    name: "스컬트라",
    description:
      "폴리-L-젖산(PLLA) 성분으로 콜라겐 신생을 유도하는 대표적인 콜라겐 부스터입니다. 시술 후 체내에서 서서히 콜라겐이 생성되어 2~3개월에 걸쳐 점진적으로 볼륨과 탄력이 개선됩니다. 자연스럽고 오래 지속되는 효과가 특징입니다.",
    benefits: [
      "점진적이고 자연스러운 볼륨 개선",
      "장기 지속 효과 (최대 2년)",
      "콜라겐 신생으로 근본적 탄력 회복",
      "얼굴 전체 리프팅 효과",
    ],
    targets: [
      "볼륨 감소로 얼굴이 꺼진 분",
      "자연스러운 안티에이징을 원하는 분",
      "오래 지속되는 효과를 원하는 분",
      "전체적인 얼굴 리프팅이 필요한 분",
    ],
  },
  {
    name: "레디어스",
    description:
      "칼슘 하이드록시아파타이트(CaHA) 미세입자를 주성분으로 한 콜라겐 부스터입니다. 주입 즉시 볼륨감을 제공하면서 동시에 콜라겐 생성을 촉진하여 이중 효과를 나타냅니다. 뼈와 동일한 성분으로 생체적합성이 뛰어납니다.",
    benefits: [
      "즉각적인 볼륨감 + 콜라겐 생성",
      "뛰어난 생체적합성",
      "피부 탄력 및 리프팅 효과",
      "자연스러운 윤곽 개선",
    ],
    targets: [
      "즉각적인 볼륨 효과를 원하는 분",
      "콜라겐 개선도 함께 원하는 분",
      "얼굴 윤곽을 자연스럽게 개선하고 싶은 분",
      "턱선 및 팔자 부위가 고민인 분",
    ],
  },
  {
    name: "울트라콜",
    description:
      "고순도 콜라겐 성분을 직접 주입하여 피부에 즉각적인 콜라겐을 보충하는 시술입니다. 기존 콜라겐 부스터와 달리 콜라겐 자체를 공급하면서 동시에 자가 콜라겐 생성도 유도하여 빠르고 확실한 피부 개선 효과를 제공합니다.",
    benefits: [
      "즉각적인 콜라겐 보충",
      "자가 콜라겐 생성 동시 유도",
      "빠른 피부 탄력 개선",
      "자연스러운 피부 질감 향상",
    ],
    targets: [
      "빠른 탄력 개선을 원하는 분",
      "콜라겐 부족이 심한 분",
      "피부 질감이 거칠어진 분",
      "탄탄한 피부를 원하는 분",
    ],
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
      {/* 콜라겐 부스터 소개 */}
      <section className="mb-16">
        <SectionTitle
          title="콜라겐 부스터란?"
          subtitle="콜라겐 부스터는 피부 내 콜라겐 생성을 촉진하는 성분을 주입하여 자가 콜라겐 재생을 유도하는 시술입니다. 나이가 들면서 자연스럽게 감소하는 콜라겐을 보충하고, 피부 스스로 콜라겐을 만들어내는 능력을 되살려 탄력 있고 건강한 피부를 되찾아 줍니다."
        />
        <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            콜라겐 부스터의 원리
          </h3>
          <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                20대 이후 매년 약 1%씩 감소하는 콜라겐을 자가 재생
                방식으로 보충합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                주입된 성분이 진피층에서 섬유아세포를 자극하여 새로운
                콜라겐을 만들어냅니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                시술 후 2~3개월에 걸쳐 점진적으로 효과가 나타나 자연스러운
                개선이 가능합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                피부 탄력, 주름, 볼륨 등 복합적인 노화 증상을 동시에
                개선합니다.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 제품 소개 */}
      <section>
        <SectionTitle
          title="DK서울의원 콜라겐 부스터 라인업"
          subtitle="피부 상태와 개선 목표에 맞는 최적의 콜라겐 부스터를 제안합니다."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              benefits={product.benefits}
              targets={product.targets}
            />
          ))}
        </div>
      </section>
    </SubPageLayout>
  );
}
