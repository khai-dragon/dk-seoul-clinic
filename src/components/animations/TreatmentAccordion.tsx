"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/lib/menu-data";

const categoryDescriptions: Record<string, string> = {
  "줄기세포": "자체 연구소 기반의 프리미엄 셀뱅킹과 첨단재생의료로, 세포 수준의 근본적인 회복과 재생을 실현합니다.",
  "수액 테라피": "가정의학과 전문의의 심층 상담 후, 개인별 건강 상태에 최적화된 맞춤 수액을 처방합니다.",
  "스킨 리모델링": "스킨 부스터부터 필러·보톡스까지, 피부 본연의 아름다움을 되찾아 드리는 토탈 스킨 케어입니다.",
  "에너지 리프팅": "써마지, 울쎄라 등 검증된 비수술 리프팅 장비로 자연스러운 탄력과 윤곽을 되살립니다.",
  "고압산소케어": "IBEX Light3 고압산소챔버를 통한 세포 수준의 산소 공급으로 회복과 재생을 돕습니다.",
  "다이어트": "단순 감량이 아닌, 건강 기능 회복을 통한 지속 가능한 다이어트를 설계합니다.",
  "웰니스": "심리·신체 지표 분석을 기반으로, 스트레스·피로·면역의 균형을 종합적으로 관리합니다.",
};

const categoryEn: Record<string, string> = {
  "줄기세포": "Stem Cell",
  "수액 테라피": "IV Therapy",
  "스킨 리모델링": "Skin Remodeling",
  "에너지 리프팅": "Energy Lifting",
  "고압산소케어": "Hyperbaric Oxygen",
  "다이어트": "Diet Program",
  "웰니스": "Wellness",
};

export default function TreatmentAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className="border-t border-border-color">
      {menuData.map((category, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div
            key={category.name}
            className="border-b border-border-color"
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Row header */}
            <div
              className="flex items-center gap-4 sm:gap-6 py-6 sm:py-7 cursor-pointer group px-2"
              onClick={() => handleToggle(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(idx); }}
            >
              <span className="font-serif text-xl italic text-accent/50 group-hover:text-accent transition-colors duration-500 shrink-0 w-8 sm:w-10">
                0{idx + 1}
              </span>

              <div className="flex-1 flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-lg sm:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-500 tracking-tight">
                    {category.name}
                  </h3>
                  <span className="hidden sm:block font-serif text-sm italic text-text-muted/60 group-hover:text-accent/60 transition-colors duration-500">
                    {categoryEn[category.name]}
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <span className="hidden lg:block text-[12px] text-text-muted/60 tracking-wide">
                    {category.subItems.length} treatments
                  </span>
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 border border-border-color group-hover:border-accent/30 flex items-center justify-center transition-colors duration-500"
                  >
                    <svg className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Expandable content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-4 sm:pl-16 pr-2">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Description */}
                      <div className="lg:col-span-4">
                        <div className="w-8 h-px bg-accent mb-5" />
                        <p className="text-[14px] text-text-muted leading-relaxed mb-6">
                          {categoryDescriptions[category.name]}
                        </p>
                        <Link
                          href={category.href}
                          className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.1em] text-accent uppercase group/link"
                        >
                          <span>View All</span>
                          <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>

                      {/* Sub-items grid */}
                      <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                          {category.subItems.map((sub, subIdx) => (
                            <motion.div
                              key={sub.href}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: subIdx * 0.04,
                                ease: [0.25, 0.1, 0.25, 1],
                              }}
                            >
                              <Link
                                href={sub.href}
                                className="block group/item p-4 bg-section-bg/60 hover:bg-primary transition-colors duration-500"
                              >
                                <div className="w-full h-20 bg-border-color/30 group-hover/item:bg-white/10 mb-3 transition-colors duration-500 flex items-center justify-center">
                                  <span className="text-[10px] tracking-[0.12em] text-text-muted/40 group-hover/item:text-white/30 uppercase transition-colors duration-500">
                                    Image
                                  </span>
                                </div>
                                <h4 className="text-[13px] font-medium text-foreground group-hover/item:text-white transition-colors duration-500 tracking-tight">
                                  {sub.name}
                                </h4>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
