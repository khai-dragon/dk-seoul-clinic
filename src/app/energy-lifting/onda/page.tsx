import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import ContentImageFrame from "@/components/ContentImageFrame";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "온다 리프팅 | DK서울의원",
  description: "DK서울의원 온다 리프팅 - 마이크로웨이브 에너지로 지방 감소와 피부 타이트닝을 동시에 실현",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

export default function OndaPage() {
  return (
    <SubPageLayout
      category="에너지 리프팅"
      categoryHref="/energy-lifting"
      title="온다 리프팅"
      subtitle="ONDA Lifting"
      description="마이크로웨이브(Microwave) 에너지를 활용하여 지방 감소와 피부 타이트닝을 동시에 실현하는 차세대 바디·페이스 리프팅 시술입니다."
      sideMenu={energyLiftingMenu.subItems}
      currentPath="/energy-lifting/onda"
    >
      {/* 온다 리프팅이란 */}
      <SectionTitle
        title="온다 리프팅이란"
        subtitle="온다는 이탈리아 DEKA사에서 개발한 마이크로웨이브 기반의 리프팅 장비로, Coolwaves 기술을 통해 선택적으로 지방세포를 파괴하고 피부를 타이트닝하는 시술입니다."
      />

      <ContentImageFrame
        src="/content/energy-lifting/onda/device.webp"
        alt="온다 리프팅 장비 비주얼"
        className="w-full h-72 mb-16"
        fit="contain"
      />

      {/* 시술 원리 */}
      <SectionTitle
        title="시술 원리"
        subtitle="두 가지 핸드피스의 이중 효과로 지방 감소와 피부 타이트닝을 동시에 실현합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">딥 핸드피스 (Deep)</h3>
              <p className="text-sm text-text-muted">마이크로웨이브 에너지가 피하지방층까지 깊게 침투하여 지방세포를 선택적으로 파괴하고, 지방 두께를 줄여줍니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">슈퍼피셜 핸드피스 (Superficial)</h3>
              <p className="text-sm text-text-muted">진피층에 에너지를 전달하여 콜라겐 수축과 재생을 유도하고, 피부 타이트닝 효과를 제공합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">이중 효과</h3>
              <p className="text-sm text-text-muted">두 핸드피스를 병행하여 지방 감소와 피부 타이트닝을 한 번의 시술로 동시에 해결합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 장점 */}
      <SectionTitle
        title="온다 리프팅의 장점"
        subtitle="기존 레이저 리프팅과 비교하여 온다만의 차별화된 강점을 소개합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="지방 감소 + 타이트닝"
          description="한 번의 시술로 지방 감소와 피부 타이트닝을 동시에 해결하여 시술 효율이 뛰어납니다."
        />
        <InfoCard
          title="선택적 지방 파괴"
          description="마이크로웨이브가 지방세포에만 선택적으로 반응하여 주변 조직 손상을 최소화합니다."
        />
        <InfoCard
          title="비침습적 시술"
          description="절개나 주사 없이 마이크로웨이브 에너지만으로 시술하여 안전하고 편안합니다."
        />
        <InfoCard
          title="짧은 다운타임"
          description="비교적 빠른 일상 복귀를 기대하는 분들이 상담 시 검토하는 바디·페이스 리프팅 옵션입니다."
        />
        <InfoCard
          title="넓은 시술 범위"
          description="얼굴, 턱선, 팔뚝, 복부, 허벅지 등 다양한 부위에 시술이 가능합니다."
        />
        <InfoCard
          title="점진적 효과"
          description="시술 후 2~3개월에 걸쳐 지방이 자연스럽게 배출되고 피부가 타이트닝됩니다."
        />
      </div>

      {/* 기존 레이저 리프팅과 비교 */}
      <SectionTitle
        title="기존 레이저 리프팅과의 비교"
        subtitle="온다는 기존 레이저 리프팅 대비 다양한 면에서 우수한 결과를 제공합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color overflow-hidden mb-16">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-color bg-section-bg">
              <th className="px-6 py-4 text-left font-bold text-foreground">비교 항목</th>
              <th className="px-6 py-4 text-left font-bold text-primary">온다</th>
              <th className="px-6 py-4 text-left font-bold text-text-muted">기존 레이저 리프팅</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-color">
              <td className="px-6 py-4 font-medium text-foreground">에너지 원리</td>
              <td className="px-6 py-4 text-primary font-medium">마이크로웨이브</td>
              <td className="px-6 py-4 text-text-muted">레이저/고주파</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-6 py-4 font-medium text-foreground">지방 감소</td>
              <td className="px-6 py-4 text-primary font-medium">가능</td>
              <td className="px-6 py-4 text-text-muted">제한적</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-6 py-4 font-medium text-foreground">피부 타이트닝</td>
              <td className="px-6 py-4 text-primary font-medium">동시 가능</td>
              <td className="px-6 py-4 text-text-muted">단독 효과</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-6 py-4 font-medium text-foreground">주변 조직 손상</td>
              <td className="px-6 py-4 text-primary font-medium">최소</td>
              <td className="px-6 py-4 text-text-muted">상대적으로 높음</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-foreground">다운타임</td>
              <td className="px-6 py-4 text-primary font-medium">짧음</td>
              <td className="px-6 py-4 text-text-muted">보통</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="추천 대상"
        subtitle="다음과 같은 고민이 있으신 분께 온다 리프팅을 추천합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <InfoCard
          title="이중턱·턱선 고민"
          description="이중턱과 흐릿해진 턱선을 개선하여 갸름한 윤곽을 원하시는 분"
        />
        <InfoCard
          title="부분 지방 고민"
          description="복부, 팔뚝, 허벅지 등 부분적인 지방이 신경 쓰이시는 분"
        />
        <InfoCard
          title="피부 처짐 + 지방"
          description="지방 감소와 피부 타이트닝을 동시에 원하시는 분"
        />
        <InfoCard
          title="비침습 시술 선호"
          description="절개 없이 안전하고 편안한 지방 감소·리프팅 시술을 원하시는 분"
        />
      </div>
    </SubPageLayout>
  );
}
