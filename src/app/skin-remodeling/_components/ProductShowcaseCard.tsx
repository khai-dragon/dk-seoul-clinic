import Image from "next/image";

interface ProductShowcaseCardProps {
  name: string;
  description: string;
  benefits: string[];
  targets: string[];
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  imageFit?: "cover" | "contain";
  imageClassName?: string;
  imageWrapperClassName?: string;
  isSignature?: boolean;
}

export default function ProductShowcaseCard({
  name,
  description,
  benefits,
  targets,
  imageSrc,
  imageAlt,
  badge,
  imageFit = "cover",
  imageClassName,
  imageWrapperClassName,
  isSignature = false,
}: ProductShowcaseCardProps) {
  const shellClassName = isSignature
    ? "border-accent/40 bg-gradient-to-b from-[#faf7f0] to-white ring-1 ring-accent/10"
    : "border-border-color/60 bg-card-bg";
  const fitClassName =
    imageFit === "contain" ? "object-contain p-6 sm:p-7" : "object-cover";

  return (
    <article className={`service-card border p-7 ${shellClassName}`}>
      <div
        className={`relative mb-6 h-56 overflow-hidden rounded-[24px] border border-border-color/50 bg-gradient-to-b from-white to-section-bg ${imageWrapperClassName ?? ""}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 26vw, (min-width: 768px) 40vw, 100vw"
          className={`${fitClassName} ${imageClassName ?? ""}`}
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          {badge ? (
            <span className="rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent backdrop-blur">
              {badge}
            </span>
          ) : (
            <span />
          )}
          {isSignature && (
            <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-accent">
              SIGNATURE
            </span>
          )}
        </div>
      </div>

      <h3 className="mb-2 text-[18px] font-semibold tracking-tight text-foreground">
        {name}
      </h3>
      <p className="mb-5 text-[13px] leading-relaxed text-text-muted">
        {description}
      </p>

      <div className="mb-5">
        <h4 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
          Key Benefits
        </h4>
        <ul className="space-y-1.5">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2.5 text-[13px] text-text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border-color/40 pt-4">
        <h4 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
          Recommended For
        </h4>
        <div className="flex flex-wrap gap-2">
          {targets.map((target) => (
            <span
              key={target}
              className="bg-section-bg px-3 py-1.5 text-[12px] tracking-wide text-text-muted"
            >
              {target}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
