import Link from "next/link";
import PageHero from "@/components/PageHero";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "에너지 리프팅 | DK서울의원",
  description: "DK서울의원 에너지 리프팅 - 써마지, 울쎄라, 소프웨이브, 티타늄, 온다, 볼뉴머, 슈링크, 인모드",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

const subPages = [
  {
    name: "써마지 FLX",
    href: "/energy-lifting/thermage",
    desc: "고주파(RF) 에너지를 활용하여 피부 깊은 층의 콜라겐을 수축·재생시켜 탄력을 회복하는 대표적인 리프팅 시술입니다.",
  },
  {
    name: "울쎄라 프라임",
    href: "/energy-lifting/ulthera",
    desc: "초음파 에너지를 피부 심층(SMAS층)까지 전달하여 강력한 리프팅 효과를 제공하는 FDA 승인 시술입니다.",
  },
  {
    name: "소프웨이브",
    href: "/energy-lifting/sofwave",
    desc: "차세대 초음파 기술로 통증은 줄이고 리프팅 효과는 극대화한 새로운 개념의 리프팅 시술입니다.",
  },
  {
    name: "티타늄",
    href: "/energy-lifting/titanium",
    desc: "3가지 파장의 레이저를 동시에 조사하여 피부 탄력, 리프팅, 톤 개선을 한 번에 해결하는 시술입니다.",
  },
  {
    name: "온다",
    href: "/energy-lifting/onda",
    desc: "마이크로웨이브 에너지를 활용하여 지방 감소와 피부 타이트닝을 동시에 실현하는 바디 리프팅 시술입니다.",
  },
  {
    name: "볼뉴머",
    href: "/energy-lifting/volnewmer",
    desc: "고주파 에너지로 콜라겐 생성을 촉진하여 볼륨 회복과 리프팅 효과를 동시에 제공하는 시술입니다.",
  },
  {
    name: "슈링크 유니버스",
    href: "/energy-lifting/shrink",
    desc: "고밀도 초음파 에너지를 활용하여 SMAS층까지 정밀하게 타이트닝하는 리프팅 시술입니다.",
  },
  {
    name: "인모드",
    href: "/energy-lifting/inmode",
    desc: "고주파와 펄스 기술을 결합하여 피부 탄력 개선과 윤곽 리프팅을 동시에 구현하는 시술입니다.",
  },
];

export default function EnergyLiftingPage() {
  return (
    <>
      <PageHero
        title="에너지 리프팅"
        subtitle="Energy Lifting"
        description="DK서울의원은 써마지, 울쎄라, 소프웨이브 등 최첨단 에너지 기반 리프팅 장비를 보유하고, 환자 개개인에 맞는 맞춤형 리프팅 솔루션을 제공합니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-10">
          <Link href="/" className="hover:text-primary">홈</Link>
          <span>/</span>
          <span className="text-primary font-medium">에너지 리프팅</span>
        </nav>

        {/* Sub-page grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="service-card bg-card-bg rounded-2xl p-8 border border-border-color group"
            >
              <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {page.name}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{page.desc}</p>
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
