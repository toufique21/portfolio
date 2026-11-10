import type { ProjectSignal } from "@/data/portfolio";

const labels: Record<ProjectSignal, string> = {
  substation: "11 kV feeder",
  solar: "PV array",
  generator: "Standby power",
  lift: "Car 02 / VVVF",
};

export function ProjectVisual({ variant }: { variant: ProjectSignal }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="mini-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(125,255,206,0.18),transparent_65%)]" />

      <svg
        viewBox="0 0 400 160"
        fill="none"
        className="relative h-full w-full"
        aria-hidden="true"
      >
        <text
          x="22"
          y="26"
          className="fill-white/30 font-mono text-[8px] uppercase tracking-[0.22em]"
        >
          {labels[variant]}
        </text>
        <text
          x="378"
          y="26"
          textAnchor="end"
          className="fill-mint/50 font-mono text-[8px] uppercase tracking-[0.18em]"
        >
          Signal ok
        </text>

        <g className="stroke-white/15" strokeWidth="1">
          <path d="M0 44h400M0 84h400M0 124h400" strokeDasharray="2 9" />
        </g>

        {variant === "substation" ? (
          <g>
            <path
              d="M24 120h48V96h52V68h52v52h54V84h54V62h52"
              className="stroke-mint/45"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M72 120V96M124 96V68M176 68v52M230 120V84M284 84V62M336 62v58"
              className="stroke-white/10"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
            {[
              [72, 96],
              [124, 68],
              [176, 120],
              [230, 84],
              [284, 62],
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="3.5"
                className="fill-[#08130f] stroke-mint/70"
                strokeWidth="1.3"
              />
            ))}
          </g>
        ) : null}

        {variant === "solar" ? (
          <g
            className="stroke-mint/45"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="200" cy="82" r="30" />
            <path d="M200 36V20M200 144v-16M148 82h-16M268 82h-16M163 45l-11-11M248 130l-11-11M237 45l11-11M152 130l11-11" />
            <path
              d="M124 138h152M148 124h104"
              className="stroke-white/20"
              strokeDasharray="3 6"
            />
            <path d="M170 82h60M200 52v60" className="stroke-mint/25" />
          </g>
        ) : null}

        {variant === "generator" ? (
          <g
            className="stroke-mint/50"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 94c18 0 18-42 36-42s18 84 36 84 18-84 36-84 18 42 36 42 18-42 36-42 18 84 36 84 18-84 36-84 18 42 36 42 18-22 32-22" />
            <path
              d="M16 84h368"
              className="stroke-white/15"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <circle cx="16" cy="94" r="2.8" className="fill-mint/60" />
            <circle cx="376" cy="72" r="2.8" className="fill-mint/60" />
          </g>
        ) : null}

        {variant === "lift" ? (
          <g
            className="stroke-mint/45"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M112 18v124M288 18v124" className="stroke-white/20" />
            <path
              d="M124 36h152M124 68h152M124 100h152M124 132h152"
              className="stroke-white/10"
              strokeWidth="1"
              strokeDasharray="3 7"
            />
            <rect x="178" y="52" width="44" height="56" rx="7" />
            <path d="M192 80l8-8 8 8M192 92l8 8 8-8" className="stroke-mint/65" />
            <path d="M150 68h-14M150 100h-14M250 68h14M250 100h14" />
            <text
              x="304"
              y="72"
              className="fill-white/25 font-mono text-[7px] uppercase tracking-[0.18em]"
            >
              L04
            </text>
            <text
              x="304"
              y="104"
              className="fill-white/25 font-mono text-[7px] uppercase tracking-[0.18em]"
            >
              L03
            </text>
          </g>
        ) : null}
      </svg>
    </div>
  );
}
