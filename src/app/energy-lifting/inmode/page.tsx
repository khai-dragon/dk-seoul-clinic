import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import ContentImageFrame from "@/components/ContentImageFrame";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "인모드 | DK서울의원",
  description: "DK서울의원 인모드 - 고주파와 펄스 기술을 결합하여 피부 탄력 개선과 윤곽 리프팅을 동시에",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

export default function InmodePage() {
  return (
    <SubPageLayout
      category="에너지 리프팅"
      categoryHref="/energy-lifting"
      title="인모드"
      subtitle="InMode"
      description="고주파(RF)와 펄스 기술을 결합하여 피부 탄력 개선과 윤곽 리프팅을 동시에 구현하는 복합 에너지 리프팅 시술입니다."
      sideMenu={energyLiftingMenu.subItems}
      currentPath="/energy-lifting/inmode"
    >
      {/* 인모드란 */}
      <SectionTitle
        title="인모드란"
        subtitle="인모드는 이스라엘 InMode사에서 개발한 복합 에너지 기반 리프팅 장비로, 고주파와 펄스 에너지를 동시에 활용하여 피부 심층부까지 효과적으로 에너지를 전달하는 시술입니다."
      />

      <ContentImageFrame
        src="/content/energy-lifting/inmode/device.webp"
        alt="인모드 장비 비주얼"
        className="w-full h-72 mb-16"
        fit="contain"
      />

      {/* 시술 원리 */}
      <SectionTitle
        title="시술 원리"
        subtitle="고주파(RF) 에너지와 펄스 기술을 결합하여 피부 표층부터 심층까지 복합적으로 자극합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">고주파(RF) 에너지</h3>
              <p className="text-sm text-text-muted">고주파 에너지가 피부 심층의 진피층과 피하지방층까지 침투하여 콜라겐 수축과 재생을 유도합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">펄스 에너지 결합</h3>
              <p className="text-sm text-text-muted">고주파와 펄스 에너지를 동시에 전달하여 피부 표층의 톤 개선과 심층의 리프팅 효과를 동시에 구현합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">실시간 온도 모니터링</h3>
              <p className="text-sm text-text-muted">시술 중 피부 온도를 실시간으로 모니터링하여 최적의 에너지를 안전하게 전달합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 장점 */}
      <SectionTitle
        title="인모드의 장점"
        subtitle="인모드만의 차별화된 강점을 소개합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="복합 에너지 시너지"
          description="고주파와 펄스 에너지의 결합으로 단일 에너지 시술 대비 뛰어난 시너지 효과를 제공합니다."
        />
        <InfoCard
          title="실시간 안전 시스템"
          description="시술 중 피부 온도를 실시간으로 모니터링하여 화상 위험을 낮추고 보다 안정적인 시술 환경을 돕습니다."
        />
        <InfoCard
          title="맞춤형 시술"
          description="다양한 핸드피스와 에너지 세팅으로 환자 개개인의 피부 상태에 맞는 맞춤 시술이 가능합니다."
        />
        <InfoCard
          title="탄력 + 톤 개선"
          description="피부 탄력 개선뿐만 아니라 피부톤 균일화, 모공 축소 등 복합적인 효과를 제공합니다."
        />
        <InfoCard
          title="비침습적 시술"
          description="절개 없이 에너지만으로 시술하여 일상생활에 지장 없이 빠른 복귀가 가능합니다."
        />
        <InfoCard
          title="다양한 부위 적용"
          description="얼굴, 목, 바디 등 다양한 부위에 맞춤 시술이 가능합니다."
        />
      </div>

      {/* 일반 초음파 리프팅과의 차이점 */}
      <SectionTitle
        title="일반 초음파 리프팅과 인모드의 차이점"
        subtitle="인모드는 기존 초음파 리프팅과 다른 원리로 작동하여 차별화된 결과를 제공합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color overflow-hidden mb-16">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-color bg-section-bg">
              <th className="px-6 py-4 text-left font-bold text-foreground">비교 항목</th>
              <th className="px-6 py-4 text-left font-bold text-primary">인모드</th>
              <th className="px-6 py-4 text-left font-bold text-text-muted">일반 초음파 리프팅</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-color">
              <td className="px-6 py-4 font-medium text-foreground">에너지 원리</td>
              <td className="px-6 py-4 text-text-muted">고주파 + 펄스 복합 에너지</td>
              <td className="px-6 py-4 text-text-muted">초음파(HIFU)</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-6 py-4 font-medium text-foreground">작용 깊이</td>
              <td className="px-6 py-4 text-primary font-medium">표층~심층 복합 작용</td>
              <td className="px-6 py-4 text-text-muted">주로 심층(SMAS층)</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-6 py-4 font-medium text-foreground">톤 개선</td>
              <td className="px-6 py-4 text-primary font-medium">동시 가능</td>
              <td className="px-6 py-4 text-text-muted">제한적</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-6 py-4 font-medium text-foreground">안전 시스템</td>
              <td className="px-6 py-4 text-primary font-medium">실시간 온도 모니터링</td>
              <td className="px-6 py-4 text-text-muted">일반 안전장치</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-foreground">통증</td>
              <td className="px-6 py-4 text-primary font-medium">비교적 적음</td>
              <td className="px-6 py-4 text-text-muted">보통~강함</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="추천 대상"
        subtitle="다음과 같은 고민이 있으신 분께 인모드를 추천합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <InfoCard
          title="탄력 + 톤 동시 개선"
          description="피부 탄력과 피부톤을 동시에 개선하고 싶으신 분"
        />
        <InfoCard
          title="안전한 시술 선호"
          description="실시간 모니터링 시스템으로 안전한 시술을 원하시는 분"
        />
        <InfoCard
          title="얼굴 윤곽 개선"
          description="흐릿해진 턱선과 얼굴 윤곽을 선명하게 개선하고 싶으신 분"
        />
        <InfoCard
          title="복합적 피부 고민"
          description="주름, 탄력, 톤, 모공 등 여러 가지 피부 고민을 한 번에 해결하고 싶으신 분"
        />
      </div>
    </SubPageLayout>
  );
}
