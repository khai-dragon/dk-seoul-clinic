import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "필러 | 스킨 리모델링 | DK서울의원",
  description:
    "레스틸렌, 벨로테로, 쥬비덤 등 정품 필러를 사용한 볼륨 및 윤곽 시술. DK by MDcode 시그니처 프로그램 운영",
};

const skinRemodelingMenu = menuData.find(
  (m) => m.href === "/skin-remodeling"
)!;

const products = [
  {
    name: "레스틸렌",
    description:
      "스웨덴 갈더마사의 세계적으로 검증된 히알루론산 필러입니다. 독자적인 NASHA 기술로 제조되어 자연스러운 볼륨감과 우수한 지속력을 자랑합니다. 다양한 라인업으로 시술 부위와 목적에 따라 최적의 제품을 선택할 수 있습니다.",
    benefits: [
      "세계적으로 검증된 안전성",
      "자연스럽고 부드러운 볼륨감",
      "다양한 라인업으로 맞춤 시술 가능",
      "우수한 지속력",
    ],
    targets: [
      "자연스러운 볼륨 개선을 원하는 분",
      "팔자주름, 입꼬리 주름이 고민인 분",
      "코, 턱 등 윤곽 개선을 원하는 분",
      "검증된 제품을 선호하는 분",
    ],
    isSignature: false,
  },
  {
    name: "벨로테로",
    description:
      "독일 메르츠사의 프리미엄 히알루론산 필러입니다. 독자적인 CPM 기술로 피부 조직과의 융합도가 뛰어나 가장 자연스러운 결과를 제공합니다. 특히 눈가, 입술 등 섬세한 부위에 탁월한 효과를 보입니다.",
    benefits: [
      "피부 조직과의 뛰어난 융합도",
      "가장 자연스러운 시술 결과",
      "섬세한 부위 시술에 탁월",
      "부드럽고 매끄러운 질감",
    ],
    targets: [
      "자연스러움을 최우선으로 원하는 분",
      "눈가, 입술 등 섬세한 시술이 필요한 분",
      "이물감이 걱정되는 분",
      "얇은 피부 부위 시술이 필요한 분",
    ],
    isSignature: false,
  },
  {
    name: "쥬비덤",
    description:
      "미국 엘러간사의 대표적인 히알루론산 필러입니다. 독자적인 VYCROSS 기술로 부드러움과 볼륨감, 지속력을 모두 갖춘 프리미엄 필러입니다. DK서울의원에서는 쥬비덤을 활용한 DK by MDcode 시그니처 프로그램을 운영합니다.",
    benefits: [
      "부드러움과 볼륨감의 완벽한 조화",
      "업계 최고 수준의 지속력",
      "다양한 시술 부위에 활용 가능",
      "DK by MDcode 시그니처 프로그램",
    ],
    targets: [
      "오래 지속되는 효과를 원하는 분",
      "볼, 턱, 코 등 볼륨 시술이 필요한 분",
      "프리미엄 시그니처 시술을 원하는 분",
      "입체적인 얼굴 윤곽을 원하는 분",
    ],
    isSignature: true,
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
      {/* 필러 소개 */}
      <section className="mb-16">
        <SectionTitle
          title="필러란?"
          subtitle="필러는 히알루론산 등의 성분을 피부 아래에 주입하여 볼륨을 채우고 주름을 개선하는 시술입니다. 꺼진 볼륨을 자연스럽게 복원하고, 얼굴 윤곽을 입체적으로 만들어 줍니다."
        />
        <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            DK서울의원 필러 시술 원칙
          </h3>
          <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">정품 사용</strong> -
                공식 유통 경로를 통해 인증된 정품만 사용합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">정량 사용</strong> -
                시술에 사용하는 필러의 양을 정확하게 계량하여 약속된 용량을
                전부 주입합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">퍼스널 진단</strong> -
                얼굴 구조, 피부 상태, 원하는 결과를 종합적으로 분석하여
                개인 맞춤 시술 계획을 수립합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                <strong className="text-foreground">전문의 직접 시술</strong> -
                풍부한 경험의 전문의가 직접 상담부터 시술까지 진행합니다.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* DK by MDcode 시그니처 강조 */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-amber-50 to-white border border-accent rounded-2xl p-6 sm:p-8">
          <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-4">
            SIGNATURE PROGRAM
          </span>
          <h3 className="text-xl font-bold text-foreground mb-3">
            DK by MDcode
          </h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            DK서울의원만의 시그니처 필러 프로그램입니다. 엘러간사의 프리미엄 필러
            쥬비덤을 활용하여, 전문의의 퍼스널 진단을 기반으로 최적의 시술
            디자인을 설계합니다. 정품, 정량 사용 원칙 아래 자연스러우면서도
            입체적인 아름다움을 완성합니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "퍼스널 얼굴 분석",
              "맞춤 시술 디자인",
              "쥬비덤 정품 사용",
              "정량 보장",
              "전문의 직접 시술",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border border-accent/30 text-xs text-accent rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 제품 소개 */}
      <section>
        <SectionTitle
          title="DK서울의원 필러 라인업"
          subtitle="검증된 정품 필러만을 사용하여 안전하고 자연스러운 결과를 제공합니다."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              benefits={product.benefits}
              targets={product.targets}
              isSignature={product.isSignature}
            />
          ))}
        </div>
      </section>
    </SubPageLayout>
  );
}
