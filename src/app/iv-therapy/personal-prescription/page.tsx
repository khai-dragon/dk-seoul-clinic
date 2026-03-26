import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export default function PersonalPrescriptionPage() {
  const ivMenu = menuData.find((m) => m.href === "/iv-therapy")!;

  return (
    <SubPageLayout
      category="수액 테라피"
      categoryHref="/iv-therapy"
      title="퍼스널수액 처방"
      subtitle="Personal IV Prescription"
      description="가정의학과 전문의의 심층 상담과 정밀 진단에 따라 진행되는 프리미엄 1:1 맞춤 수액 테라피입니다."
      sideMenu={ivMenu.subItems}
      currentPath="/iv-therapy/personal-prescription"
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
        title="퍼스널수액 처방이란?"
        subtitle="가정의학과 전문의 심층 상담 후 진단에 따라 진행되는 프리미엄 수액 테라피입니다."
      />

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1">
          <p className="text-text-muted leading-relaxed mb-4">
            퍼스널수액 처방은 DK서울의원의 가장 프리미엄한 수액 프로그램으로,
            가정의학과 전문의가 환자의 건강 상태를 심층적으로 분석한 후
            세상에 단 하나뿐인 나만을 위한 수액을 설계하는 완전 맞춤형 서비스입니다.
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            기존 프로그램화된 수액과 달리, 혈액검사, 체성분 분석, 생활습관 평가 등
            종합적인 진단 데이터를 바탕으로 성분 하나하나를 환자에게 최적화하여 배합합니다.
          </p>
          <p className="text-text-muted leading-relaxed">
            복합적인 건강 고민이 있거나, 일반 수액으로 만족스러운 효과를 얻지 못한 분,
            최상의 건강 관리를 원하는 분께 추천하는 프리미엄 서비스입니다.
          </p>
        </div>
        <div className="lg:w-80 shrink-0 bg-section-bg rounded-2xl aspect-[4/3] flex items-center justify-center text-text-muted">
          퍼스널수액 처방 이미지 영역
        </div>
      </div>

      {/* 퍼스널수액의 차별점 */}
      <SectionTitle
        title="퍼스널수액 처방의 차별점"
        subtitle="일반 수액 프로그램과 다른, DK서울의원만의 프리미엄 맞춤 시스템입니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="심층 1:1 전문의 상담"
          description="가정의학과 전문의가 충분한 시간을 들여 건강 이력, 현재 증상, 생활습관, 건강 목표를 면밀히 파악합니다."
        />
        <InfoCard
          title="종합 정밀 진단"
          description="혈액검사, 체성분 분석, 비타민·미네랄 수치 검사 등 정밀 진단을 통해 체내 상태를 정확히 파악합니다."
        />
        <InfoCard
          title="완전 맞춤 성분 설계"
          description="진단 데이터를 기반으로 성분 종류, 농도, 배합 비율을 환자 개인에게 100% 최적화하여 설계합니다."
        />
        <InfoCard
          title="지속적 건강 관리"
          description="1회 시술로 끝나지 않고, 정기적인 모니터링과 수액 조정을 통해 지속적인 건강 관리를 제공합니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="이런 분께 추천합니다"
        subtitle="다음과 같은 분께 퍼스널수액 처방을 추천합니다."
      />

      <div className="bg-section-bg rounded-2xl p-6 sm:p-8 mb-16">
        <ul className="space-y-3">
          {[
            "피로, 스트레스, 면역력 저하 등 복합적인 건강 고민이 있는 분",
            "기존 수액 치료로 만족스러운 효과를 얻지 못한 분",
            "정밀 진단을 바탕으로 나에게 딱 맞는 수액을 원하는 분",
            "최상의 건강 컨디션을 유지하고 싶은 분",
            "VIP 프리미엄 건강 관리 서비스를 원하는 분",
            "장기적이고 체계적인 건강 관리 계획이 필요한 분",
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
        subtitle="퍼스널수액 처방은 다음과 같은 프리미엄 과정으로 진행됩니다."
      />

      <div className="space-y-6 mb-16">
        {[
          { step: "01", title: "예약 및 접수", desc: "퍼스널수액 처방 전용 예약을 통해 충분한 상담 시간을 확보합니다." },
          { step: "02", title: "심층 전문의 상담", desc: "가정의학과 전문의가 건강 이력, 현재 증상, 생활습관, 건강 목표를 심층적으로 상담합니다." },
          { step: "03", title: "종합 정밀 진단", desc: "혈액검사, 체성분 분석 등 종합 검사를 통해 체내 영양 상태와 건강 지표를 정밀 분석합니다." },
          { step: "04", title: "맞춤 수액 설계", desc: "진단 결과를 바탕으로 전문의가 환자만을 위한 수액 성분과 용량을 직접 설계합니다." },
          { step: "05", title: "프리미엄 수액 투여", desc: "VIP 라운지에서 편안하게 맞춤 수액 치료를 받으시며, 전문 의료진이 전 과정을 케어합니다." },
          { step: "06", title: "사후 관리 & 모니터링", desc: "시술 후 건강 변화를 모니터링하고, 다음 시술 시 수액 배합을 최적화합니다." },
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
        <h3 className="text-xl sm:text-2xl font-bold mb-3">퍼스널수액 처방 상담 받기</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          가정의학과 전문의의 심층 상담을 통해 나만을 위한 프리미엄 맞춤 수액을 처방받으세요.
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
