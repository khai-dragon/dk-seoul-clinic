export interface SubMenuItem {
  name: string;
  href: string;
}

export interface MenuItem {
  name: string;
  href: string;
  subItems: SubMenuItem[];
}

export const menuData: MenuItem[] = [
  {
    name: "줄기세포",
    href: "/stem-cell",
    subItems: [
      { name: "DK프리미엄 셀관리", href: "/stem-cell/premium-cell" },
      { name: "DK줄기세포 연구소", href: "/stem-cell/research-lab" },
      { name: "줄기세포 셀테라피", href: "/stem-cell/cell-therapy" },
      { name: "첨단재생의료실시기관", href: "/stem-cell/advanced-regenerative" },
    ],
  },
  {
    name: "수액 테라피",
    href: "/iv-therapy",
    subItems: [
      { name: "브레인 힐링", href: "/iv-therapy/brain-healing" },
      { name: "닥터 비너스 힐링", href: "/iv-therapy/dr-venus-healing" },
      { name: "스트레스 힐링", href: "/iv-therapy/stress-healing" },
      { name: "타임 힐링", href: "/iv-therapy/time-healing" },
      { name: "디톡스 힐링", href: "/iv-therapy/detox-healing" },
      { name: "파워 힐링", href: "/iv-therapy/power-healing" },
      { name: "퍼스널수액 처방", href: "/iv-therapy/personal-prescription" },
    ],
  },
  {
    name: "스킨 리모델링",
    href: "/skin-remodeling",
    subItems: [
      { name: "스킨 부스터", href: "/skin-remodeling/skin-booster" },
      { name: "콜라겐 부스터", href: "/skin-remodeling/collagen-booster" },
      { name: "ECM 부스터", href: "/skin-remodeling/ecm-booster" },
      { name: "줄기세포", href: "/skin-remodeling/stem-cell" },
      { name: "필러", href: "/skin-remodeling/filler" },
      { name: "보톡스", href: "/skin-remodeling/botox" },
    ],
  },
  {
    name: "에너지 리프팅",
    href: "/energy-lifting",
    subItems: [
      { name: "써마지", href: "/energy-lifting/thermage" },
      { name: "울쎄라", href: "/energy-lifting/ulthera" },
      { name: "소프웨이브", href: "/energy-lifting/sofwave" },
      { name: "티타늄", href: "/energy-lifting/titanium" },
      { name: "온다", href: "/energy-lifting/onda" },
      { name: "볼뉴머", href: "/energy-lifting/volnewmer" },
      { name: "슈링크", href: "/energy-lifting/shrink" },
      { name: "인모드", href: "/energy-lifting/inmode" },
    ],
  },
  {
    name: "다이어트",
    href: "/diet",
    subItems: [
      { name: "DK 맞춤 다이어트", href: "/diet/custom-diet" },
      { name: "GLP-1 주사", href: "/diet/glp1-injection" },
      { name: "다이어트 약처방", href: "/diet/medication" },
    ],
  },
  {
    name: "웰니스",
    href: "/wellness",
    subItems: [
      { name: "안티 스트레스", href: "/wellness/anti-stress" },
      { name: "만성피로 케어", href: "/wellness/chronic-fatigue" },
      { name: "면역 밸런스 케어", href: "/wellness/immune-balance" },
    ],
  },
  {
    name: "고압산소케어",
    href: "/hyperbaric-oxygen",
    subItems: [
      { name: "고압산소케어란", href: "/hyperbaric-oxygen/about" },
      { name: "DK 고압산소챔버", href: "/hyperbaric-oxygen/chamber" },
      { name: "DK 산소치료 솔루션", href: "/hyperbaric-oxygen/solution" },
    ],
  },
];
