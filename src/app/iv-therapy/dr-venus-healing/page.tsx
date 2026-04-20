import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import ContentImageFrame from "@/components/ContentImageFrame";
import { menuData } from "@/lib/menu-data";

export default function DrVenusHealingPage() {
  const ivMenu = menuData.find((m) => m.href === "/iv-therapy")!;

  return (
    <SubPageLayout
      category="수액 테라피"
      categoryHref="/iv-therapy"
      title="닥터 비너스 힐링"
      subtitle="Dr. Venus Healing IV Therapy"
      description="여성 컨디션 관리와 피부·영양 밸런스를 함께 살피는 프리미엄 수액 테라피입니다."
      sideMenu={ivMenu.subItems}
      currentPath="/iv-therapy/dr-venus-healing"
    >
      {/* 공통 안내 */}
      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-12">
        <h3 className="text-lg font-bold text-foreground mb-3">맞춤 수액 배합이 중요한 이유</h3>
        <p className="text-sm text-text-muted leading-relaxed">
          같은 수액이라도 환자의 건강 상태, 생활습관, 영양 균형에 따라 효과가 달라집니다.
          DK서울의원은 가정의학과 전문의의 정밀 진단을 바탕으로 개인별 최적의 수액을 설계하여 효과를 극대화합니다.
        </p>
      </div>

      {/* 수액 설명 */}
      <SectionTitle
        title="닥터 비너스 힐링 수액이란?"
        subtitle="여성의 아름다움과 건강을 내면에서부터 케어하는 프리미엄 수액 프로그램입니다."
      />

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1">
          <p className="text-text-muted leading-relaxed mb-4">
            닥터 비너스 힐링 수액은 여성의 호르몬 밸런스, 피부 컨디션, 영양 관리 등을 함께 살펴볼 때
            검토할 수 있는 프리미엄 수액입니다. 단순한 피부 미용을 넘어
            여성의 라이프사이클에 맞춘 근본적인 건강 관리를 제공합니다.
          </p>
          <p className="text-text-muted leading-relaxed">
            DK서울의원의 가정의학과 전문의가 여성 건강 상태, 호르몬 균형, 영양 결핍 여부를 종합적으로 진단한 후,
            개인별 최적의 성분을 설계합니다.
          </p>
        </div>
        <ContentImageFrame
          src="/content/iv-therapy/dr-venus-healing.jpg"
          alt="닥터 비너스 힐링 수액 테라피 비주얼"
          className="lg:w-80 shrink-0 aspect-[4/3]"
          overlay
        />
      </div>

      {/* 주요 성분 및 효과 */}
      <SectionTitle
        title="주요 성분 및 효과"
        subtitle="여성 건강과 미용에 핵심적인 고농도 영양 성분을 배합합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="고농도 글루타치온"
          description="강력한 항산화 작용으로 멜라닌 생성을 억제하고, 피부 미백과 맑은 톤 형성에 도움을 줍니다."
        />
        <InfoCard
          title="고농도 비타민 C"
          description="피부 컨디션과 영양 균형을 함께 살펴볼 때 자주 언급되는 성분으로, 개인 상태에 따라 적용 방향이 달라질 수 있습니다."
        />
        <InfoCard
          title="비오틴 & 판토텐산"
          description="모발과 피부 컨디션 관리 관점에서 자주 언급되는 영양소로, 개인 상태에 따라 적용이 달라질 수 있습니다."
        />
        <InfoCard
          title="여성 호르몬 밸런스 성분"
          description="호르몬 변화로 인한 컨디션 관리 상담 시 참고될 수 있는 성분으로, 실제 적용 여부는 진료 판단에 따라 결정됩니다."
        />
        <InfoCard
          title="알파리포산"
          description="비타민 C·E보다 강력한 항산화제로 세포를 보호하고 체내 노화를 지연시킵니다."
        />
        <InfoCard
          title="철분 & 엽산"
          description="여성에게 부족하기 쉬운 필수 영양소를 보충하여 빈혈 예방과 전반적인 활력을 증진합니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="이런 분께 추천합니다"
        subtitle="다음과 같은 피부 고민이 있으신 분께 닥터 비너스 힐링 수액을 추천합니다."
      />

      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-16">
        <ul className="space-y-3">
          {[
            "갱년기 증상(안면홍조, 불면, 기분 변화 등)으로 불편하신 분",
            "탈모가 진행되거나 모발이 가늘어지고 있는 분",
            "호르몬 불균형으로 피부 트러블이 반복되는 분",
            "피부 탄력 저하와 칙칙한 피부톤을 개선하고 싶은 분",
            "출산 후 영양 보충과 체력 회복이 필요한 분",
            "만성 피로와 빈혈 증상이 있는 여성분",
            "피부 시술과 함께 내면 케어를 병행하고 싶은 분",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 시술 과정 */}
      <SectionTitle
        title="시술 과정 안내"
        subtitle="닥터 비너스 힐링 수액 테라피는 다음과 같은 과정으로 진행됩니다."
      />

      <div className="space-y-6 mb-16">
        {[
          { step: "01", title: "전문의 상담", desc: "가정의학과 전문의가 피부 상태, 생활습관, 피부 고민을 종합적으로 상담합니다." },
          { step: "02", title: "피부 진단", desc: "피부 상태와 영양 결핍 여부를 파악하여 수액 배합에 반영합니다." },
          { step: "03", title: "맞춤 수액 설계", desc: "진단 결과를 바탕으로 피부 미용에 최적화된 성분과 용량을 설계합니다." },
          { step: "04", title: "수액 투여", desc: "VIP 라운지에서 편안하게 수액 치료를 받으시며, 전문 의료진이 상태를 모니터링합니다." },
          { step: "05", title: "사후 관리 안내", desc: "시술 후 피부 관리 방법과 지속적인 미용 케어 계획을 안내해 드립니다." },
        ].map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">
              {item.step}
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-center text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">닥터 비너스 힐링 수액 상담 받기</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          전문의와의 1:1 상담을 통해 나에게 맞는 피부 미용 수액을 처방받으세요.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-colors"
        >
          상담 예약하기
        </Link>
      </div>
    </SubPageLayout>
  );
}
