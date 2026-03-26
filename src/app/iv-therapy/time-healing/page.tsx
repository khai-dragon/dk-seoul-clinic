import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export default function TimeHealingPage() {
  const ivMenu = menuData.find((m) => m.href === "/iv-therapy")!;

  return (
    <SubPageLayout
      category="수액 테라피"
      categoryHref="/iv-therapy"
      title="타임 힐링"
      subtitle="Time Healing IV Therapy"
      description="노화 방지와 에너지 회복을 위한 프리미엄 수액 테라피. 세포 단위의 항산화로 젊음과 활력을 되찾아 드립니다."
      sideMenu={ivMenu.subItems}
      currentPath="/iv-therapy/time-healing"
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
        title="타임 힐링 수액이란?"
        subtitle="노화 방지와 에너지 회복에 특화된 프리미엄 수액 프로그램입니다."
      />

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1">
          <p className="text-text-muted leading-relaxed mb-4">
            타임 힐링 수액은 세포 노화를 지연시키고 전신 활력을 회복하는 데 필요한 고농도 항산화 영양소를 배합한
            프리미엄 수액입니다. 나이가 들수록 체내 항산화 능력이 저하되고 에너지 생성이 감소하는데,
            타임 힐링 수액이 이를 효과적으로 보충합니다.
          </p>
          <p className="text-text-muted leading-relaxed">
            DK서울의원의 가정의학과 전문의가 환자의 노화 정도와 건강 상태를 정밀 진단한 후,
            안티에이징에 최적화된 성분을 개인별로 설계합니다.
          </p>
        </div>
        <div className="lg:w-80 shrink-0 bg-section-bg rounded-2xl aspect-[4/3] flex items-center justify-center text-text-muted">
          타임 힐링 이미지 영역
        </div>
      </div>

      {/* 주요 성분 및 효과 */}
      <SectionTitle
        title="주요 성분 및 효과"
        subtitle="안티에이징에 핵심적인 고농도 항산화 성분을 배합합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="고농도 글루타치온"
          description="체내 최강의 항산화 물질로 활성산소를 제거하고, 세포 노화를 지연시켜 젊은 세포 상태를 유지합니다."
        />
        <InfoCard
          title="코엔자임 Q10"
          description="세포 에너지 공장인 미토콘드리아의 기능을 활성화하여 전신 에너지 생성과 활력을 회복합니다."
        />
        <InfoCard
          title="고농도 비타민 C"
          description="콜라겐 합성 촉진과 강력한 항산화 작용으로 피부 노화와 전신 노화를 동시에 예방합니다."
        />
        <InfoCard
          title="셀레늄 & 아연"
          description="세포 보호와 면역 기능 강화에 필수적인 미량 미네랄로 건강한 노화를 지원합니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="이런 분께 추천합니다"
        subtitle="다음과 같은 증상이나 고민이 있으신 분께 타임 힐링 수액을 추천합니다."
      />

      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-16">
        <ul className="space-y-3">
          {[
            "전반적인 활력 저하와 체력 감소가 느껴지는 분",
            "항산화 케어와 안티에이징이 필요한 분",
            "피부와 신체의 노화 징후가 나타나기 시작한 분",
            "만성 피로로 에너지가 부족한 분",
            "젊고 건강한 신체 상태를 오래 유지하고 싶은 분",
            "40대 이상으로 예방적 안티에이징을 원하는 분",
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
        subtitle="타임 힐링 수액 테라피는 다음과 같은 과정으로 진행됩니다."
      />

      <div className="space-y-6 mb-16">
        {[
          { step: "01", title: "전문의 상담", desc: "가정의학과 전문의가 노화 정도, 생활습관, 건강 이력을 종합적으로 상담합니다." },
          { step: "02", title: "정밀 진단", desc: "혈액검사를 통해 항산화 수치, 비타민·미네랄 수치, 호르몬 밸런스를 파악합니다." },
          { step: "03", title: "맞춤 수액 설계", desc: "진단 결과를 바탕으로 안티에이징에 최적화된 성분과 용량을 설계합니다." },
          { step: "04", title: "수액 투여", desc: "VIP 라운지에서 편안하게 수액 치료를 받으시며, 전문 의료진이 상태를 모니터링합니다." },
          { step: "05", title: "사후 관리 안내", desc: "시술 후 항노화 생활습관과 지속적인 안티에이징 케어 계획을 안내해 드립니다." },
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
        <h3 className="text-xl sm:text-2xl font-bold mb-3">타임 힐링 수액 상담 받기</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          전문의와의 1:1 상담을 통해 나에게 맞는 안티에이징 수액을 처방받으세요.
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
