import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "DK줄기세포 연구소 | DK서울의원",
  description: "DK서울의원 자체 줄기세포 연구소 - 세포 연구실, 뱅킹 연구실, GMP 시설, 최첨단 연구 장비",
};

const stemCellMenu = menuData.find((m) => m.href === "/stem-cell")!;

export default function ResearchLabPage() {
  return (
    <SubPageLayout
      category="줄기세포"
      categoryHref="/stem-cell"
      title="DK줄기세포 연구소"
      subtitle="DK Stem Cell Research Lab"
      description="DK서울의원은 자체 줄기세포 연구소를 보유하여, 세포의 채취부터 배양, 보관까지 전 과정을 직접 관리합니다."
      sideMenu={stemCellMenu.subItems}
      currentPath="/stem-cell/research-lab"
    >
      {/* 줄기세포 연구소란? */}
      <SectionTitle
        title="줄기세포 연구소란?"
        subtitle="DK서울의원은 의원 내 자체 줄기세포 연구소를 운영하여, 외부 위탁 없이 직접 세포를 연구하고 관리합니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">세포 연구실</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            줄기세포의 분리, 배양, 분석을 수행하는 핵심 연구 공간입니다. 전문 연구 인력과 장비를 기반으로 세포의 품질과 안전성 관리에 집중합니다.
          </p>
          <div className="relative w-full h-48 bg-section-bg rounded-xl overflow-hidden">
            <Image
              src="/content/stem-cell/research-lab/lab-room.png"
              alt="DK줄기세포 연구소 세포 연구실"
              fill
              sizes="(min-width: 768px) 28vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">뱅킹 연구실</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            채취된 줄기세포를 안전하게 동결 보관하는 전용 공간입니다. 엄격한 온도 관리와 품질 기준을 유지하여 세포의 생존율과 활성도를 최상으로 유지합니다.
          </p>
          <div className="relative w-full h-48 bg-section-bg rounded-xl overflow-hidden">
            <Image
              src="/content/stem-cell/premium-cell-banking.jpg"
              alt="DK줄기세포 연구소 뱅킹 연구실"
              fill
              sizes="(min-width: 768px) 28vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 mb-16">
        <p className="text-sm text-foreground leading-relaxed">
          <strong className="text-primary">자체 연구소의 강점</strong> — DK서울의원은 외부 기관에 위탁하지 않고 자체 연구소에서 직접 세포를 처리합니다. 이를 통해 세포의 이동 시간을 최소화하고, 품질 관리의 일관성을 확보하며, 환자 맞춤형 치료를 신속하게 제공할 수 있습니다.
        </p>
      </div>

      {/* GMP 시설 */}
      <SectionTitle
        title="GMP 시설"
        subtitle="의약품 제조 및 품질 관리 기준(GMP)에 준하는 시설을 바탕으로 세포 관리의 안정성과 품질 체계를 운영합니다."
      />

      <div className="relative w-full h-80 bg-section-bg rounded-2xl overflow-hidden mb-6">
        <Image
          src="/content/stem-cell/research-lab/banking-room.png"
          alt="DK줄기세포 연구소 GMP 환경"
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
      </div>
      <div className="grid grid-cols-1 gap-6 mb-16 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-2xl border border-border-color bg-card-bg p-6 sm:p-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Quality System
          </p>
          <h3 className="mb-4 text-lg font-bold text-foreground">
            GMP 운영 관점에서 보는 연구 환경
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-text-muted">
            연구소 이미지는 단순 시설 소개보다, 실제 세포 보관과 품질 관리가
            어떤 흐름 안에서 이뤄지는지 보여주는 역할을 합니다. DK서울의원은
            세포 보관 환경과 계수 장비, 동선 관리까지 하나의 시스템으로
            연결해 운영합니다.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              "세포 보관 환경과 동선 분리",
              "계수 및 품질 확인 절차 운영",
              "연구소 내 직접 관리 기반",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border-color/50 bg-white/70 px-4 py-3 text-sm text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-section-bg">
          <Image
            src="/content/stem-cell/premium-cell-facility.jpg"
            alt="DK줄기세포 연구소 품질 관리 시설 비주얼"
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
              Facility View
            </p>
            <p className="max-w-sm text-sm font-medium leading-relaxed">
              연구와 보관, 품질 확인이 연결되는 실제 운영 환경 이미지를 함께
              반영했습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 줄기세포 연구소가 필요한 이유 */}
      <SectionTitle
        title="줄기세포 연구소가 필요한 이유"
        subtitle="의원 내 자체 연구소 보유는 안전하고 효과적인 줄기세포 치료의 핵심입니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="세포 품질 극대화"
          description="채취 후 즉시 처리가 가능하여 세포의 생존율과 활성도를 최대한으로 유지할 수 있습니다."
        />
        <InfoCard
          title="맞춤형 치료 가능"
          description="환자 개인의 상태에 맞춰 세포를 분석하고 최적의 치료 프로토콜을 설계할 수 있습니다."
        />
        <InfoCard
          title="안전성 확보"
          description="외부 운송 과정 없이 의원 내에서 전 과정이 이루어져 오염 및 손상 위험을 최소화합니다."
        />
        <InfoCard
          title="신속한 처리"
          description="연구소가 의원 내에 위치하여 세포 처리 시간을 단축하고 치료 효율을 높입니다."
        />
      </div>

      {/* 최첨단 연구 장비 */}
      <SectionTitle
        title="최첨단 연구 장비 보유"
        subtitle="DK줄기세포 연구소는 세계적 수준의 연구 장비를 갖추고 있습니다."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="relative w-full h-48 bg-section-bg rounded-xl overflow-hidden mb-4">
            <Image
              src="/content/stem-cell/research-lab/cell-counter.png"
              alt="Cell Counter 장비"
              fill
              sizes="(min-width: 768px) 20vw, 100vw"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Cell Counter</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            세포의 수량과 생존율을 정밀하게 측정하는 자동 세포 계수기입니다. 정확한 세포 분석을 통해 치료의 효과를 극대화합니다.
          </p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="relative w-full h-48 bg-section-bg rounded-xl overflow-hidden mb-4">
            <Image
              src="/content/stem-cell/research-lab/cell-3.png"
              alt="Cell-3 장비"
              fill
              sizes="(min-width: 768px) 20vw, 100vw"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Cell-3</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            세포의 배양과 증식을 위한 고성능 세포 처리 장비입니다. 최적의 환경에서 세포를 배양하여 높은 품질의 줄기세포를 확보합니다.
          </p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <div className="relative w-full h-48 bg-section-bg rounded-xl overflow-hidden mb-4">
            <Image
              src="/content/stem-cell/research-lab/inverted-microscope.png"
              alt="Inverted Microscope 장비"
              fill
              sizes="(min-width: 768px) 20vw, 100vw"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Inverted Microscope</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            세포의 형태와 상태를 고배율로 관찰하는 도립현미경입니다. 세포의 건강 상태를 실시간으로 모니터링하여 최적의 치료 시점을 결정합니다.
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
}
