import Link from "next/link";
import PageHero from "@/components/PageHero";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "스킨 리모델링 | DK서울의원",
  description:
    "DK서울의원 스킨 리모델링 - 스킨 부스터, 콜라겐 부스터, ECM 부스터, 줄기세포, 필러, 보톡스까지 피부 리모델링 토탈 솔루션",
};

const skinRemodelingMenu = menuData.find(
  (m) => m.href === "/skin-remodeling"
)!;

const subPages = [
  {
    name: "스킨 부스터",
    href: "/skin-remodeling/skin-booster",
    desc: "리쥬란힐러, 엑소좀, 필로가135, 릴리이드, 물광주사 등 피부 깊숙이 수분과 영양을 공급하는 스킨 부스터 시술입니다.",
  },
  {
    name: "콜라겐 부스터",
    href: "/skin-remodeling/collagen-booster",
    desc: "쥬베룩, 스컬트라, 레디어스, 울트라콜 등 콜라겐 생성을 촉진하여 피부 탄력을 회복시키는 시술입니다.",
  },
  {
    name: "ECM 부스터",
    href: "/skin-remodeling/ecm-booster",
    desc: "엘라비에 리투오, 셀르디엠, 쥬브아셀 등 세포외기질(ECM)을 활성화하여 피부 재생을 돕는 시술입니다.",
  },
  {
    name: "줄기세포",
    href: "/skin-remodeling/stem-cell",
    desc: "줄기세포의 호밍효과를 활용한 피부주사 시술로, 손상된 피부 조직을 근본적으로 재생합니다.",
  },
  {
    name: "필러",
    href: "/skin-remodeling/filler",
    desc: "레스틸렌, 벨로테로, 쥬비덤 등 정품 필러를 사용한 볼륨 및 윤곽 시술입니다. DK by MDcode 시그니처 프로그램을 운영합니다.",
  },
  {
    name: "보톡스",
    href: "/skin-remodeling/botox",
    desc: "주름 개선, 사각턱 축소, 다한증 등 다양한 목적으로 활용되는 보톡스 시술입니다.",
  },
];

export default function SkinRemodelingPage() {
  return (
    <>
      <PageHero
        title="스킨 리모델링"
        subtitle="Skin Remodeling"
        description="DK서울의원은 스킨 부스터부터 콜라겐 부스터, ECM 부스터, 줄기세포, 필러, 보톡스까지 피부 상태에 맞는 최적의 리모델링 솔루션을 제공합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">
            홈
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">스킨 리모델링</span>
        </nav>

        {/* Sub-page grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="service-card bg-card-bg rounded-2xl p-8 border border-border-color group"
            >
              <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {page.name}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {page.desc}
              </p>
              <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
