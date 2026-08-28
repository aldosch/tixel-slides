import { Background, type SlideProps } from "./background";
import { TixelWordmark, VercelWordmark } from "./logos";

type Step = {
  title: string;
  detail: string;
  children?: { title: string; detail: string }[];
};

const steps: Step[] = [
  {
    title: "Definition of success",
    detail:
      "A follow-up session to work out what good looks like for Tixel, including the measures that aren't technical. If it stacks up from there, an Enterprise trial opens up the full set of controls.",
  },
  {
    title: "Enterprise trial",
    detail: "A chance to put it in front of the people who would actually use it.",
    children: [
      {
        title: "Try it with something real",
        detail:
          "Maybe we could move an existing internal tool across, or build the one that keeps getting pushed down the list.",
      },
      {
        title: "Let folks who aren't engineers try",
        detail:
          "Use Claude, v0, or whatever your team prefers to build and experiment safely.",
      },
    ],
  },
];

function StepRow({ step, index }: { step: Step; index: number }) {
  return (
    <>
      <div className="flex items-stretch border-b border-[#242424]">
        <div className="flex w-24 items-center justify-center border-r border-[#242424] py-7">
          <span className="font-mono text-2xl text-[#A0A0A0]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center px-8 py-7">
          <span className="text-2xl font-semibold text-white">
            {step.title}
          </span>
          <span className="mt-2 text-lg text-[#A0A0A0]">{step.detail}</span>
        </div>
      </div>

      {step.children?.map((child) => (
        <div
          key={child.title}
          className="flex items-stretch border-b border-[#242424]"
        >
          <div className="w-24 shrink-0 border-r border-[#242424]" />
          <div className="flex flex-1 flex-col justify-center border-l-2 border-[#333] px-8 py-5">
            <span className="text-xl font-medium text-white">
              {child.title}
            </span>
            <span className="mt-1 text-base text-[#A0A0A0]">
              {child.detail}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export function NextStepsSlide({ slideNumber, totalSlides }: SlideProps) {
  return (
    <Background
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      hideFooterLogos
    >
      <div className="flex h-full flex-col justify-center">
        <h1 className="px-16 pb-8 text-6xl font-bold text-white">
          Where to from here?
        </h1>

        <div className="border-t border-[#242424]">
          {steps.map((step, index) => (
            <StepRow key={step.title} step={step} index={index} />
          ))}
        </div>

        <div className="flex items-center gap-6 px-16 pt-10">
          <TixelWordmark className="h-9 w-auto" />
          <span className="text-2xl font-light text-[#444]">×</span>
          <VercelWordmark className="h-6 w-auto text-white" />
        </div>
      </div>
    </Background>
  );
}
