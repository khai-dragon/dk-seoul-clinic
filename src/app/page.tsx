"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Marquee from "@/components/animations/Marquee";
import ParallaxImage from "@/components/animations/ParallaxImage";
import HoverCard from "@/components/animations/HoverCard";
import TreatmentAccordion from "@/components/animations/TreatmentAccordion";

const heroServices = [
  {
    name: "줄기세포",
    desc: "프리미엄 셀관리와 첨단재생의료",
    en: "Stem Cell",
    href: "/stem-cell",
    imageSrc: "/content/home/service-stem-cell.jpg",
    imageAlt: "줄기세포 메인 비주얼",
  },
  {
    name: "수액 테라피",
    desc: "맞춤형 프리미엄 수액 처방",
    en: "IV Therapy",
    href: "/iv-therapy",
    imageSrc: "/content/home/service-iv-therapy.jpg",
    imageAlt: "수액 테라피 메인 비주얼",
  },
  {
    name: "스킨 리모델링",
    desc: "피부 재생과 안티에이징 솔루션",
    en: "Skin Remodeling",
    href: "/skin-remodeling",
    imageSrc: "/content/home/service-skin-remodeling.jpg",
    imageAlt: "스킨 리모델링 메인 비주얼",
  },
  {
    name: "에너지 리프팅",
    desc: "비수술 프리미엄 리프팅",
    en: "Energy Lifting",
    href: "/energy-lifting",
    imageSrc: "/content/home/service-energy-lifting.webp",
    imageAlt: "에너지 리프팅 장비 비주얼",
  },
  {
    name: "다이어트",
    desc: "건강 회복 중심 맞춤 다이어트",
    en: "Diet Program",
    href: "/diet",
    imageSrc: "/content/home/service-diet.jpg",
    imageAlt: "다이어트 프로그램 메인 비주얼",
  },
  {
    name: "웰니스",
    desc: "스트레스 · 피로 · 면역 케어",
    en: "Wellness",
    href: "/wellness",
    imageSrc: "/content/home/service-wellness.jpg",
    imageAlt: "웰니스 메인 비주얼",
  },
  {
    name: "고압산소케어",
    desc: "세포 회복 산소 치료",
    en: "Hyperbaric Oxygen",
    href: "/hyperbaric-oxygen",
    imageSrc: "/content/home/service-hyperbaric.jpg",
    imageAlt: "고압산소케어 장비 비주얼",
  },
];

const journeySteps = [
  { num: "01", title: "프리미엄 상담", desc: "가정의학과 전문의의 심층 1:1 상담을 통해 개인별 건강 상태와 목표를 정밀하게 파악합니다." },
  { num: "02", title: "정밀 진단", desc: "최첨단 장비를 활용한 체계적인 검사로 과학적 근거에 기반한 치료 방향을 설계합니다." },
  { num: "03", title: "맞춤 시술", desc: "정품·정량 원칙을 바탕으로 현재 상태와 목표에 맞는 시술 구성을 제안합니다." },
  { num: "04", title: "사후 관리", desc: "시술 후에도 지속적인 관리와 상담으로 아름다움이 오래 유지되도록 함께합니다." },
];

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={ref} className="relative pt-[72px]">
      <div className="bg-primary min-h-[100vh] flex items-center relative overflow-hidden">
        {/* Subtle organic shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-[15%] right-[10%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-accent/[0.03] blob-shape animate-float-slow" />
          <div className="absolute bottom-[10%] left-[5%] w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-accent/[0.02] blob-shape animate-float" style={{ animationDelay: "-4s" }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark/50 to-primary" />
        <div className="absolute inset-0 texture-overlay opacity-30" />

        <motion.div style={{ opacity, y }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-accent-light/80 text-lg italic tracking-wide mb-8"
              >
                Healing &amp; Care &middot; VIP Lounge
              </motion.p>

              <div className="overflow-hidden mb-3">
                <motion.h1
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]"
                >
                  DK
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]"
                >
                  서울의원
                </motion.h1>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-px bg-gradient-to-r from-accent to-accent-light mb-8"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-[15px] text-white/70 leading-relaxed mb-12 max-w-sm"
              >
                최첨단 의료 기술과 프리미엄 서비스가 만나는<br />
                당신만을 위한 힐링과 케어의 공간
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-10 py-4 bg-accent text-white text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-accent-dark transition-all duration-300"
                >
                  <span>Make a Reservation</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white/70 text-[13px] font-medium tracking-[0.1em] uppercase hover:border-white/40 hover:text-white/90 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Right - Image area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <div className="relative w-full aspect-[3/4] bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                  <Image
                    src="/content/home/hero-thermage.jpg"
                    alt="DK서울의원 대표 장비 비주얼"
                    fill
                    priority
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-contain object-center scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-primary/70" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                  <div className="w-full h-full flex items-end p-10 relative">
                    <span className="text-white/45 text-[12px] tracking-[0.15em] uppercase">Featured Device</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/20" />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
          >
            <span className="text-[11px] tracking-[0.15em] text-white/40 uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Marquee */}
      <section className="py-10 overflow-hidden">
        <Marquee
          items={["Stem Cell", "IV Therapy", "Skin Remodeling", "Energy Lifting", "Hyperbaric Oxygen", "Diet Program", "Wellness"]}
          speed={35}
        />
      </section>

      {/* Services Grid */}
      <section id="services" className="py-28 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-serif text-accent text-xl italic tracking-wide mb-3">Our Services</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">프리미엄 진료 서비스</h2>
            </div>
          </ScrollReveal>

          {/* Featured - 2 large */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-stretch">
            {heroServices.slice(0, 2).map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.1} className="h-full">
                <HoverCard href={service.href} className="group block bg-primary text-white p-8 sm:p-14 relative overflow-hidden min-h-[280px] sm:min-h-[320px] flex flex-col justify-end h-full">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/55" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-8 right-8">
                    <span className="font-serif text-7xl italic text-white/[0.04]">{service.en}</span>
                  </div>
                  <div className="relative">
                    <p className="font-serif text-accent-light/90 text-sm italic tracking-wide mb-3">{service.en}</p>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{service.name}</h3>
                    <p className="text-[14px] text-white/65 mb-6 max-w-sm">{service.desc}</p>
                    <div className="flex items-center gap-2 text-accent text-[12px] font-medium tracking-[0.1em] uppercase">
                      <span>View Details</span>
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Remaining - 5 small */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border-color/40 items-stretch">
            {heroServices.slice(2).map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.08} className="h-full">
                <HoverCard href={service.href} className="group block bg-card-bg p-7 sm:p-8 min-h-[220px] flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover opacity-[0.14] group-hover:opacity-[0.2] transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-card-bg/85 to-card-bg" />
                  </div>
                  <p className="relative font-serif text-accent/70 text-[13px] italic tracking-wide">{service.en}</p>
                  <div className="relative">
                    <h3 className="text-[16px] font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 tracking-tight">
                      {service.name}
                    </h3>
                    <p className="text-[12px] text-text-muted leading-relaxed">{service.desc}</p>
                  </div>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Break */}
      <section className="relative h-[45vh] overflow-hidden">
        <ParallaxImage
          className="w-full h-full"
          label="DK Oxygen Solution"
          src="/content/home/parallax-oxygen.jpg"
          alt="DK서울의원 산소치료 솔루션 비주얼"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 sm:p-16">
          <ScrollReveal>
            <p className="font-serif text-accent-light text-2xl sm:text-3xl italic max-w-2xl leading-relaxed">
              &ldquo;아름다움은 과학이며, 케어는 예술입니다&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why DK */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/[0.02] blob-shape animate-float-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ScrollReveal>
                <p className="font-serif text-accent text-xl italic tracking-wide mb-4">Why DK Seoul Clinic</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
                  왜<br />DK서울의원<br />인가
                </h2>
                <div className="gold-line mb-8" />
                <p className="text-[14px] text-text-muted leading-relaxed max-w-sm">
                  자체 줄기세포 연구소를 보유한 프리미엄 의료기관으로, 과학적 근거와 예술적 감각이 만나는 곳입니다.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-0 border-t border-border-color">
                {[
                  { num: "01", title: "자체 줄기세포 연구소", desc: "세포 연구실과 뱅킹 연구실을 갖춘 자체 연구소에서 줄기세포 관련 연구와 진료 인프라를 운영합니다. GMP 수준을 고려한 시설 환경으로 일관된 세포 관리 체계를 구축하고 있습니다." },
                  { num: "02", title: "전문의 심층 상담", desc: "비만 전문 인증의이자 국제 생활습관의학 전문의의 1:1 맞춤 상담으로 정확한 진단과 최적의 처방을 설계합니다." },
                  { num: "03", title: "정품 · 정량 · 정직", desc: "정품·정량 원칙을 바탕으로 각 시술의 기준과 사용 계획을 투명하게 안내합니다." },
                  { num: "04", title: "프리미엄 VIP 공간", desc: "힐링과 케어를 위해 설계된 프리미엄 라운지에서, 시술의 시작부터 끝까지 편안하고 특별한 경험을 선사합니다." },
                ].map((item, i) => (
                  <ScrollReveal key={item.num} delay={i * 0.08}>
                    <div className="group py-8 border-b border-border-color flex gap-8 hover:bg-section-bg/40 transition-colors duration-500 px-4 -mx-4">
                      <span className="font-serif text-3xl italic text-accent/50 group-hover:text-accent transition-colors duration-500 shrink-0 w-12 pt-1">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{item.title}</h3>
                        <p className="text-[13px] text-text-muted leading-relaxed max-w-md">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
      <section className="py-28 bg-section-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-serif text-accent text-xl italic tracking-wide mb-3">Your Journey</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">시술 여정 안내</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {journeySteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1} className="h-full">
                <div className="group bg-card-bg p-8 relative overflow-hidden hover:bg-primary transition-colors duration-700 h-full">
                  <span className="absolute top-4 right-4 font-serif text-6xl italic text-foreground/[0.03] group-hover:text-white/[0.06] transition-colors duration-700">
                    {step.num}
                  </span>
                  <div className="relative">
                    <div className="w-8 h-px bg-accent mb-6 group-hover:w-12 transition-all duration-500" />
                    <span className="font-serif text-accent text-sm italic mb-3 block group-hover:text-accent-light transition-colors duration-700">Step {step.num}</span>
                    <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight group-hover:text-white transition-colors duration-700">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-text-muted leading-relaxed group-hover:text-white/70 transition-colors duration-700">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Guide - Interactive Accordion */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div>
                <p className="font-serif text-accent text-xl italic tracking-wide mb-3">Treatment Guide</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">진료 분야</h2>
              </div>
              <p className="text-[14px] text-text-muted max-w-sm leading-relaxed lg:text-right">
                각 분야를 클릭하여 세부 시술 항목을 확인하세요.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <TreatmentAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-20" />
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-accent/[0.03] blob-shape animate-float-slow" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-serif text-accent-light/90 text-xl italic tracking-wide mb-6">Begin Your Journey</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              건강한 아름다움의<br />시작
            </h2>
            <div className="gold-line mx-auto mb-10" />
            <p className="text-[15px] text-white/70 mb-14 max-w-md mx-auto leading-relaxed">
              DK서울의원의 전문 의료진이 1:1 맞춤 상담을 통해<br />
              최적의 치료 계획을 설계해 드립니다.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-14 py-5 bg-accent text-white text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-accent-dark transition-all duration-300"
            >
              <span>Make a Reservation</span>
              <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
