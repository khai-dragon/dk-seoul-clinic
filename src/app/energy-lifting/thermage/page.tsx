import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import ContentImageFrame from "@/components/ContentImageFrame";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "써마지 FLX | DK서울의원",
  description: "DK서울의원 써마지 FLX - 고주파 에너지로 콜라겐을 수축·재생하여 피부 탄력을 회복하는 프리미엄 리프팅 시술",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

export default function ThermagePage() {
  return (
    <SubPageLayout
      category="에너지 리프팅"
      categoryHref="/energy-lifting"
      title="써마지 FLX"
      subtitle="Thermage FLX"
      description="고주파(RF) 에너지를 활용하여 피부 깊은 층의 콜라겐을 수축·재생시켜, 절개 없이 강력한 리프팅과 탄력 회복을 실현합니다."
      sideMenu={energyLiftingMenu.subItems}
      currentPath="/energy-lifting/thermage"
    >
      {/* 써마지 FLX란 */}
      <SectionTitle
        title="써마지 FLX란"
        subtitle="써마지 FLX는 미국 Solta Medical사에서 개발한 4세대 써마지로, 고주파(RF) 에너지를 피부 깊숙이 전달하여 콜라겐을 수축하고 재생시키는 비침습적 리프팅 시술입니다."
      />

      <ContentImageFrame
        src="/content/energy-lifting/thermage/device.jpg"
        alt="써마지 FLX 장비 비주얼"
        className="w-full h-72 mb-16"
        overlay
      />

      {/* 시술 원리 */}
      <SectionTitle
        title="시술 원리"
        subtitle="고주파(RF) 에너지를 피부 심층까지 전달하여 콜라겐 섬유를 즉각적으로 수축시키고, 장기적으로 새로운 콜라겐 생성을 촉진합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">고주파 에너지 전달</h3>
              <p className="text-sm text-text-muted">RF(Radio Frequency) 에너지를 피부 심층부(진피층~피하지방층)까지 균일하게 전달합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">콜라겐 수축</h3>
              <p className="text-sm text-text-muted">열 에너지에 의해 기존 콜라겐 섬유가 즉각적으로 수축되어 타이트닝 효과가 나타납니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">콜라겐 재생</h3>
              <p className="text-sm text-text-muted">시술 후 2~6개월에 걸쳐 새로운 콜라겐이 지속적으로 생성되어 장기적인 리프팅 효과를 제공합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 부위별 전용 시술팁 */}
      <SectionTitle
        title="부위별 최적화된 전용 시술팁"
        subtitle="써마지 FLX는 시술 부위에 따라 최적화된 전용 팁을 사용하여 보다 정밀하고 효과적인 시술을 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <ContentImageFrame
            src="/content/energy-lifting/thermage/total-tip.jpg"
            alt="써마지 토탈팁 비주얼"
            className="w-full h-40 mb-4"
            fit="contain"
          />
          <h3 className="text-lg font-bold text-foreground mb-2">토탈팁 (Total Tip)</h3>
          <p className="text-sm text-text-muted leading-relaxed">얼굴 전체의 리프팅과 타이트닝에 최적화된 팁으로, 넓은 면적을 균일하게 시술합니다.</p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <ContentImageFrame
            src="/content/energy-lifting/thermage/eye-tip.jpg"
            alt="써마지 아이팁 비주얼"
            className="w-full h-40 mb-4"
            fit="contain"
          />
          <h3 className="text-lg font-bold text-foreground mb-2">아이팁 (Eye Tip)</h3>
          <p className="text-sm text-text-muted leading-relaxed">눈가 주름과 처진 눈꺼풀을 개선하기 위해 특별히 설계된 팁으로, 섬세한 눈 주변 시술이 가능합니다.</p>
        </div>
        <div className="bg-card-bg rounded-2xl border border-border-color p-6">
          <ContentImageFrame
            src="/content/energy-lifting/thermage/device.jpg"
            alt="써마지 바디 시술 비주얼"
            className="w-full h-40 mb-4"
          />
          <h3 className="text-lg font-bold text-foreground mb-2">바디팁 (Body Tip)</h3>
          <p className="text-sm text-text-muted leading-relaxed">복부, 팔뚝, 허벅지 등 넓은 바디 부위의 피부 타이트닝에 최적화된 팁입니다.</p>
        </div>
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="추천 대상"
        subtitle="다음과 같은 고민이 있으신 분께 써마지 FLX를 추천합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="피부 탄력 저하"
          description="나이가 들면서 피부 탄력이 떨어지고 처짐이 느껴지시는 분"
        />
        <InfoCard
          title="얼굴 윤곽 개선"
          description="턱선이 흐려지고 얼굴 윤곽이 무너져 보이시는 분"
        />
        <InfoCard
          title="눈가·이마 주름"
          description="눈가 잔주름, 이마 주름 등 얼굴 전반의 주름이 신경 쓰이시는 분"
        />
        <InfoCard
          title="비침습 시술 선호"
          description="절개 없이 자연스럽게 리프팅 효과를 원하시는 분"
        />
      </div>

      {/* 시술 부위 */}
      <SectionTitle
        title="시술 부위"
        subtitle="써마지 FLX는 얼굴뿐만 아니라 다양한 부위에 시술이 가능합니다."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {["이마·눈가", "볼·턱선", "목·데콜테", "복부·팔뚝"].map((area) => (
          <div key={area} className="bg-card-bg rounded-2xl border border-border-color p-5 text-center">
            <p className="text-sm font-medium text-foreground">{area}</p>
          </div>
        ))}
      </div>

      {/* DK서울의원 특징 */}
      <SectionTitle
        title="DK서울의원 써마지 FLX의 특징"
        subtitle="써마지 마스터를 보유한 병원으로서, 풍부한 시술 경험과 노하우를 바탕으로 최적의 결과를 제공합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <InfoCard
          title="써마지 마스터 보유"
          description="숙련된 시술 경험을 바탕으로 부위별 에너지 전달과 샷 구성을 보다 정교하게 설계합니다."
        />
        <InfoCard
          title="정품 인증 장비"
          description="정품 써마지 FLX 장비와 정품 시술팁을 기준으로 일관된 시술 환경을 유지합니다."
        />
        <InfoCard
          title="맞춤형 시술 설계"
          description="환자의 피부 상태와 고민에 따라 부위별 샷수와 에너지 레벨을 세밀하게 조절합니다."
        />
      </div>
    </SubPageLayout>
  );
}
