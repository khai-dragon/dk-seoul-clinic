import PageHero from "@/components/PageHero";

const policySections = [
  {
    title: "수집 항목",
    body:
      "본 사이트의 상담 예약 및 문의 과정에서는 이름, 연락처, 관심 진료 분야, 희망 상담일, 상담 내용을 입력받을 수 있습니다.",
  },
  {
    title: "이용 목적",
    body:
      "수집된 정보는 상담 요청 확인, 예약 응대, 문의 회신, 진료 안내를 위한 목적에 한하여 사용됩니다.",
  },
  {
    title: "보관 및 정리",
    body:
      "수집된 정보의 보관 기간과 파기 기준은 관계 법령과 내부 운영 기준에 따라 관리되며, 필요한 범위를 넘어 보관하지 않습니다.",
  },
  {
    title: "유의 사항",
    body:
      "본 페이지는 상담 예약 및 문의 과정에서의 기본적인 개인정보 처리 범위를 이해하기 쉽게 정리한 안내 문서입니다.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="개인정보처리방침"
        subtitle="Privacy Policy"
        description="상담 예약과 문의 응대를 위해 필요한 개인정보 처리 범위를 안내합니다."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary/5 border border-primary/15 rounded-3xl p-6 sm:p-8 mb-10">
          <p className="text-sm text-foreground leading-relaxed">
            DK서울의원은 상담 예약과 문의 응대를 위해 필요한 범위 내에서 개인정보를 수집하며, 세부 운영 기준은 관련 법령과 병원 내부 정책에 따라 관리됩니다.
          </p>
        </div>

        <div className="space-y-5">
          {policySections.map((section) => (
            <section key={section.title} className="bg-card-bg border border-border-color rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground tracking-tight mb-3">{section.title}</h2>
              <p className="text-sm text-text-muted leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
