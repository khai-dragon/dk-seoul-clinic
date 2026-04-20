import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "GLP-1 주사 | DK서울의원",
  description: "마운자로, 위고비, 삭센다 등 GLP-1 계열 비만 치료 주사를 전문의 진단 하에 안전하게 처방합니다.",
};

const dietMenu = menuData.find((m) => m.href === "/diet")!;

const products = [
  {
    name: "마운자로 (Mounjaro)",
    description:
      "티르제파티드(Tirzepatide) 성분의 이중 수용체 작용제로, GLP-1과 GIP 수용체에 함께 작용하는 치료 옵션입니다.",
    imageSrc: "/content/diet/glp1/mounjaro.jpg",
    imageAlt: "마운자로 제품 이미지",
    imageClassName: "object-contain bg-white p-6",
    details: [
      { label: "성분", value: "티르제파티드 (Tirzepatide)" },
      { label: "작용 기전", value: "GLP-1 + GIP 이중 수용체 작용" },
      { label: "투여", value: "주 1회 피하 주사" },
    ],
    effects: [
      "식사량 조절과 포만감 유지에 도움을 줄 수 있습니다.",
      "연구에서 의미 있는 체중 감소 경향이 보고된 치료 옵션입니다.",
      "혈당 관리가 필요한 경우 함께 검토되는 경우가 있습니다.",
      "개인 상태에 따라 용량 증량과 부작용 관찰이 중요합니다.",
    ],
  },
  {
    name: "위고비 (Wegovy)",
    description:
      "세마글루티드(Semaglutide) 성분의 GLP-1 수용체 작용제로, 체중 관리 목적에서 널리 검토되는 주사 치료입니다.",
    imageSrc: "/content/diet/glp1/wegovy.jpg",
    imageAlt: "위고비 제품 이미지",
    imageClassName: "object-contain bg-white p-6",
    details: [
      { label: "성분", value: "세마글루티드 (Semaglutide)" },
      { label: "작용 기전", value: "GLP-1 수용체 작용" },
      { label: "투여", value: "주 1회 피하 주사" },
    ],
    effects: [
      "식욕 조절과 식사량 감소를 돕는 방식으로 사용됩니다.",
      "연구에서 평균적인 체중 감소 경향이 확인된 바 있습니다.",
      "단계적인 용량 증량으로 적응 여부를 살핍니다.",
      "진료 시 동반 질환과 현재 복용 약을 함께 확인합니다.",
    ],
  },
  {
    name: "삭센다 (Saxenda)",
    description:
      "리라글루티드(Liraglutide) 성분의 GLP-1 수용체 작용제로, 오랜 임상 경험을 바탕으로 검토되는 비만 치료 주사입니다.",
    imageSrc: "/content/diet/glp1/saxenda.jpg",
    imageAlt: "삭센다 제품 이미지",
    imageClassName: "object-contain bg-white p-6",
    details: [
      { label: "성분", value: "리라글루티드 (Liraglutide)" },
      { label: "작용 기전", value: "GLP-1 수용체 작용" },
      { label: "투여", value: "매일 1회 피하 주사" },
    ],
    effects: [
      "포만감 유지와 식욕 조절에 도움을 줄 수 있습니다.",
      "비교적 긴 사용 경험이 축적된 치료 옵션입니다.",
      "생활 습관 교정과 함께 진행할 때 활용도가 높아질 수 있습니다.",
      "초기 적응 과정에서 위장관 증상 여부를 세심하게 살핍니다.",
    ],
  },
];

const recommendedCandidates = [
  {
    title: "대사증후군",
    description: "복부비만, 고혈압, 고혈당, 이상지질혈증 등 대사 지표를 함께 관리해야 하는 경우에 검토될 수 있습니다.",
  },
  {
    title: "갱년기 체중 증가",
    description: "호르몬 변화와 기초대사 저하로 체중 관리가 어려워진 시기에 의료적 평가와 함께 고려할 수 있습니다.",
  },
  {
    title: "40~50대 중년",
    description: "예전과 같은 방식으로 감량이 잘 되지 않는 경우, 현재 건강 상태를 바탕으로 치료 옵션을 정리합니다.",
  },
  {
    title: "제2형 당뇨병 동반",
    description: "혈당 관리와 체중 관리를 함께 살펴야 하는 경우, 적합성 여부를 진료를 통해 확인합니다.",
  },
  {
    title: "반복적 다이어트 실패",
    description: "식이조절과 운동만으로 감량 유지가 어려웠던 경우, 보조 치료의 필요성을 함께 검토합니다.",
  },
  {
    title: "비만 관련 질환 동반",
    description: "수면무호흡, 지방간, 관절 부담 등 체중과 연관된 문제를 함께 관리해야 하는 경우 도움이 될 수 있습니다.",
  },
];

export default function GLP1InjectionPage() {
  return (
    <SubPageLayout
      category="다이어트"
      categoryHref="/diet"
      title="GLP-1 주사"
      subtitle="GLP-1 Receptor Agonist Injection"
      description="GLP-1 계열 주사 치료는 식욕 조절과 생활 습관 교정을 함께 설계할 때 활용되는 비만 치료 옵션입니다. DK서울의원은 적응증과 안전성을 우선 확인해 처방 여부를 결정합니다."
      sideMenu={dietMenu.subItems}
      currentPath="/diet/glp1-injection"
    >
      <SectionTitle
        title="GLP-1 주사란?"
        subtitle="GLP-1 수용체 작용제는 식욕 조절과 포만감 유지에 관여하는 기전을 활용해 체중 관리에 도움을 줄 수 있는 주사 치료입니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-6 mb-16">
        <div className="relative min-h-[320px] rounded-[28px] overflow-hidden border border-border-color/50 bg-section-bg">
          <Image
            src="/content/diet/glp1/overview.jpg"
            alt="GLP-1 주사 프로그램 비주얼"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
        </div>
        <div className="bg-card-bg rounded-[28px] border border-border-color p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">진료 시 함께 확인하는 항목</h3>
          <div className="space-y-4">
            {[
              "BMI와 체성분, 기존 질환, 복용 중인 약물 여부",
              "식사 패턴과 생활 습관, 수면과 활동량",
              "주사 치료 경험, 부작용 이력, 목표 체중",
              "치료 시작 후 용량 조절과 경과 관찰 계획",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <p className="text-sm text-text-muted">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-primary/5 border border-primary/15 p-5">
            <p className="text-sm text-foreground leading-relaxed">
              치료제 선택은 브랜드 선호보다 <strong className="text-primary">적응증과 생활 패턴의 적합성</strong>을 우선으로 판단합니다.
              DK서울의원은 초기 적응 과정과 부작용 모니터링까지 함께 안내합니다.
            </p>
          </div>
        </div>
      </div>

      {products.map((product) => (
        <div key={product.name} className="mb-16 last:mb-0">
          <SectionTitle
            title={product.name}
            subtitle={product.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative min-h-[280px] rounded-2xl overflow-hidden border border-border-color/50 bg-section-bg">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                sizes="(min-width: 768px) 32vw, 100vw"
                className={product.imageClassName}
              />
            </div>
            <div className="bg-card-bg rounded-2xl border border-border-color p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{product.name} 주요 정보</h3>
              <ul className="space-y-3">
                {product.details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <span className="text-sm text-text-muted">
                      <strong>{detail.label}:</strong> {detail.value}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border-color">
                <h4 className="font-semibold text-foreground mb-2">진료 시 주로 안내하는 포인트</h4>
                <ul className="space-y-2">
                  {product.effects.map((effect) => (
                    <li key={effect} className="text-sm text-text-muted">
                      - {effect}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      <SectionTitle
        title="GLP-1 주사 추천 대상"
        subtitle="다양한 건강 상태와 감량 목표를 고려해, 의료적 필요성이 있는 경우에 한해 적합성을 판단합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {recommendedCandidates.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <SectionTitle
        title="BMI 권고 사항 안내"
        subtitle="GLP-1 주사는 의학적 기준에 따라 처방되며, 체중 관리 목적이라도 적응증과 안전성 평가가 선행되어야 합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8">
        <div className="space-y-4">
          {[
            "일반적으로 BMI 30 이상이거나, BMI 27 이상이면서 체중 관련 동반 질환이 있는 경우 처방 기준을 검토합니다.",
            "DK서울의원은 전문의 진료를 통해 BMI, 동반 질환, 기존 약물 복용 여부를 함께 확인합니다.",
            "미용 목적의 무분별한 사용이 아닌, 의료적 필요성과 안전성을 우선으로 처방 여부를 결정합니다.",
            "처방 후에도 경과 관찰과 부작용 모니터링을 통해 용량과 지속 여부를 조정합니다.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
              <p className="text-sm text-text-muted">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
}
