import { Background } from "./background";

type PainPoint = {
  title: string;
  detail: string;
};

const painPoints: PainPoint[] = [
  {
    title: "Shadow IT",
    detail:
      "Non-engineers are deploying apps without IT oversight — AI adoption is outpacing governance.",
  },
  {
    title: "Coolify / VPS has no guardrails",
    detail:
      "Current deployment path works but lacks SSO, access controls, and observability.",
  },
  {
    title: "Static API keys in containers",
    detail:
      "Long-lived credentials sitting in containers are a security risk they want to eliminate.",
  },
  {
    title: "Need framework flexibility",
    detail:
      "Team values Nuxt, Python, and Next.js — they don't want to be locked into one stack.",
  },
];

function PainRow({ point, index }: { point: PainPoint; index: number }) {
  return (
    <div className="flex items-stretch border-b border-[#242424]">
      <div className="flex w-24 items-center justify-center border-r border-[#242424] py-8">
        <span className="font-mono text-2xl text-[#A0A0A0]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center px-8 py-8">
        <span className="text-2xl font-semibold text-white">{point.title}</span>
        <span className="mt-2 text-lg text-[#A0A0A0]">{point.detail}</span>
      </div>
    </div>
  );
}

export function WhatWeHeardSlide() {
  return (
    <Background slideNumber={2} totalSlides={3}>
      <div className="flex h-full flex-col">
        <div className="py-10">
          <span className="rounded-full bg-white px-8 py-3 text-xl font-medium text-black">
            Here&apos;s what we heard
          </span>
        </div>

        <div className="border-t border-[#242424]">
          {painPoints.map((point, index) => (
            <PainRow key={point.title} point={point} index={index} />
          ))}
        </div>
      </div>
    </Background>
  );
}
