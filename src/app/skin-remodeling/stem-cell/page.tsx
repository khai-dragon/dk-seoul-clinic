import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "줄기세포 | 스킨 리모델링 | DK서울의원",
  description:
    "줄기세포의 호밍효과를 활용한 피부주사 시술로 손상된 피부 조직을 근본적으로 재생합니다.",
};

const skinRemodelingMenu = menuData.find(
  (m) => m.href === "/skin-remodeling"
)!;

export default function StemCellSkinPage() {
  return (
    <SubPageLayout
      category="스킨 리모델링"
      categoryHref="/skin-remodeling"
      title="줄기세포"
      subtitle="Stem Cell for Skin"
      description="줄기세포의 호밍효과를 활용하여 손상된 피부 조직을 근본적으로 재생하는 시술"
      sideMenu={skinRemodelingMenu.subItems}
      currentPath="/skin-remodeling/stem-cell"
    >
      {/* 호밍효과 설명 */}
      <section className="mb-16">
        <SectionTitle
          title="줄기세포 피부주사의 호밍효과"
          subtitle="줄기세포는 손상된 조직을 스스로 찾아가 재생하는 '호밍효과(Homing Effect)'를 가지고 있습니다. 이 특성을 피부 미용에 활용하여 근본적인 피부 재생을 유도합니다."
        />
        <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            호밍효과란?
          </h3>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            호밍효과(Homing Effect)란 줄기세포가 체내에 주입되었을 때, 손상되거나
            노화된 조직을 스스로 찾아가 그 부위에 정착하여 재생을 돕는
            현상입니다. 마치 비둘기가 자기 집을 찾아가듯, 줄기세포가 치료가
            필요한 부위를 정확하게 인식하고 이동하여 복구 작용을 시작합니다.
          </p>
          <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                줄기세포가 손상된 피부 조직에서 분비되는 신호 물질을
                감지합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                신호를 따라 손상 부위로 이동하여 정확한 위치에
                정착합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                정착한 줄기세포가 필요한 세포로 분화하거나 성장인자를
                분비하여 재생을 촉진합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                주변 세포까지 활성화시켜 피부 전체의 재생 환경을
                개선합니다.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 줄기세포 피부주사 효과 */}
      <section className="mb-16">
        <SectionTitle
          title="줄기세포 피부주사 효과"
          subtitle="줄기세포 피부주사는 기존 스킨케어 시술과 차원이 다른 근본적인 피부 재생 효과를 제공합니다."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "피부 재생 촉진",
              desc: "손상된 피부 세포를 새로운 건강한 세포로 교체하여 피부를 근본적으로 재생합니다.",
            },
            {
              title: "콜라겐 합성 증가",
              desc: "줄기세포가 분비하는 성장인자가 콜라겐 합성을 촉진하여 피부 탄력을 회복시킵니다.",
            },
            {
              title: "주름 및 탄력 개선",
              desc: "진피층의 구조를 강화하여 잔주름부터 깊은 주름까지 개선하고 피부 탄력을 높입니다.",
            },
            {
              title: "피부톤 균일화",
              desc: "멜라닌 생성을 조절하고 혈액순환을 개선하여 맑고 균일한 피부톤을 만들어 줍니다.",
            },
            {
              title: "모공 및 흉터 개선",
              desc: "넓어진 모공과 여드름 흉터, 상처 흉터 등을 줄기세포의 재생력으로 개선합니다.",
            },
            {
              title: "피부 장벽 강화",
              desc: "약해진 피부 장벽을 복원하여 외부 자극에 강하고 건강한 피부를 만들어 줍니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg rounded-xl p-5 border border-border-color"
            >
              <h4 className="text-sm font-bold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 시술 과정 */}
      <section className="mb-16">
        <SectionTitle
          title="줄기세포 피부주사 시술 과정"
          subtitle="DK서울의원의 체계적인 줄기세포 피부주사 시술 과정을 안내합니다."
        />
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "상담 및 피부 진단",
              desc: "전문의 상담을 통해 피부 상태를 정밀 분석하고, 개인 맞춤 시술 계획을 수립합니다.",
            },
            {
              step: "02",
              title: "줄기세포 준비",
              desc: "엄격한 품질 관리를 거친 줄기세포 배양액을 준비합니다. 안전성과 효능이 검증된 성분만 사용합니다.",
            },
            {
              step: "03",
              title: "마취 및 시술",
              desc: "시술 부위에 국소 마취 크림을 도포한 후, 줄기세포 성분을 피부 진피층에 정밀하게 주입합니다.",
            },
            {
              step: "04",
              title: "진정 및 관리",
              desc: "시술 직후 진정 케어를 진행하며, 시술 후 주의사항과 홈케어 방법을 안내합니다.",
            },
            {
              step: "05",
              title: "경과 관찰",
              desc: "시술 후 정기적인 경과 관찰을 통해 피부 상태 변화를 확인하고, 필요시 추가 시술 계획을 수립합니다.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-5 bg-section-bg rounded-xl p-5"
            >
              <div className="text-2xl font-bold text-accent shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 추천 대상 */}
      <section>
        <SectionTitle
          title="줄기세포 피부주사 추천 대상"
          subtitle="이런 분들에게 줄기세포 피부주사를 추천합니다."
        />
        <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "피부 노화가 빠르게 진행되는 분",
              "기존 스킨케어 시술 효과가 부족하다고 느끼는 분",
              "근본적인 피부 재생을 원하는 분",
              "잔주름, 깊은 주름이 동시에 고민인 분",
              "피부 탄력이 현저히 저하된 분",
              "칙칙하고 생기 없는 피부가 고민인 분",
              "모공, 흉터 등 피부 결이 고르지 못한 분",
              "민감하고 약해진 피부 장벽을 회복하고 싶은 분",
            ].map((target) => (
              <div
                key={target}
                className="flex items-start gap-2 text-sm text-text-muted"
              >
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                <span>{target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
