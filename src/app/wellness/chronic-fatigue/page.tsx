import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { menuData } from "@/lib/menu-data";

export const metadata = {
  title: "만성피로 케어 | DK서울의원",
  description: "만성피로 증후군 진단과 세포 영양 검사 기반 맞춤 수액 처방 프로그램",
};

const wellnessMenu = menuData.find((m) => m.href === "/wellness")!;

export default function ChronicFatiguePage() {
  return (
    <SubPageLayout
      category="웰니스"
      categoryHref="/wellness"
      title="만성피로 케어"
      subtitle="Chronic Fatigue Care"
      description="만성피로의 근본 원인을 세포 영양 검사로 분석하고, 맞춤 수액 처방을 통해 체계적으로 회복을 돕습니다."
      sideMenu={wellnessMenu.subItems}
      currentPath="/wellness/chronic-fatigue"
    >
      {/* 만성피로 증후군이란 */}
      <SectionTitle
        title="만성피로 증후군이란?"
        subtitle="만성피로 증후군(CFS, Chronic Fatigue Syndrome)은 6개월 이상 지속되는 심한 피로감으로, 충분한 휴식을 취해도 회복되지 않으며 일상생활에 상당한 지장을 주는 상태를 말합니다."
      />

      <div className="w-full h-64 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mb-10">
        만성피로 증후군 이미지 영역
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <InfoCard
          title="지속적인 극심한 피로"
          description="충분히 잠을 자고 쉬어도 피로가 풀리지 않고, 일상적인 활동조차 힘겨워집니다."
        />
        <InfoCard
          title="인지 기능 저하"
          description="집중력 저하, 기억력 감퇴, 두뇌 안개(Brain Fog) 등 인지 기능에 문제가 나타납니다."
        />
        <InfoCard
          title="수면 장애"
          description="충분히 수면을 취해도 개운하지 않으며, 수면의 질이 저하되어 피로가 누적됩니다."
        />
        <InfoCard
          title="근육통 및 관절통"
          description="특별한 원인 없이 근육통, 관절통, 두통 등이 반복적으로 나타납니다."
        />
      </div>

      {/* 자가진단 */}
      <SectionTitle
        title="만성피로 증후군 자가진단"
        subtitle="아래 항목 중 해당되는 것이 많다면, 만성피로 증후군을 의심해볼 수 있습니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-16">
        <div className="space-y-4">
          {[
            "6개월 이상 원인 모를 피로가 지속된다",
            "충분히 자도 개운하지 않고 항상 피곤하다",
            "가벼운 활동 후에도 극심한 피로를 느낀다",
            "집중력이 떨어지고 자주 멍해진다",
            "기억력이 예전만 못하다고 느낀다",
            "이유 없이 근육통이나 관절통이 있다",
            "목이 자주 붓거나 인후통이 반복된다",
            "두통이 자주 발생한다",
            "기분이 우울하거나 의욕이 없다",
            "면역력이 약해진 것 같다 (감기를 자주 걸리는 등)",
          ].map((item, index) => (
            <label key={index} className="flex items-start gap-3 cursor-default">
              <div className="w-6 h-6 border-2 border-border-color rounded flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs text-text-muted">{index + 1}</span>
              </div>
              <span className="text-sm text-text-muted">{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-border-color">
          <p className="text-sm text-primary font-medium">
            위 항목 중 4개 이상 해당되는 경우, 전문의 상담을 권장합니다.
          </p>
        </div>
      </div>

      {/* DK서울의원 만성피로 케어 프로그램 */}
      <SectionTitle
        title="DK서울의원 만성피로 케어 프로그램"
        subtitle="세포 수준의 정밀 영양 검사와 맞춤 수액 처방으로, 만성피로의 근본 원인을 해결합니다."
      />

      <div className="bg-card-bg rounded-2xl border border-border-color p-8 mb-10">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-foreground mb-2">세포 영양 검사</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                혈액 내 세포 수준에서 비타민, 미네랄, 아미노산, 항산화 물질 등 필수 영양소의 실제 이용 상태를 정밀하게 분석합니다. 단순 혈중 농도가 아닌 세포 내 실제 영양 상태를 확인하여, 만성피로의 숨겨진 영양 결핍 원인을 정확히 파악합니다.
              </p>
              <div className="w-full h-48 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mt-4">
                세포 영양 검사 이미지 영역
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-foreground mb-2">맞춤 수액 처방</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                세포 영양 검사 결과를 기반으로 부족한 영양소를 정확히 보충하는 맞춤 수액을 처방합니다. 경구 섭취보다 빠르고 효율적으로 세포에 직접 영양을 공급하여, 만성피로 회복을 촉진합니다. 환자의 상태에 따라 고함량 비타민, 미네랄, 아미노산 등을 최적의 비율로 조합합니다.
              </p>
              <div className="w-full h-48 bg-section-bg rounded-2xl flex items-center justify-center text-text-muted text-sm mt-4">
                맞춤 수액 처방 이미지 영역
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
