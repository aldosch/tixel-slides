import { Background } from "./background";

export function IntroSlide() {
  return (
    <Background slideNumber={1} totalSlides={4}>
      <div className="flex h-full flex-col justify-between py-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-[#666]">TIXEL × VERCEL</span>
        </div>

        <div>
          <h1 className="text-8xl font-bold text-white">Platform Demo</h1>
          <p className="mt-6 text-2xl text-[#A0A0A0]">
            Build, run, and control your agents
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-[#666]">
            Friday, 28 August 2026
          </span>
          <svg
            aria-label="Vercel logotype"
            role="img"
            viewBox="0 0 76 65"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 fill-white"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
        </div>
      </div>
    </Background>
  );
}
