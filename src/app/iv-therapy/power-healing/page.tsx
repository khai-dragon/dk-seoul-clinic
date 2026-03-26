import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export default function PowerHealingPage() {
  const ivMenu = menuData.find((m) => m.href === "/iv-therapy")!;

  return (
    <SubPageLayout
      category="수액 테라피"
      categoryHref="/iv-therapy"
      title="파워 힐링"
      subtitle="Power Healing IV Therapy"
      description="에너지 충전, 운동 능력 향상, 남성 스태미나 강화를 위한 프리미엄 수액 테라피. 활력 넘치는 일상과 최상의 퍼포먼스를 만들어 드립니다."
      sideMenu={ivMenu.subItems}
      currentPath="/iv-therapy/power-healing"
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
        title="파워 힐링 수액이란?"
        subtitle="에너지 충전, 운동 능력 향상, 남성 스태미나 강화에 특화된 프리미엄 수액 프로그램입니다."
      />

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1">
          <p className="text-text-muted leading-relaxed mb-4">
            파워 힐링 수액은 에너지 레벨 향상, 운동 퍼포먼스 극대화, 남성 스태미나 강화에 필요한
            고농도 영양소를 배합한 프리미엄 수액입니다. 격한 운동 후 근육 회복, 바쁜 일상에서의
            체력 충전, 남성 활력 증진까지 파워풀한 에너지를 공급합니다.
          </p>
          <p className="text-text-muted leading-relaxed">
            DK서울의원의 가정의학과 전문의가 환자의 체력 상태, 운동 습관, 생활 패턴을 종합 진단한 후,
            최상의 퍼포먼스를 위한 최적의 성분을 개인별로 설계합니다.
          </p>
        </div>
        <div className="lg:w-80 shrink-0 bg-section-bg rounded-2xl aspect-[4/3] flex items-center justify-center text-text-muted">
          파워 힐링 이미지 영역
        </div>
      </div>

      {/* 주요 성분 및 효과 */}
      <SectionTitle
        title="주요 성분 및 효과"
        subtitle="에너지 부스팅, 운동 능력 향상, 남성 활력에 핵심적인 고농도 영양 성분을 배합합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="고농도 비타민 B 복합체"
          description="에너지 대사를 활성화하여 만성 피로를 해소하고, 체내 에너지 생성 효율을 극대화합니다."
        />
        <InfoCard
          title="BCAA & 아미노산 복합체"
          description="운동 후 근육 회복을 촉진하고, 근력 유지 및 운동 퍼포먼스 향상에 필수적인 아미노산을 공급합니다."
        />
        <InfoCard
          title="아르기닌 & 카르니틴"
          description="혈류 개선과 지방 연소를 촉진하여 남성 스태미나 강화와 운동 능력 향상에 도움을 줍니다."
        />
        <InfoCard
          title="아연 & 셀레늄"
          description="남성 호르몬 생성을 돕고 면역 기능을 강화하며, 항산화 작용으로 세포 손상을 예방합니다."
        />
        <InfoCard
          title="타우린 & 코엔자임 Q10"
          description="세포 에너지 생산을 촉진하고 심혈관 기능을 개선하여 전반적인 활력과 지구력을 높입니다."
        />
        <InfoCard
          title="고농도 비타민 C"
          description="강력한 항산화 작용으로 운동 후 산화 스트레스를 줄이고, 면역력 강화와 조직 회복을 지원합니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="이런 분께 추천합니다"
        subtitle="다음과 같은 증상이나 고민이 있으신 분께 파워 힐링 수액을 추천합니다."
      />

      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-16">
        <ul className="space-y-3">
          {[
            "격한 운동이나 트레이닝 후 빠른 근육 회복이 필요한 분",
            "운동 퍼포먼스와 지구력을 향상시키고 싶은 분",
            "남성 스태미나와 활력 저하가 느껴지는 분",
            "바쁜 업무로 만성적인 에너지 부족을 느끼는 분",
            "체력 저하로 운동 효과가 떨어지는 분",
            "과로와 스트레스로 전반적인 컨디션이 저하된 분",
            "40대 이상 남성으로 남성 기능과 활력 개선을 원하는 분",
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
        subtitle="파워 힐링 수액 테라피는 다음과 같은 과정으로 진행됩니다."
      />

      <div className="space-y-6 mb-16">
        {[
          { step: "01", title: "전문의 상담", desc: "가정의학과 전문의가 체력 상태, 수술 이력, 면역 기능을 종합적으로 상담합니다." },
          { step: "02", title: "정밀 진단", desc: "혈액검사를 통해 면역 수치, 영양 상태, 염증 지표를 정확히 파악합니다." },
          { step: "03", title: "맞춤 수액 설계", desc: "진단 결과를 바탕으로 체력 회복과 면역 강화에 최적화된 성분과 용량을 설계합니다." },
          { step: "04", title: "수액 투여", desc: "VIP 라운지에서 편안하게 수액 치료를 받으시며, 전문 의료진이 상태를 모니터링합니다." },
          { step: "05", title: "사후 관리 안내", desc: "시술 후 체력 관리 방법과 면역력 유지를 위한 생활습관 가이드를 안내해 드립니다." },
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
        <h3 className="text-xl sm:text-2xl font-bold mb-3">파워 힐링 수액 상담 받기</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          전문의와의 1:1 상담을 통해 나에게 맞는 체력 회복 수액을 처방받으세요.
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
