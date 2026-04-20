import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "만성피로 케어 | DK서울의원",
  description: "만성피로 증후군 진단과 세포 영양 검사 기반 맞춤 수액 처방 프로그램",
};

const wellnessMenu = menuData.find((m) => m.href === "/wellness")!;

const symptoms = [
  {
    title: "지속적인 극심한 피로",
    description: "충분히 쉬어도 쉽게 회복되지 않고, 일상적인 활동조차 버겁게 느껴질 수 있습니다.",
  },
  {
    title: "인지 기능 저하",
    description: "집중력 저하, 머리가 맑지 않은 느낌, 기억력 저하처럼 업무와 일상에 영향을 주는 변화가 나타날 수 있습니다.",
  },
  {
    title: "수면의 질 저하",
    description: "잠을 자도 개운하지 않거나 깊게 쉬지 못하는 느낌이 이어지며 피로가 누적될 수 있습니다.",
  },
  {
    title: "근육통 및 관절통",
    description: "특별한 원인 없이 몸이 무겁고 쑤시거나, 회복 속도가 더디게 느껴질 수 있습니다.",
  },
];

const selfChecklist = [
  "6개월 이상 원인 모를 피로가 지속된다",
  "충분히 자도 개운하지 않고 항상 피곤하다",
  "가벼운 활동 후에도 피로가 오래 남는다",
  "집중력이 떨어지고 자주 멍해진다",
  "기억력이 예전만 못하다고 느낀다",
  "이유 없이 근육통이나 관절통이 있다",
  "목이 자주 붓거나 인후통이 반복된다",
  "두통이 자주 발생한다",
  "기분이 가라앉고 의욕이 떨어진다",
  "감기 등 잔병치레가 잦아진 느낌이 든다",
];

export default function ChronicFatiguePage() {
  return (
    <SubPageLayout
      category="웰니스"
      categoryHref="/wellness"
      title="만성피로 케어"
      subtitle="Chronic Fatigue Care"
      description="지속되는 피로의 배경을 세포 영양 상태와 생활 리듬 관점에서 살펴보고, 맞춤 수액 처방과 회복 계획으로 연결합니다."
      sideMenu={wellnessMenu.subItems}
      currentPath="/wellness/chronic-fatigue"
    >
      <SectionTitle
        title="만성피로 증후군이란?"
        subtitle="만성피로는 단순히 피곤한 상태가 오래 지속되는 것을 넘어, 충분히 쉬어도 회복이 더디고 일상 전반의 활력이 떨어지는 상태를 말합니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-6 mb-16">
        <div className="relative min-h-[320px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/wellness/chronic-fatigue/hero.jpg"
            alt="만성피로 케어 비주얼"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8 flex flex-col justify-center">
          <p className="text-sm text-text-muted leading-relaxed">
            만성피로는 수면, 스트레스, 영양, 대사 상태가 함께 얽혀 나타나는 경우가 많습니다.
            DK서울의원은 현재 느끼는 불편을 단순 증상으로 넘기지 않고, 회복을 방해하는 배경을 차분히 정리합니다.
          </p>
          <div className="space-y-3 mt-6">
            {[
              "지속 기간과 일상 영향도를 함께 확인",
              "피로 외에 동반되는 변화까지 폭넓게 문진",
              "필요 시 세포 영양 상태를 중심으로 추가 평가",
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {symptoms.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <SectionTitle
        title="만성피로 증후군 자가진단"
        subtitle="아래 항목은 현재 상태를 가볍게 점검하기 위한 참고 지표입니다. 해당 항목이 많다면 전문 상담을 통해 원인을 정리해보는 것이 좋습니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-4">
          {selfChecklist.map((item, index) => (
            <label key={item} className="flex items-start gap-3 cursor-default">
              <div className="w-6 h-6 border-2 border-border-color rounded flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs text-text-muted">{index + 1}</span>
              </div>
              <span className="text-sm text-text-muted">{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-border-color">
          <p className="text-sm text-primary font-medium">
            위 항목 중 4개 이상 해당된다면, 현재 피로의 배경을 전문의와 함께 정리해보시길 권합니다.
          </p>
        </div>
      </div>

      <SectionTitle
        title="DK서울의원 만성피로 케어 프로그램"
        subtitle="검사와 회복 계획을 분리하지 않고, 현재 몸 상태를 확인한 뒤 필요한 보충 전략으로 이어갑니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold mb-5">
            01
          </div>
          <h3 className="font-bold text-foreground mb-3">세포 영양 검사</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-5">
            세포 영양 검사는 비타민, 미네랄, 아미노산 등 필수 영양 요소의 균형을 보다 세밀하게 이해하는 데 도움을 줍니다.
            피로가 오래 지속되는 이유를 영양 상태 관점에서 다시 살펴볼 수 있습니다.
          </p>
          <div className="relative min-h-[220px] rounded-2xl overflow-hidden border border-border-color/50 bg-section-bg">
            <Image
              src="/content/wellness/chronic-fatigue/cell-nutrition-test.jpg"
              alt="세포 영양 검사 비주얼"
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold mb-5">
            02
          </div>
          <h3 className="font-bold text-foreground mb-3">맞춤 수액 처방</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-5">
            검사 결과와 현재 컨디션을 바탕으로, 부족한 영양 성분을 보충하는 맞춤 수액을 제안합니다.
            회복 속도와 일상 적응을 함께 고려해 무리 없는 방식으로 계획을 구성합니다.
          </p>
          <div className="relative min-h-[220px] rounded-2xl overflow-hidden border border-border-color/50 bg-section-bg">
            <Image
              src="/content/wellness/chronic-fatigue/custom-infusion.jpg"
              alt="맞춤 수액 처방 비주얼"
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
        <p className="text-sm text-foreground leading-relaxed">
          <strong className="text-primary">안내</strong> 만성피로는 다양한 배경에서 나타날 수 있어 단일 검사만으로 모든 원인을 설명하기는 어렵습니다.
          DK서울의원은 문진과 현재 컨디션, 필요 시 추가 평가를 함께 고려해 회복 방향을 제안합니다.
        </p>
      </div>
    </SubPageLayout>
  );
}
