import Image from "next/image";

type ContentImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fit?: "cover" | "contain";
  overlay?: boolean;
  priority?: boolean;
};

export default function ContentImageFrame({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1536px) 960px, (min-width: 1280px) 860px, (min-width: 1024px) calc(100vw - 24rem), 100vw",
  fit = "cover",
  overlay = false,
  priority = false,
}: ContentImageFrameProps) {
  const wrapperClassName = [
    "relative overflow-hidden rounded-2xl border border-border-color/50 bg-section-bg",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const imageClassName =
    fit === "contain" ? "object-contain p-6" : "object-cover";

  return (
    <div className={wrapperClassName}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
      ) : null}
    </div>
  );
}
