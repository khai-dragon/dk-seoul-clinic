import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { menuData } from "@/lib/menu-data";

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
      "연어 유래 폴리뉴클레오타이드(PN) 성분으로 피부 자체의 재생력을 높여주는 스킨 부스터입니다. 피부 속부터 탄력과 수분을 채워 건강한 피부결을 만들어 줍니다.",
    benefits: [
      "피부 자체 재생력 강화",
      "잔주름 및 모공 개선",
      "피부 탄력 및 윤기 향상",
      "자연스러운 피부톤 개선",
    ],
    targets: [
      "피부 노화가 시작되는 분",
      "잔주름이 신경 쓰이는 분",
      "피부 탄력을 높이고 싶은 분",
      "건조하고 칙칙한 피부",
    ],
  },
  {
    name: "엑소좀",
    description:
      "줄기세포에서 분비되는 세포 간 신호전달 물질인 엑소좀을 활용한 최첨단 스킨 부스터입니다. 피부 세포 간 커뮤니케이션을 활성화하여 근본적인 피부 재생을 유도합니다.",
    benefits: [
      "세포 단위의 근본적 피부 재생",
      "강력한 항염 및 진정 효과",
      "피부 장벽 강화",
      "콜라겐 및 엘라스틴 합성 촉진",
    ],
    targets: [
      "피부 재생이 필요한 분",
      "민감하고 손상된 피부",
      "시술 후 빠른 회복을 원하는 분",
      "근본적 피부 개선을 원하는 분",
    ],
  },
  {
    name: "필로가135",
    description:
      "프랑스 필로가 연구소에서 개발한 NCTF 135HA 제품으로, 히알루론산과 53가지 영양 성분이 함유된 프리미엄 스킨 부스터입니다. 피부에 필요한 비타민, 아미노산, 미네랄을 한 번에 공급합니다.",
    benefits: [
      "53가지 복합 영양 성분 공급",
      "즉각적인 수분 충전 효과",
      "피부 광채 및 투명감 향상",
      "잔주름 완화 및 탄력 개선",
    ],
    targets: [
      "영양 부족한 피부",
      "칙칙하고 생기 없는 피부",
      "건조함이 심한 분",
      "광채 나는 피부를 원하는 분",
    ],
  },
  {
    name: "릴리이드",
    description:
      "고분자 히알루론산과 저분자 히알루론산이 최적의 비율로 배합된 스킨 부스터입니다. 피부 깊은 층부터 표면까지 겹겹이 수분을 채워 촉촉하고 탄력 있는 피부를 만들어 줍니다.",
    benefits: [
      "이중 히알루론산의 깊은 보습",
      "피부 결 개선 및 매끈한 피부",
      "자연스러운 볼륨감 부여",
      "지속력이 뛰어난 수분 충전",
    ],
    targets: [
      "극심한 건조 피부",
      "수분감이 부족한 분",
      "피부 결을 매끈하게 하고 싶은 분",
      "자연스러운 볼륨감을 원하는 분",
    ],
  },
  {
    name: "물광주사",
    description:
      "히알루론산을 주성분으로 피부 전체에 균일하게 수분을 공급하는 시술입니다. 자동화된 장비를 사용하여 일정한 깊이와 용량으로 주입하여 고르고 촉촉한 물광 피부를 만들어 줍니다.",
    benefits: [
      "균일한 수분 공급으로 물광 피부",
      "자동화 시스템으로 정밀한 시술",
      "즉각적인 피부 광채 효과",
      "모공 축소 및 피부결 개선",
    ],
    targets: [
      "촉촉한 물광 피부를 원하는 분",
      "건조하고 푸석한 피부",
      "모공이 넓어 고민인 분",
      "결혼식 등 중요한 이벤트를 앞둔 분",
    ],
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
      {/* 스킨 부스터 소개 */}
      <section className="mb-16">
        <SectionTitle
          title="스킨 부스터란?"
          subtitle="스킨 부스터는 피부 진피층에 직접 수분, 영양, 재생 성분을 주입하여 피부 자체의 건강을 회복시키는 시술입니다. 단순한 표면 보습이 아닌, 피부 깊숙한 곳부터 근본적으로 수분과 영양을 공급하여 건강하고 윤기 있는 피부를 만들어 줍니다."
        />
        <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            스킨 부스터 시술의 특징
          </h3>
          <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                피부 진피층에 직접 성분을 주입하여 빠르고 확실한 효과를
                기대할 수 있습니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                시술 후 일상생활이 바로 가능하며, 회복 기간이 짧습니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                피부 타입과 고민에 따라 다양한 제품을 선택할 수 있습니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                정기적인 시술을 통해 피부 노화 예방과 꾸준한 피부 관리가
                가능합니다.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 제품 소개 */}
      <section>
        <SectionTitle
          title="DK서울의원 스킨 부스터 라인업"
          subtitle="피부 상태와 목적에 맞는 최적의 스킨 부스터를 제안합니다."
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
