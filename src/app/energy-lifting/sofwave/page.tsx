import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "소프웨이브 | DK서울의원",
  description: "DK서울의원 소프웨이브 - 차세대 초음파 기술로 통증은 줄이고 리프팅 효과는 극대화한 시술",
};

const energyLiftingMenu = menuData.find((m) => m.href === "/energy-lifting")!;

export default function SofwavePage() {
  return (
    <SubPageLayout
      category="에너지 리프팅"
      categoryHref="/energy-lifting"
      title="소프웨이브"
      subtitle="Sofwave"
      description="차세대 초음파 기술인 SUPERB(Synchronous Ultrasound Parallel Beam) 테크놀로지로, 통증은 최소화하고 리프팅 효과는 극대화한 새로운 개념의 리프팅 시술입니다."
      sideMenu={energyLiftingMenu.subItems}
      currentPath="/energy-lifting/sofwave"
    >
      {/* 소프웨이브란 */}
      <SectionTitle
        title="소프웨이브란"
        subtitle="소프웨이브는 이스라엘에서 개발된 차세대 초음파 리프팅 장비로, SUPERB 기술을 활용하여 진피 중간층(1.5mm)에 균일한 열 에너지를 전달하는 비침습적 리프팅 시술입니다."
      />

      <div className="w-full h-72 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-16">
        소프웨이브 장비 이미지 영역
      </div>

      {/* 시술 원리 */}
      <SectionTitle
        title="시술 원리"
        subtitle="7개의 초음파 빔을 동시에 평행 조사하여 진피층에 넓고 균일한 열 에너지를 전달하고, Sofcool 냉각 시스템으로 표피를 보호합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">SUPERB 기술</h3>
              <p className="text-sm text-text-muted">7개의 초음파 빔을 동시에 평행 조사하여 진피 중간층(1.5mm)에 넓고 균일한 열 존을 형성합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">콜라겐 리모델링</h3>
              <p className="text-sm text-text-muted">진피층의 열 자극으로 기존 콜라겐을 리모델링하고 새로운 콜라겐 및 엘라스틴 생성을 촉진합니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Sofcool 냉각 시스템</h3>
              <p className="text-sm text-text-muted">시술 중 실시간 냉각으로 표피를 보호하여 통증을 최소화하고 시술 후 회복을 빠르게 합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 장점 */}
      <SectionTitle
        title="소프웨이브의 장점"
        subtitle="기존 초음파 리프팅과 비교하여 소프웨이브만의 차별화된 강점을 소개합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <InfoCard
          title="최소 통증"
          description="Sofcool 냉각 시스템으로 기존 초음파 리프팅 대비 통증이 현저히 줄어들어 마취 없이도 편안한 시술이 가능합니다."
        />
        <InfoCard
          title="빠른 시술 시간"
          description="얼굴 전체 시술 시간이 약 30~40분으로 짧아 바쁜 일상 중에도 부담 없이 시술받을 수 있습니다."
        />
        <InfoCard
          title="균일한 에너지 전달"
          description="7개의 평행 빔이 넓은 면적에 균일하게 에너지를 전달하여 고른 리프팅 효과를 제공합니다."
        />
        <InfoCard
          title="다운타임 최소화"
          description="시술 직후 일상생활이 가능할 정도로 회복 기간이 짧습니다."
        />
        <InfoCard
          title="높은 안전성"
          description="FDA 승인을 받은 안전한 시술로, 화상이나 신경 손상의 위험이 매우 낮습니다."
        />
        <InfoCard
          title="점진적 효과"
          description="시술 후 1~3개월에 걸쳐 콜라겐이 재생되며 자연스러운 리프팅 효과가 나타납니다."
        />
      </div>

      {/* 추천 대상 */}
      <SectionTitle
        title="추천 대상"
        subtitle="다음과 같은 고민이 있으신 분께 소프웨이브를 추천합니다."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="통증에 민감한 분"
          description="기존 리프팅 시술의 통증이 부담스러워 시술을 망설이셨던 분"
        />
        <InfoCard
          title="초기 처짐 관리"
          description="30~40대 초반으로 피부 탄력 저하가 시작되어 예방적 관리를 원하시는 분"
        />
        <InfoCard
          title="빠른 일상 복귀"
          description="다운타임 없이 빠르게 일상으로 복귀하고 싶으신 분"
        />
        <InfoCard
          title="자연스러운 개선"
          description="자연스럽고 점진적인 피부 탄력 개선을 원하시는 분"
        />
      </div>

      {/* 시술 부위 */}
      <SectionTitle
        title="시술 부위"
        subtitle="소프웨이브는 얼굴과 목 전반에 걸쳐 시술이 가능합니다."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {["이마·눈썹", "볼·팔자", "턱선·이중턱", "목"].map((area) => (
          <div key={area} className="bg-card-bg rounded-2xl border border-border-color p-5 text-center">
            <p className="text-sm font-medium text-foreground">{area}</p>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
