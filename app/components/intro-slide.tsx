import { Background, type SlideProps } from "./background";

export function IntroSlide({ slideNumber, totalSlides }: SlideProps) {
  return (
    <Background slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="flex h-full flex-col justify-center px-16">
        <h1 className="text-8xl font-bold text-white">Tixel × Vercel</h1>
        <p className="mt-6 font-mono text-xl text-[#666]">2026-08-28</p>
      </div>
    </Background>
  );
}
