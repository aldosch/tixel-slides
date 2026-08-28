import { Background, type SlideProps } from "./background";

export type DemoLink = {
  label: string;
  url: string;
};

export type DemoSlideProps = SlideProps & {
  eyebrow: string;
  title: string;
  points: string[];
  links: DemoLink[];
};

export function DemoSlide({
  eyebrow,
  title,
  points,
  links,
  slideNumber,
  totalSlides,
}: DemoSlideProps) {
  return (
    <Background slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="flex h-full flex-col justify-center px-16">
        <span className="font-mono text-sm tracking-widest text-[#666]">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-6xl font-bold text-white">{title}</h1>

        <div className="mt-12 border-t border-[#242424]">
          {points.map((point) => (
            <div key={point} className="border-b border-[#242424] py-6">
              <span className="text-2xl text-white">{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-base text-[#666] underline decoration-[#333] underline-offset-4 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Background>
  );
}

export function DeploySlide(props: SlideProps) {
  return (
    <DemoSlide
      {...props}
      eyebrow="PLATFORM DEMO"
      title="How to deploy?"
      points={[
        "Git push to production. No VPS to patch or babysit.",
        "Framework agnostic. Nuxt, Next.js, Python, and whatever comes next.",
        "Every pull request gets its own preview URL to share and review.",
        "Rollback is instant if something goes wrong.",
      ]}
      links={[
        { label: "Deployments", url: "https://vercel.com/docs/deployments" },
        {
          label: "Preview deployments",
          url: "https://vercel.com/docs/deployments/environments",
        },
      ]}
    />
  );
}

export function AgentsSlide(props: SlideProps) {
  return (
    <DemoSlide
      {...props}
      eyebrow="PLATFORM DEMO"
      title="How to create agents?"
      points={[
        "Eve gives agents durable state, runtime loops, and human approval steps.",
        "Sandbox isolation so agent code runs somewhere safe.",
        "AI Gateway routes across models and shows you what you are spending.",
        "Agents deploy the same way your apps do.",
      ]}
      links={[
        { label: "Eve", url: "https://eve.dev" },
        { label: "AI Gateway", url: "https://vercel.com/docs/ai-gateway" },
        { label: "Sandbox", url: "https://vercel.com/docs/vercel-sandbox" },
      ]}
    />
  );
}

export function GovernanceSlide(props: SlideProps) {
  return (
    <DemoSlide
      {...props}
      eyebrow="PLATFORM DEMO"
      title="Governance"
      points={[
        "Passport puts your identity provider in front of internal apps. No auth code to write.",
        "Connect issues short-lived scoped credentials for Snowflake, HubSpot, and Metabase.",
        "Observability across deployments, functions, and model spend in one place.",
        "SSO, SCIM, and role-based access bring the shadow IT estate into view.",
      ]}
      links={[
        { label: "Passport", url: "https://vercel.com/docs/passport" },
        { label: "Connect", url: "https://vercel.com/docs/connect" },
        {
          label: "Observability",
          url: "https://vercel.com/docs/observability",
        },
        {
          label: "Access control",
          url: "https://vercel.com/docs/rbac",
        },
      ]}
    />
  );
}
