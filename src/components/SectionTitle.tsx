interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-2xl sm:text-[28px] font-bold text-foreground mb-3 tracking-tight">{title}</h2>
      {subtitle && <p className="text-[14px] text-text-muted leading-relaxed max-w-2xl">{subtitle}</p>}
      <div className={`gold-line mt-5 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
