export interface SubMenuItem {
  name: string;
  href: string;
  imageSrc?: string;
  imageFit?: "cover" | "contain";
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
      {
        name: "DK프리미엄 셀관리",
        href: "/stem-cell/premium-cell",
        imageSrc: "/content/stem-cell/premium-cell-banking.jpg",
      },
      {
        name: "DK줄기세포 연구소",
        href: "/stem-cell/research-lab",
        imageSrc: "/content/stem-cell/research-lab/lab-room.png",
      },
      {
        name: "줄기세포 셀테라피",
        href: "/stem-cell/cell-therapy",
        imageSrc: "/content/stem-cell/cell-therapy/concept.jpg",
      },
      {
        name: "첨단재생의료실시기관",
        href: "/stem-cell/advanced-regenerative",
        imageSrc: "/content/stem-cell/research-lab/banking-room.png",
      },
    ],
  },
  {
    name: "수액 테라피",
    href: "/iv-therapy",
    subItems: [
      {
        name: "브레인 힐링",
        href: "/iv-therapy/brain-healing",
        imageSrc: "/content/iv-therapy/brain-healing.jpg",
      },
      {
        name: "닥터 비너스 힐링",
        href: "/iv-therapy/dr-venus-healing",
        imageSrc: "/content/iv-therapy/dr-venus-healing.jpg",
      },
      {
        name: "스트레스 힐링",
        href: "/iv-therapy/stress-healing",
        imageSrc: "/content/iv-therapy/stress-healing.jpg",
      },
      {
        name: "타임 힐링",
        href: "/iv-therapy/time-healing",
        imageSrc: "/content/iv-therapy/time-healing.jpg",
      },
      {
        name: "디톡스 힐링",
        href: "/iv-therapy/detox-healing",
        imageSrc: "/content/iv-therapy/detox-healing.jpg",
      },
      {
        name: "파워 힐링",
        href: "/iv-therapy/power-healing",
        imageSrc: "/content/iv-therapy/power-healing.jpg",
      },
      {
        name: "퍼스널수액 처방",
        href: "/iv-therapy/personal-prescription",
        imageSrc: "/content/iv-therapy/personal-prescription.jpg",
      },
    ],
  },
  {
    name: "스킨 리모델링",
    href: "/skin-remodeling",
    subItems: [
      {
        name: "스킨 부스터",
        href: "/skin-remodeling/skin-booster",
        imageSrc: "/content/skin-remodeling/skin-booster/rejuran-lineup.jpg",
      },
      {
        name: "콜라겐 부스터",
        href: "/skin-remodeling/collagen-booster",
        imageSrc: "/content/skin-remodeling/collagen-booster/sculptra-box.jpg",
        imageFit: "contain",
      },
      {
        name: "ECM 부스터",
        href: "/skin-remodeling/ecm-booster",
        imageSrc: "/content/skin-remodeling/ecm-booster/juveacell-set.jpg",
      },
      {
        name: "줄기세포",
        href: "/skin-remodeling/stem-cell",
        imageSrc: "/content/skin-remodeling/shared/stem-cell-science.jpg",
      },
      {
        name: "필러",
        href: "/skin-remodeling/filler",
        imageSrc: "/content/skin-remodeling/filler/juvederm-signature.jpg",
      },
      {
        name: "보톡스",
        href: "/skin-remodeling/botox",
        imageSrc: "/content/skin-remodeling/shared/injection-closeup.jpg",
      },
    ],
  },
  {
    name: "에너지 리프팅",
    href: "/energy-lifting",
    subItems: [
      {
        name: "써마지",
        href: "/energy-lifting/thermage",
        imageSrc: "/content/energy-lifting/thermage/device.jpg",
      },
      {
        name: "울쎄라",
        href: "/energy-lifting/ulthera",
        imageSrc: "/content/energy-lifting/ulthera/device.webp",
        imageFit: "contain",
      },
      {
        name: "소프웨이브",
        href: "/energy-lifting/sofwave",
        imageSrc: "/content/energy-lifting/sofwave/device.webp",
        imageFit: "contain",
      },
      {
        name: "티타늄",
        href: "/energy-lifting/titanium",
        imageSrc: "/content/energy-lifting/titanium/device.webp",
        imageFit: "contain",
      },
      {
        name: "온다",
        href: "/energy-lifting/onda",
        imageSrc: "/content/energy-lifting/onda/device.webp",
        imageFit: "contain",
      },
      {
        name: "볼뉴머",
        href: "/energy-lifting/volnewmer",
        imageSrc: "/content/energy-lifting/volnewmer/device.webp",
        imageFit: "contain",
      },
      {
        name: "슈링크",
        href: "/energy-lifting/shrink",
        imageSrc: "/content/energy-lifting/shrink/device.webp",
        imageFit: "contain",
      },
      {
        name: "인모드",
        href: "/energy-lifting/inmode",
        imageSrc: "/content/energy-lifting/inmode/device.webp",
        imageFit: "contain",
      },
    ],
  },
  {
    name: "다이어트",
    href: "/diet",
    subItems: [
      {
        name: "DK 맞춤 다이어트",
        href: "/diet/custom-diet",
        imageSrc: "/content/diet/landing/custom-diet.jpg",
      },
      {
        name: "GLP-1 주사",
        href: "/diet/glp1-injection",
        imageSrc: "/content/diet/landing/glp1-injection.jpg",
      },
      {
        name: "다이어트 약처방",
        href: "/diet/medication",
        imageSrc: "/content/diet/landing/medication.jpg",
      },
    ],
  },
  {
    name: "웰니스",
    href: "/wellness",
    subItems: [
      {
        name: "안티 스트레스",
        href: "/wellness/anti-stress",
        imageSrc: "/content/wellness/landing/anti-stress.jpg",
      },
      {
        name: "만성피로 케어",
        href: "/wellness/chronic-fatigue",
        imageSrc: "/content/wellness/landing/chronic-fatigue.jpg",
      },
      {
        name: "면역 밸런스 케어",
        href: "/wellness/immune-balance",
        imageSrc: "/content/wellness/landing/immune-balance.png",
      },
    ],
  },
  {
    name: "고압산소케어",
    href: "/hyperbaric-oxygen",
    subItems: [
      {
        name: "고압산소케어란",
        href: "/hyperbaric-oxygen/about",
        imageSrc: "/content/hyperbaric-oxygen/about/concept.jpg",
      },
      {
        name: "DK 고압산소챔버",
        href: "/hyperbaric-oxygen/chamber",
        imageSrc: "/content/hyperbaric-oxygen/chamber/exterior.jpg",
      },
      {
        name: "DK 산소치료 솔루션",
        href: "/hyperbaric-oxygen/solution",
        imageSrc: "/content/hyperbaric-oxygen/solution/process-1-2.jpg",
      },
    ],
  },
];
