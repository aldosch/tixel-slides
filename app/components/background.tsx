import type { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
  slideNumber?: number;
  totalSlides?: number;
};

export function Background({
  children,
  slideNumber,
  totalSlides,
}: BackgroundProps) {
  return (
    <div className="relative h-full w-full bg-black">
      <div
        className="absolute w-px bg-[#242424]"
        style={{ left: "6.4%", top: 0, bottom: 0, pointerEvents: "none" }}
      />
      <div
        className="absolute w-px bg-[#242424]"
        style={{ right: "6.4%", top: 0, bottom: 0, pointerEvents: "none" }}
      />
      <div
        className="absolute h-px bg-[#242424]"
        style={{ top: "11.2%", left: "6.4%", right: "6.4%", pointerEvents: "none" }}
      />
      <div
        className="absolute h-px bg-[#242424]"
        style={{ bottom: "11.2%", left: "6.4%", right: "6.4%", pointerEvents: "none" }}
      />

      <div
        className="absolute"
        style={{ top: "11.2%", left: "6.4%", right: "6.4%", bottom: "11.2%" }}
      >
        {children}
      </div>

      <div
        className="absolute flex items-center gap-2 text-white"
        style={{ bottom: "4%", left: "9%" }}
      >
        <svg
          aria-label="Vercel logotype"
          role="img"
          viewBox="0 0 76 65"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 fill-white"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
      </div>

      {slideNumber && totalSlides ? (
        <div
          className="absolute font-mono text-xs text-[#666]"
          style={{ bottom: "4%", right: "9%" }}
        >
          {slideNumber}/{totalSlides}
        </div>
      ) : null}
    </div>
  );
}
