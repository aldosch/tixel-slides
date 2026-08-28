import { Background, type SlideProps } from "./background";

type AgendaLink = {
  label: string;
  url: string;
};

type AgendaSubItem = {
  label: string;
  links?: AgendaLink[];
};

type AgendaItem = {
  label: string;
  children?: AgendaSubItem[];
};

const agendaItems: AgendaItem[] = [
  { label: "Intros" },
  { label: "What we heard" },
  {
    label: "Platform demo",
    children: [
      { label: "How do we deploy?" },
      {
        label: "How do we build agents?",
        links: [
          { label: "Eve", url: "https://eve.dev" },
          { label: "AI Gateway", url: "https://vercel.com/docs/ai-gateway" },
        ],
      },
      {
        label: "Governance; auth, integrations, observability",
        links: [
          { label: "Passport", url: "https://vercel.com/docs/passport" },
          { label: "Connect", url: "https://vercel.com/docs/connect" },
          {
            label: "Observability",
            url: "https://vercel.com/docs/observability",
          },
        ],
      },
    ],
  },
  { label: "Q&A" },
];

function AgendaRow({ item, index }: { item: AgendaItem; index: number }) {
  return (
    <>
      <div className="flex items-stretch border-b border-[#242424]">
        <div className="flex w-24 items-center justify-center border-r border-[#242424] py-7">
          <span className="font-mono text-2xl text-[#A0A0A0]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-1 items-center px-8">
          <span className="text-2xl font-semibold text-white">{item.label}</span>
        </div>
      </div>
      {item.children?.map((child) => (
        <div
          key={child.label}
          className="flex items-stretch border-b border-[#242424]"
        >
          <div className="w-24 shrink-0 border-r border-[#242424]" />
          <div className="flex flex-1 flex-col justify-center px-8 py-5">
            <div className="flex items-center">
              <span className="text-xl text-[#A0A0A0]">{child.label}</span>
            </div>
            {child.links && (
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                {child.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[#666] underline decoration-[#333] underline-offset-4 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export function AgendaSlide({ slideNumber, totalSlides }: SlideProps) {
  return (
    <Background slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="flex h-full flex-col justify-center">
        <div className="border-t border-[#242424]">
          {agendaItems.map((item, index) => (
            <AgendaRow key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </Background>
  );
}
