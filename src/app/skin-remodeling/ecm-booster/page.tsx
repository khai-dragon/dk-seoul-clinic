import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { menuData } from "@/lib/menu-data";

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
      "세포외기질(ECM)의 핵심 구성 요소를 직접 공급하여 피부의 구조적 기반을 강화하는 차세대 스킨케어 시술입니다. 콜라겐, 엘라스틴 등이 존재하는 세포외기질 환경을 최적화하여 피부 재생의 근본적 토대를 마련합니다.",
    benefits: [
      "ECM 환경 최적화로 피부 기반 강화",
      "콜라겐 및 엘라스틴 생성 환경 조성",
      "깊은 주름 및 탄력 개선",
      "장기적인 피부 구조 개선 효과",
    ],
    targets: [
      "피부 탄력이 현저히 저하된 분",
      "깊은 주름이 고민인 분",
      "근본적 피부 재생을 원하는 분",
      "기존 시술 효과를 높이고 싶은 분",
    ],
  },
  {
    name: "셀르디엠",
    description:
      "ECM 재생에 필요한 핵심 성장인자와 펩타이드를 복합적으로 함유한 제품입니다. 손상된 세포외기질을 복원하고 피부 세포의 활성도를 높여 자연스러운 피부 재생과 노화 방지 효과를 제공합니다.",
    benefits: [
      "성장인자를 통한 ECM 복원",
      "세포 활성도 증가",
      "피부 자연 재생력 강화",
      "노화 방지 및 피부 젊음 유지",
    ],
    targets: [
      "피부 재생력이 저하된 분",
      "피부 노화가 빠르게 진행 중인 분",
      "세포 활력을 되찾고 싶은 분",
      "종합적 피부 개선을 원하는 분",
    ],
  },
  {
    name: "쥬브아셀",
    description:
      "히알루론산과 ECM 활성 성분을 결합하여 피부의 수분 보유력과 구조적 탄탄함을 동시에 개선하는 시술입니다. 세포외기질에 수분을 공급하면서 ECM 구조를 강화하여 촉촉하고 탄력 있는 피부를 만들어 줍니다.",
    benefits: [
      "수분 보유력과 ECM 강화 동시 효과",
      "촉촉하면서 탄탄한 피부",
      "피부 볼륨감 자연스러운 개선",
      "지속적인 피부 컨디션 향상",
    ],
    targets: [
      "건조함과 탄력 저하가 동시에 고민인 분",
      "피부에 볼륨감을 주고 싶은 분",
      "촉촉하고 탄탄한 피부를 원하는 분",
      "복합적 피부 고민을 한 번에 해결하고 싶은 분",
    ],
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
      {/* ECM 부스터 소개 */}
      <section className="mb-16">
        <SectionTitle
          title="ECM 부스터란?"
          subtitle="ECM(세포외기질, Extracellular Matrix) 부스터는 피부 세포를 둘러싼 구조적 환경인 세포외기질을 활성화하여 피부 재생의 근본적인 토대를 강화하는 시술입니다. 콜라겐, 엘라스틴 등이 자리 잡는 ECM 환경을 최적화하여 더욱 효과적인 피부 재생을 유도합니다."
        />
        <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            ECM 부스터의 원리
          </h3>
          <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                세포외기질(ECM)은 피부 세포가 존재하는 구조적 환경으로,
                콜라겐과 엘라스틴이 배치되는 토대입니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                ECM이 건강해야 콜라겐과 엘라스틴이 올바르게 생성되고
                유지됩니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                ECM 부스터는 이 환경을 활성화하여 피부 재생의 효율을
                극대화합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                콜라겐 부스터, 스킨 부스터와 병행 시 시너지 효과를 기대할 수
                있습니다.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 제품 소개 */}
      <section>
        <SectionTitle
          title="DK서울의원 ECM 부스터 라인업"
          subtitle="피부의 구조적 기반을 강화하는 차세대 ECM 부스터를 소개합니다."
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
