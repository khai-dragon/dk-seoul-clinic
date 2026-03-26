interface InfoCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="service-card bg-card-bg p-7 border border-border-color/60 group">
      <div className="w-8 h-px bg-accent mb-5 group-hover:w-12 transition-all duration-300" />
      <h3 className="text-[15px] font-semibold text-foreground mb-3 tracking-tight">{title}</h3>
      <p className="text-[13px] text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
