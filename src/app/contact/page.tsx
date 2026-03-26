import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="상담 예약"
        subtitle="Reservation"
        description="DK서울의원의 전문 의료진이 1:1 맞춤 상담을 통해 최적의 치료 계획을 설계해 드립니다."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                  <option value="stem-cell">줄기세포</option>
                  <option value="iv-therapy">수액 테라피</option>
                  <option value="skin-remodeling">스킨 리모델링</option>
                  <option value="energy-lifting">에너지 리프팅</option>
                  <option value="hyperbaric-oxygen">고압산소케어</option>
                  <option value="diet">다이어트</option>
                  <option value="wellness">웰니스</option>
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

              <div className="w-full aspect-[4/3] bg-section-bg flex items-center justify-center text-text-muted/50 text-[12px] tracking-widest uppercase mb-8">
                Map Area
              </div>
            </div>

            <div className="space-y-0 border-t border-border-color">
              {[
                { label: "주소", value: "서울특별시 강남구 (상세 주소 추후 업데이트)" },
                { label: "전화번호", value: "02-XXX-XXXX" },
                { label: "진료시간", value: "평일 10:00 – 19:00  |  토 10:00 – 15:00  |  일·공휴일 휴진" },
                { label: "주차 안내", value: "건물 내 주차장 이용 가능 (주차 요금 지원)" },
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
