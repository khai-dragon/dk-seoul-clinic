import SubPageLayout from "@/components/SubPageLayout";
import SectionTitle from "@/components/SectionTitle";
import { menuData } from "@/lib/menu-data";
import VisualPanel from "../_components/VisualPanel";

export const metadata = {
  title: "보톡스 | 스킨 리모델링 | DK서울의원",
  description:
    "주름 개선, 사각턱 축소, 다한증 등 다양한 목적으로 활용되는 보톡스 시술. 전문의 상담 후 맞춤 시술.",
};

const skinRemodelingMenu = menuData.find(
  (m) => m.href === "/skin-remodeling"
)!;

export default function BotoxPage() {
  return (
    <SubPageLayout
      category="스킨 리모델링"
      categoryHref="/skin-remodeling"
      title="보톡스"
      subtitle="Botox"
      description="자연스러운 표정은 유지하면서 주름과 윤곽을 개선하는 보톡스 시술"
      sideMenu={skinRemodelingMenu.subItems}
      currentPath="/skin-remodeling/botox"
    >
      {/* 보톡스 소개 */}
      <section className="mb-16">
        <SectionTitle
          title="보톡스란?"
          subtitle="보톡스는 보툴리눔 톡신 성분을 이용하여 근육의 움직임을 일시적으로 조절하는 시술입니다. 표정 주름 개선부터 사각턱 축소, 다한증 치료까지 다양한 목적으로 활용되며, 간편하면서도 효과적인 안티에이징 시술로 많은 분들이 선택하고 있습니다."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground mb-4">
              보톡스 시술의 원리
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              보톡스는 근육에 신호를 전달하는 신경전달물질(아세틸콜린)의
              분비를 일시적으로 차단하여 과도하게 수축된 근육을
              이완시킵니다. 이를 통해 주름을 펴고, 발달한 근육의 크기를
              줄이며, 땀 분비를 조절하는 효과를 얻을 수 있습니다.
            </p>
            <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  시술 시간이 10~20분으로 짧아 일상생활에 지장이 없습니다.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  시술 후 3~7일부터 효과가 나타나기 시작하며, 2주 후 최대
                  효과를 확인할 수 있습니다.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  효과 지속 기간은 3~6개월이며, 정기적인 시술로 효과를
                  유지할 수 있습니다.
                </span>
              </li>
            </ul>
          </div>
          <VisualPanel
            src="/content/skin-remodeling/shared/injection-closeup.jpg"
            alt="보톡스 시술 디테일 비주얼"
            className="min-h-[320px]"
            caption="표정은 과하지 않게, 변화는 자연스럽게 설계하는 방향으로 상담합니다."
            eyebrow="Botox Detail"
            priority
          />
        </div>
      </section>

      {/* 시술 부위 및 설명 */}
      <section className="mb-16">
        <SectionTitle
          title="보톡스 시술 부위"
          subtitle="다양한 부위에 맞춤 시술이 가능합니다."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "이마 주름",
              desc: "이마를 올릴 때 생기는 가로 주름을 개선하여 깨끗하고 매끈한 이마를 만들어 줍니다.",
            },
            {
              title: "미간 주름",
              desc: "찡그릴 때 생기는 미간의 세로 주름을 완화하여 부드럽고 편안한 인상을 만들어 줍니다.",
            },
            {
              title: "눈가 주름 (까마귀발)",
              desc: "웃을 때 눈 옆에 생기는 잔주름을 개선하여 밝고 생기 있는 눈매를 만들어 줍니다.",
            },
            {
              title: "사각턱",
              desc: "발달한 교근(저작근)을 축소시켜 갸름하고 부드러운 턱 라인을 만들어 줍니다.",
            },
            {
              title: "입꼬리",
              desc: "처진 입꼬리를 올려주어 밝고 친근한 인상을 만들어 줍니다.",
            },
            {
              title: "턱 끝 (매실턱)",
              desc: "턱 끝의 울퉁불퉁한 근육 수축을 완화하여 매끈한 턱 라인을 만들어 줍니다.",
            },
            {
              title: "코끝 (벙커 주름)",
              desc: "웃을 때 코끝이 내려가는 증상을 개선하여 세련된 코 라인을 유지합니다.",
            },
            {
              title: "다한증",
              desc: "겨드랑이, 손바닥, 발바닥 등 과도한 땀 분비를 조절하여 일상생활의 불편을 해소합니다.",
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
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <VisualPanel
            src="/content/skin-remodeling/shared/collagen-injection.jpg"
            alt="보톡스 상담 포인트 비주얼"
            className="min-h-[260px]"
            caption="시술 부위별 근육의 움직임과 원하는 인상 변화를 함께 확인합니다."
            eyebrow="Consult Point"
          />
          <div className="rounded-[28px] border border-border-color/60 bg-card-bg p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              상담 시 함께 보는 포인트
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  title: "표정 습관",
                  desc: "주름이 반복되는 표정 패턴과 움직임의 강도를 먼저 확인합니다.",
                },
                {
                  title: "근육 발달 정도",
                  desc: "사각턱이나 턱끝처럼 윤곽과 연결되는 부위는 근육량과 좌우 차이를 함께 봅니다.",
                },
                {
                  title: "원하는 변화",
                  desc: "자연스러운 완화인지, 보다 또렷한 윤곽 정리인지 목표에 맞춰 강도를 조절합니다.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border-color/50 bg-white/70 p-4"
                >
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 장점 */}
      <section className="mb-16">
        <SectionTitle title="보톡스 시술의 장점" />
        <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
          <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                비수술적 시술로 절개 없이 간편하게 받을 수 있습니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                시술 시간이 짧아 바쁜 직장인도 점심시간에 시술 가능합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                자연스러운 표정을 유지하면서 주름을 효과적으로 개선합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                주름 개선, 윤곽 축소, 다한증 등 다양한 목적으로 활용 가능합니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                시술 후 일상생활 복귀가 즉시 가능하며, 별도의 회복 기간이
                필요하지 않습니다.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                정기적인 관리를 통해 노화 예방 효과도 기대할 수 있습니다.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 추천 대상 */}
      <section>
        <SectionTitle
          title="보톡스 추천 대상"
          subtitle="이런 분들에게 보톡스 시술을 추천합니다."
        />
        <div className="bg-section-bg rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "이마, 미간, 눈가 주름이 고민인 분",
              "사각턱이 발달하여 갸름한 얼굴을 원하는 분",
              "인상이 강해 보여 부드러운 표정을 원하는 분",
              "처진 입꼬리로 불만족스러운 표정이 고민인 분",
              "다한증으로 일상생활이 불편한 분",
              "비수술적 방법으로 안티에이징을 원하는 분",
              "짧은 시술 시간을 원하는 바쁜 직장인",
              "자연스러운 변화를 원하는 분",
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
