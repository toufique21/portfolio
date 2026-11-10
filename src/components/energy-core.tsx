import { expertiseIcons } from "@/components/icons";
import type { ExpertiseId } from "@/data/portfolio";

const nodes: {
  id: ExpertiseId;
  label: string;
  position: string;
  float?: string;
}[] = [
  {
    id: "transformer",
    label: "Transformer",
    position: "left-4 top-16 sm:left-6 sm:top-20",
    float: "anim-float",
  },
  {
    id: "solar",
    label: "Solar",
    position: "right-4 top-16 sm:right-6 sm:top-20",
    float: "anim-float-delayed",
  },
  {
    id: "lift",
    label: "Lift",
    position: "left-3 top-[45%] sm:left-5",
  },
  {
    id: "generator",
    label: "Generator",
    position: "right-3 top-[45%] sm:right-5",
  },
  {
    id: "substation",
    label: "Substation",
    position: "bottom-[4.5rem] left-1/2 -translate-x-1/2",
  },
];

export function EnergyCore() {
  return (
    <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-[34rem]">
      <div className="glass-strong relative aspect-square overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem]">
        <div className="core-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,255,206,0.1),transparent_58%)]" />

        <div className="absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.1),transparent)]" />

        <div className="absolute inset-[10%] rounded-full border border-white/10" />
        <div className="anim-spin-slow absolute inset-[19%] rounded-full border border-dashed border-white/[0.11]" />
        <div className="anim-spin-slower absolute inset-[30%] rounded-full border border-white/[0.08]" />
        <div className="absolute inset-[41%] rounded-full border border-mint/10" />

        <div className="anim-scan pointer-events-none absolute inset-x-8 top-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(125,255,206,0.09),transparent)]" />

        <span className="absolute left-4 top-4 size-3 border-l border-t border-white/25" />
        <span className="absolute right-4 top-4 size-3 border-r border-t border-white/25" />
        <span className="absolute bottom-4 left-4 size-3 border-b border-l border-white/25" />
        <span className="absolute bottom-4 right-4 size-3 border-b border-r border-white/25" />

        <p className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 sm:text-[9px]">
          EEE // CORE-01
        </p>

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="relative mx-auto grid size-24 place-items-center rounded-full border border-mint/25 bg-[#07120f]/85 text-mint shadow-[0_0_70px_-15px_rgba(125,255,206,0.75)] backdrop-blur-md sm:size-28">
            <span className="anim-pulse-ring absolute inset-0 rounded-full border border-mint/35" />
            <span className="anim-pulse-ring absolute inset-0 rounded-full border border-mint/20 [animation-delay:1.8s]" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="size-9 drop-shadow-[0_0_14px_rgba(125,255,206,0.8)] sm:size-11"
            >
              <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />
            </svg>
          </div>
          <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.28em] text-mint/70 sm:text-[9px]">
            System online
          </p>
        </div>

        {nodes.map((node) => {
          const Icon = expertiseIcons[node.id];

          return (
            <div
              key={node.id}
              className={`absolute z-20 ${node.position} ${node.float ?? ""}`}
            >
              <span className="glass-chip gap-1.5 px-2 py-1.5 text-[8px] sm:gap-2 sm:px-2.5 sm:py-2 sm:text-[10px]">
                <Icon className="size-3.5 text-mint/80 sm:size-4" />
                {node.label}
              </span>
            </div>
          );
        })}

        <div className="absolute inset-x-5 bottom-4 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35 sm:inset-x-6 sm:text-[9px]">
          <span>230V / 50Hz</span>
          <span className="text-mint/60">PF 0.99</span>
          <span>Status: stable</span>
        </div>
      </div>

      <div className="absolute -bottom-6 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-mint/10 blur-2xl" />
    </div>
  );
}
