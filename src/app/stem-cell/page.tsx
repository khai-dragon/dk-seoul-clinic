import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "줄기세포 | DK서울의원",
  description: "DK서울의원 줄기세포 프로그램 - 프리미엄 셀관리, 줄기세포 연구소, 셀테라피, 첨단재생의료실시기관",
};

const subPages = [
  {
    name: "DK프리미엄 셀관리",
    href: "/stem-cell/premium-cell",
    desc: "프리미엄 셀뱅킹 서비스와 셀카운팅 시스템으로 최적의 세포 관리를 제공합니다.",
    imageSrc: "/content/stem-cell/premium-cell-banking.jpg",
  },
  {
    name: "DK줄기세포 연구소",
    href: "/stem-cell/research-lab",
    desc: "자체 세포 연구실과 뱅킹 연구실을 갖춘 최첨단 줄기세포 연구소를 운영합니다.",
    imageSrc: "/content/stem-cell/research-lab/lab-room.png",
  },
  {
    name: "줄기세포 셀테라피",
    href: "/stem-cell/cell-therapy",
    desc: "혈액, 지방, 골수 유래 줄기세포의 특성과 적용 방향을 상담 기반으로 안내합니다.",
    imageSrc: "/content/stem-cell/cell-therapy/concept.jpg",
  },
  {
    name: "첨단재생의료실시기관",
    href: "/stem-cell/advanced-regenerative",
    desc: "재생의료 운영 기준과 연구 인프라, 준비 현황을 중심으로 안내합니다.",
    imageSrc: "/content/stem-cell/research-lab/banking-room.png",
  },
];

export default function StemCellPage() {
  return (
    <>
      <PageHero
        title="줄기세포"
        subtitle="Stem Cell Therapy"
        description="DK서울의원은 자체 연구 인프라를 바탕으로 셀관리, 연구소, 셀테라피, 재생의료 시스템 안내를 체계적으로 소개합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">홈</Link>
          <span>/</span>
          <span className="text-primary font-medium">줄기세포</span>
        </nav>

        <div className="bg-card-bg border border-border-color rounded-3xl p-8 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
            <div>
              <p className="font-serif text-accent text-lg italic tracking-wide mb-3">Regenerative Platform</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                자체 연구소 기반의<br />프리미엄 줄기세포 시스템
              </h2>
              <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed max-w-2xl">
                DK서울의원은 셀관리, 연구소, 셀테라피, 재생의료 시스템 안내까지 하나의 흐름 안에서 연결해 보여드립니다.
                현재 단계에서는 실제 보유 장비와 연구 환경 이미지를 우선 반영하고, 지정서와 공적 문서는 공식 확정 시점에 맞춰 순차 업데이트합니다.
              </p>
            </div>
            <div className="relative min-h-[220px] sm:min-h-[280px] rounded-[28px] overflow-hidden bg-section-bg">
              <Image
                src="/content/stem-cell/research-lab/lab-room.png"
                alt="DK서울의원 줄기세포 연구 환경"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Sub-page grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="service-card bg-card-bg rounded-2xl border border-border-color overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden bg-section-bg">
                <Image
                  src={page.imageSrc}
                  alt={page.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {page.name}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{page.desc}</p>
                <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  자세히 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
