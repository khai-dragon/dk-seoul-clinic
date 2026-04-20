import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import VisualPanel from "./_components/VisualPanel";

export const metadata = {
  title: "스킨 리모델링 | DK서울의원",
  description:
    "DK서울의원 스킨 리모델링 - 스킨 부스터, 콜라겐 부스터, ECM 부스터, 줄기세포, 필러, 보톡스까지 피부 리모델링 토탈 솔루션",
};

const subPages = [
  {
    name: "스킨 부스터",
    href: "/skin-remodeling/skin-booster",
    desc: "수분과 영양, 진정과 윤기를 균형 있게 채워 피부 컨디션을 부드럽게 회복합니다.",
    imageSrc: "/content/skin-remodeling/skin-booster/rejuran-lineup.jpg",
    imageAlt: "스킨 부스터 제품 비주얼",
    tag: "Hydration",
  },
  {
    name: "콜라겐 부스터",
    href: "/skin-remodeling/collagen-booster",
    desc: "자가 콜라겐 생성을 유도해 무너진 탄력과 얼굴의 입체감을 점진적으로 되살립니다.",
    imageSrc: "/content/skin-remodeling/collagen-booster/sculptra-box.jpg",
    imageAlt: "콜라겐 부스터 제품 비주얼",
    tag: "Firmness",
  },
  {
    name: "ECM 부스터",
    href: "/skin-remodeling/ecm-booster",
    desc: "피부 구조의 바탕이 되는 ECM 환경을 정돈해 재생이 잘 일어나는 기반을 만듭니다.",
    imageSrc: "/content/skin-remodeling/ecm-booster/juveacell-set.jpg",
    imageAlt: "ECM 부스터 제품 비주얼",
    tag: "Structure",
  },
  {
    name: "줄기세포",
    href: "/skin-remodeling/stem-cell",
    desc: "손상 신호를 따라가는 재생 접근으로 피부 회복력과 생기를 근본적으로 끌어올립니다.",
    imageSrc: "/content/skin-remodeling/shared/stem-cell-science.jpg",
    imageAlt: "줄기세포 피부 재생 비주얼",
    tag: "Regeneration",
  },
  {
    name: "필러",
    href: "/skin-remodeling/filler",
    desc: "정품, 정량 원칙 아래 부위별 맞춤 디자인으로 자연스러운 볼륨과 윤곽을 완성합니다.",
    imageSrc: "/content/skin-remodeling/filler/juvederm-signature.jpg",
    imageAlt: "프리미엄 필러 비주얼",
    tag: "Contour",
  },
  {
    name: "보톡스",
    href: "/skin-remodeling/botox",
    desc: "표정은 부드럽게 남기면서 주름과 윤곽, 과도한 움직임을 세밀하게 조절합니다.",
    imageSrc: "/content/skin-remodeling/shared/injection-closeup.jpg",
    imageAlt: "보톡스 시술 비주얼",
    tag: "Precision",
  },
];

const principles = [
  {
    title: "퍼스널 진단",
    description:
      "건조, 탄력, 볼륨, 민감도까지 한 번에 살펴 피부 상태에 맞는 시작점을 정합니다.",
  },
  {
    title: "레이어드 설계",
    description:
      "수분, 콜라겐, ECM, 윤곽 개선을 분리하지 않고 피부가 필요한 층위별로 조합합니다.",
  },
  {
    title: "자연스러운 결과",
    description:
      "즉각적인 변화보다 시간이 지나도 편안하게 어우러지는 방향을 우선합니다.",
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

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav className="mb-12 flex items-center gap-2 text-[12px] tracking-wide text-text-muted/80">
          <Link href="/" className="hover:text-foreground transition-colors">
            HOME
          </Link>
          <span className="text-border-color">/</span>
          <span className="font-medium text-foreground">스킨 리모델링</span>
        </nav>

        <section className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-border-color/60 bg-card-bg p-8 sm:p-10">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Layered Program
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-[36px]">
              피부가 원하는 변화를
              <br />
              한 겹씩 설계합니다.
            </h2>
            <p className="max-w-2xl text-[14px] leading-relaxed text-text-muted">
              스킨 리모델링은 하나의 시술로 모든 고민을 덮는 방식이 아닙니다.
              피부 컨디션을 섬세하게 읽고, 수분과 밀도, 재생과 윤곽을
              단계별로 정리해 시간이 지나도 자연스러운 결과를 만드는
              접근입니다.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-border-color/50 bg-section-bg/70 p-5"
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

          <VisualPanel
            src="/content/skin-remodeling/shared/soft-wave.jpg"
            alt="스킨 리모델링 메인 비주얼"
            className="min-h-[360px]"
            caption="과한 변화보다 피부의 결, 밀도, 인상을 정돈하는 방향으로 접근합니다."
            eyebrow="Premium Direction"
            priority
          />
        </section>

        <section className="mb-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Programs
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-[30px]">
                피부 고민별 세부 프로그램
              </h2>
            </div>
            <p className="max-w-xl text-right text-[13px] leading-relaxed text-text-muted">
              각 프로그램은 단독으로도 진행할 수 있지만, 진단 결과에 따라
              서로 보완적으로 설계될 때 더욱 자연스럽고 안정적인 결과를 기대할
              수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {subPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="service-card group overflow-hidden rounded-[28px] border border-border-color/60 bg-card-bg"
              >
                <div className="relative h-52 overflow-hidden bg-section-bg">
                  <Image
                    src={page.imageSrc}
                    alt={page.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/5 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur">
                    {page.tag}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {page.name}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-text-muted">
                    {page.desc}
                  </p>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
                    자세히 보기
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <VisualPanel
            src="/content/skin-remodeling/shared/injection-closeup.jpg"
            alt="정밀 시술 비주얼"
            className="min-h-[320px]"
            caption="정교한 용량 조절과 부위별 설계가 결과의 밀도를 좌우합니다."
            eyebrow="Precise Planning"
          />

          <div className="rounded-[32px] border border-border-color/60 bg-card-bg p-8 sm:p-10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              How We Approach
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-[30px]">
              DK서울의원이 중요하게 보는 세 가지
            </h2>
            <div className="space-y-5 text-[14px] leading-relaxed text-text-muted">
              <p>
                첫째, 피부 표현을 무겁게 만들지 않는 방향입니다. 광채와 탄력,
                윤곽 변화가 있어도 인상은 편안해야 합니다.
              </p>
              <p>
                둘째, 제품 선택보다 우선하는 것은 개인 피부 상태입니다. 같은
                고민이라도 건조형인지, 민감형인지, 볼륨 저하가 중심인지에 따라
                접근이 달라집니다.
              </p>
              <p>
                셋째, 한 번의 시술보다 시술 간 균형입니다. 필요한 경우 스킨
                부스터와 콜라겐 부스터, ECM 또는 윤곽 시술을 단계적으로 조합해
                피부 완성도를 높입니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
