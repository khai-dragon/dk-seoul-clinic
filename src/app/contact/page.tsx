import PageHero from "@/components/PageHero";
import { menuData } from "@/lib/menu-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="상담 예약"
        subtitle="Reservation"
        description="DK서울의원의 전문 의료진이 1:1 맞춤 상담을 통해 최적의 치료 계획을 설계해 드립니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-card-bg border border-border-color rounded-3xl p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div>
              <p className="font-serif text-accent text-lg italic tracking-wide mb-3">Reservation Guide</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                상담 목적에 맞는<br />진료 분야를 먼저 선택해 주세요
              </h2>
              <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed max-w-2xl">
                현재 페이지는 상담 접수 흐름과 진료 카테고리 구조를 먼저 반영한 상태입니다.
                실제 연락 채널, 상세 주소, 지도 연동 정보는 운영 정보가 확정되는 시점에 최종 버전으로 업데이트됩니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {[
                { title: "1:1 맞춤 상담", desc: "관심 진료와 고민 부위를 남기면 상담 흐름을 빠르게 안내할 수 있습니다." },
                { title: "분야별 연결", desc: "줄기세포, 수액, 리프팅, 웰니스 등 현재 사이트 카테고리 기준으로 정리됩니다." },
                { title: "운영 정보 업데이트 예정", desc: "대표번호, 지도, 예약 채널은 최종 운영안 기준으로 이어서 반영됩니다." },
              ].map((item) => (
                <div key={item.title} className="border border-border-color rounded-2xl p-5 bg-section-bg/50">
                  <h3 className="text-[15px] font-semibold text-foreground mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <p className="font-serif text-accent text-lg italic tracking-wide mb-2">Online Reservation</p>
            <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">온라인 상담 예약</h2>
            <div className="gold-line mb-10" />

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-medium text-foreground/85 tracking-wide uppercase mb-2">이름 *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 border border-border-color bg-white focus:outline-none focus:border-accent transition-colors text-[14px]"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-foreground/85 tracking-wide uppercase mb-2">연락처 *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3.5 border border-border-color bg-white focus:outline-none focus:border-accent transition-colors text-[14px]"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-medium text-foreground/85 tracking-wide uppercase mb-2">관심 진료 분야 *</label>
                <select className="w-full px-4 py-3.5 border border-border-color bg-white focus:outline-none focus:border-accent transition-colors text-[14px] text-text-muted">
                  <option value="">선택해주세요</option>
                  {menuData.map((item) => (
                    <option key={item.href} value={item.href}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-medium text-foreground/85 tracking-wide uppercase mb-2">희망 상담일</label>
                <input
                  type="date"
                  className="w-full px-4 py-3.5 border border-border-color bg-white focus:outline-none focus:border-accent transition-colors text-[14px]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-medium text-foreground/85 tracking-wide uppercase mb-2">상담 내용</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3.5 border border-border-color bg-white focus:outline-none focus:border-accent transition-colors text-[14px] resize-none"
                  placeholder="궁금하신 점이나 상담받고 싶은 내용을 적어주세요."
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="privacy" className="mt-1 accent-accent" />
                <label htmlFor="privacy" className="text-[13px] text-text-muted">
                  개인정보 수집 및 이용에 동의합니다. (상담 목적으로만 사용됩니다)
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-primary-light transition-colors"
              >
                Submit Reservation
              </button>
            </form>
          </div>

          {/* Clinic Info */}
          <div className="space-y-10">
            <div>
              <p className="font-serif text-accent text-lg italic tracking-wide mb-2">Location</p>
              <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">오시는 길</h2>
              <div className="gold-line mb-10" />

              <div className="w-full aspect-[4/3] bg-section-bg border border-border-color rounded-3xl flex flex-col items-center justify-center text-center px-8 text-text-muted/60 mb-8">
                <p className="text-[11px] tracking-[0.16em] uppercase text-accent mb-3">Map Update Pending</p>
                <p className="text-lg font-semibold text-foreground mb-2">예약 확정 후 상세 위치를 안내드립니다</p>
                <p className="text-[13px] leading-relaxed max-w-sm">
                  현재는 온라인 예약 접수를 우선 운영하고 있으며, 상세 주소와 내원 동선은 예약 또는 상담 단계에서 개별 안내드립니다.
                </p>
              </div>
            </div>

            <div className="space-y-0 border-t border-border-color">
              {[
                { label: "주소", value: "서울 강남권 진료 안내, 예약 확정 후 상세 위치 개별 안내" },
                { label: "예약 문의", value: "현재는 홈페이지 예약 폼을 통한 접수를 우선 운영하고 있습니다." },
                { label: "진료시간", value: "평일 10:00 – 19:00  |  토 10:00 – 15:00  |  일·공휴일 휴진" },
                { label: "주차 안내", value: "주차 및 내원 동선은 예약 확정 시 함께 안내드립니다." },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 py-5 border-b border-border-color">
                  <span className="text-[12px] font-medium tracking-wide text-accent uppercase w-20 shrink-0 pt-0.5">{item.label}</span>
                  <p className="text-[13px] text-text-muted">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
