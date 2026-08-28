import type { ReactNode } from "react";
import { TixelIcon, VercelTriangle } from "./logos";

export type SlideProps = {
  slideNumber: number;
  totalSlides: number;
};

type BackgroundProps = {
  children: ReactNode;
  slideNumber?: number;
  totalSlides?: number;
  hideFooterLogos?: boolean;
};

export function Background({
  children,
  slideNumber,
  totalSlides,
  hideFooterLogos = false,
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

      {hideFooterLogos ? null : (
        <div
          className="absolute flex items-center gap-4 text-white"
          style={{ bottom: "4%", left: "9%" }}
        >
          <TixelIcon className="h-5 w-auto" />
          <span className="h-4 w-px bg-[#333]" />
          <VercelTriangle className="h-4 w-auto" />
        </div>
      )}

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
