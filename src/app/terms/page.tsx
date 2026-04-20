import PageHero from "@/components/PageHero";

const termSections = [
  {
    title: "사이트 이용 안내",
    body:
      "본 사이트는 DK서울의원의 진료 분야와 상담 예약 정보를 안내하기 위한 목적으로 운영됩니다.",
  },
  {
    title: "콘텐츠 성격",
    body:
      "사이트 내 소개 자료는 일반적인 진료 안내를 위한 것으로, 개인별 상태에 따른 실제 치료 계획은 의료진 상담 후 결정됩니다.",
  },
  {
    title: "예약 및 문의",
    body:
      "온라인 예약 및 문의 기능은 병원 안내 기준과 운영 정책에 따라 접수 방식, 확인 절차, 상담 흐름이 조정될 수 있습니다.",
  },
  {
    title: "개정 안내",
    body:
      "본 약관과 사이트 안내 문구는 관계 법령, 서비스 운영 방식, 병원 정책 변경에 따라 필요한 범위에서 개정될 수 있습니다.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="이용약관"
        subtitle="Terms of Use"
        description="사이트 이용 목적과 콘텐츠 안내 범위에 대한 기본 기준을 안내합니다."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-card-bg border border-border-color rounded-3xl p-6 sm:p-8 mb-10">
          <p className="text-sm text-text-muted leading-relaxed">
            본 이용약관은 사이트 이용 목적과 콘텐츠 안내 범위를 이해하기 위한 기본 기준을 정리한 문서이며, 실제 운영 과정에서는 관련 법령과 병원 정책이 함께 적용됩니다.
          </p>
        </div>

        <div className="space-y-5">
          {termSections.map((section) => (
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
