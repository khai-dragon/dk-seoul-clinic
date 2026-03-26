interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative pt-[72px]">
      <div className="bg-primary text-white relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 texture-overlay opacity-30" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="font-serif text-accent-light text-lg italic tracking-wide mb-4">
              {subtitle}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="text-[15px] text-white/60 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
            <div className="gold-line mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
