interface ProductCardProps {
  name: string;
  description: string;
  benefits: string[];
  targets: string[];
  isSignature?: boolean;
}

export default function ProductCard({ name, description, benefits, targets, isSignature }: ProductCardProps) {
  return (
    <div className={`service-card p-7 border ${isSignature ? "border-accent/40 bg-gradient-to-b from-[#faf7f0] to-white ring-1 ring-accent/10" : "border-border-color/60 bg-card-bg"}`}>
      {isSignature && (
        <span className="inline-block px-4 py-1.5 bg-primary text-accent text-[11px] font-semibold tracking-[0.1em] uppercase mb-4">
          Signature
        </span>
      )}
      <div className="w-full h-44 bg-section-bg mb-5 flex items-center justify-center text-text-muted/60 text-[12px] tracking-widest uppercase">
        Product Image
      </div>
      <h3 className="text-[16px] font-semibold text-foreground mb-2 tracking-tight">{name}</h3>
      <p className="text-[13px] text-text-muted leading-relaxed mb-5">{description}</p>

      <div className="mb-4">
        <h4 className="text-[12px] font-semibold text-accent tracking-[0.1em] uppercase mb-3">Benefits</h4>
        <ul className="space-y-1.5">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] text-text-muted">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-border-color/40">
        <h4 className="text-[12px] font-semibold text-accent tracking-[0.1em] uppercase mb-3">Recommended For</h4>
        <div className="flex flex-wrap gap-2">
          {targets.map((t, i) => (
            <span key={i} className="px-3 py-1.5 bg-section-bg text-[12px] text-text-muted tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
