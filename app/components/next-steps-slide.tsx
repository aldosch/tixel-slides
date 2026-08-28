import { Background, type SlideProps } from "./background";

type Step = {
  title: string;
  detail: string;
};

const steps: Step[] = [
  {
    title: "Try it with something real",
    detail:
      "Move an existing internal tool across, or build the one that keeps getting pushed down the list.",
  },
  {
    title: "Bring in the people who aren't engineers",
    detail:
      "Claude, v0, or whatever your team already reaches for. The interesting part is what they can ship safely.",
  },
  {
    title: "Let IT take the wheel",
    detail:
      "Set up users, permissions, and integrations, and get a feel for what running this day to day looks like.",
  },
  {
    title: "Compare notes",
    detail:
      "A follow-up session to work out what good looks like for Tixel, including the measures that aren't technical. If it stacks up from there, an Enterprise trial opens up the full set of controls.",
  },
];

function StepRow({ step, index }: { step: Step; index: number }) {
  return (
    <div className="flex items-stretch border-b border-[#242424]">
      <div className="flex w-24 items-center justify-center border-r border-[#242424] py-7">
        <span className="font-mono text-2xl text-[#A0A0A0]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center px-8 py-7">
        <span className="text-2xl font-semibold text-white">{step.title}</span>
        <span className="mt-2 text-lg text-[#A0A0A0]">{step.detail}</span>
      </div>
    </div>
  );
}

export function NextStepsSlide({ slideNumber, totalSlides }: SlideProps) {
  return (
    <Background slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="flex h-full flex-col justify-center">
        <h1 className="px-16 pb-10 text-6xl font-bold text-white">
          Where to from here?
        </h1>

        <div className="border-t border-[#242424]">
          {steps.map((step, index) => (
            <StepRow key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </Background>
  );
}
