import Image from "next/image";

interface VisualPanelProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  eyebrow?: string;
  fit?: "cover" | "contain";
  imageClassName?: string;
  priority?: boolean;
}

export default function VisualPanel({
  src,
  alt,
  className,
  caption,
  eyebrow,
  fit = "cover",
  imageClassName,
  priority = false,
}: VisualPanelProps) {
  const fitClassName = fit === "contain" ? "object-contain p-6 sm:p-8" : "object-cover";

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-border-color/50 bg-section-bg ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 34vw, (min-width: 768px) 48vw, 100vw"
        className={`${fitClassName} ${imageClassName ?? ""}`}
      />
      {(caption || eyebrow) && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/65 via-primary/20 to-transparent p-5 text-white">
          {eyebrow && (
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
              {eyebrow}
            </p>
          )}
          {caption && (
            <p className="max-w-sm text-sm font-medium leading-relaxed">{caption}</p>
          )}
        </div>
      )}
    </div>
  );
}
