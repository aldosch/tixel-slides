import { Background, type SlideProps } from "./background";
import { TixelWordmark, VercelWordmark } from "./logos";

export function IntroSlide({ slideNumber, totalSlides }: SlideProps) {
  return (
    <Background
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      hideFooterLogos
    >
      <div className="flex h-full flex-col justify-center px-16">
        <div className="flex items-center gap-10">
          <TixelWordmark className="h-20 w-auto" />
          <span className="text-5xl font-light text-[#444]">×</span>
          <VercelWordmark className="h-14 w-auto text-white" />
        </div>
        <p className="mt-10 font-mono text-xl text-[#666]">2026-08-28</p>
      </div>
    </Background>
  );
}
