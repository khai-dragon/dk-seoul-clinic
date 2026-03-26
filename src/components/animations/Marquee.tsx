"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 30 }: MarqueeProps) {
  const content = items.join(" \u00A0\u00A0\u00A0 · \u00A0\u00A0\u00A0 ");
  const doubledContent = `${content} \u00A0\u00A0\u00A0 · \u00A0\u00A0\u00A0 ${content}`;

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="font-serif text-4xl sm:text-6xl lg:text-8xl italic text-foreground/[0.06] select-none">
          {doubledContent}
        </span>
      </div>
    </div>
  );
}
