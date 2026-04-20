import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "에너지 리프팅 | DK서울의원",
  description: "DK서울의원 에너지 리프팅 - 써마지, 울쎄라, 소프웨이브, 티타늄, 온다, 볼뉴머, 슈링크, 인모드",
};

const subPages = [
  {
    name: "써마지 FLX",
    href: "/energy-lifting/thermage",
    desc: "고주파(RF) 에너지를 활용하여 피부 깊은 층의 콜라겐을 수축·재생시켜 탄력을 회복하는 대표적인 리프팅 시술입니다.",
    imageSrc: "/content/energy-lifting/thermage/device.jpg",
  },
  {
    name: "울쎄라 프라임",
    href: "/energy-lifting/ulthera",
    desc: "초음파 에너지를 피부 심층(SMAS층)까지 전달해 리프팅 방향을 설계하는 대표 장비입니다.",
    imageSrc: "/content/energy-lifting/ulthera/device.webp",
  },
  {
    name: "소프웨이브",
    href: "/energy-lifting/sofwave",
    desc: "차세대 초음파 기술로 통증은 줄이고 리프팅 효과는 극대화한 새로운 개념의 리프팅 시술입니다.",
    imageSrc: "/content/energy-lifting/sofwave/device.webp",
  },
  {
    name: "티타늄",
    href: "/energy-lifting/titanium",
    desc: "3가지 파장의 레이저를 동시에 조사하여 피부 탄력, 리프팅, 톤 개선을 한 번에 해결하는 시술입니다.",
    imageSrc: "/content/energy-lifting/titanium/device.webp",
  },
  {
    name: "온다",
    href: "/energy-lifting/onda",
    desc: "마이크로웨이브 에너지를 활용하여 지방 감소와 피부 타이트닝을 동시에 실현하는 바디 리프팅 시술입니다.",
    imageSrc: "/content/energy-lifting/onda/device.webp",
  },
  {
    name: "볼뉴머",
    href: "/energy-lifting/volnewmer",
    desc: "고주파 에너지로 콜라겐 생성을 촉진하여 볼륨 회복과 리프팅 효과를 동시에 제공하는 시술입니다.",
    imageSrc: "/content/energy-lifting/volnewmer/device.webp",
  },
  {
    name: "슈링크 유니버스",
    href: "/energy-lifting/shrink",
    desc: "고밀도 초음파 에너지를 활용하여 SMAS층까지 정밀하게 타이트닝하는 리프팅 시술입니다.",
    imageSrc: "/content/energy-lifting/shrink/device.webp",
  },
  {
    name: "인모드",
    href: "/energy-lifting/inmode",
    desc: "고주파와 펄스 기술을 결합하여 피부 탄력 개선과 윤곽 리프팅을 동시에 구현하는 시술입니다.",
    imageSrc: "/content/energy-lifting/inmode/device.webp",
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

        <div className="bg-card-bg border border-border-color rounded-3xl p-8 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
            <div>
              <p className="font-serif text-accent text-lg italic tracking-wide mb-3">Energy Signature</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                장비 스펙보다 중요한 건<br />얼굴 구조와 피부 상태에 맞는 선택
              </h2>
              <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed max-w-2xl">
                DK서울의원은 써마지, 울쎄라, 소프웨이브, 티타늄 등 서로 다른 에너지 특성을
                환자의 탄력 저하 양상과 원하는 결과에 맞춰 조합합니다.
                비슷해 보이는 리프팅도 타깃 층과 작용 방식은 분명히 다릅니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                {[
                  "고주파·초음파·레이저 장비별 비교",
                  "얼굴과 바디 고민에 맞춘 선택",
                  "정품 장비와 맞춤 샷 설계",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border-color bg-section-bg px-4 py-3 text-sm text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[240px] sm:min-h-[300px] rounded-[28px] overflow-hidden bg-section-bg">
              <Image
                src="/content/energy-lifting/thermage/device.jpg"
                alt="DK서울의원 에너지 리프팅 대표 장비 비주얼"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="service-card bg-card-bg rounded-2xl border border-border-color overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden bg-section-bg">
                <Image
                  src={page.imageSrc}
                  alt={page.name}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
              </div>
              <div className="p-6">
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
