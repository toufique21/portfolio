import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/data/portfolio";

export function Approach() {
  return (
    <section id="approach" className="section-pad pt-0">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            kicker="04 — Approach"
            title={
              <>
                From first walk-through{" "}
                <span className="text-white/40">to final test.</span>
              </>
            }
          >
            One method, whatever the system. No energising on assumptions.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 60} className="h-full">
              <div className="glass-card h-full rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mint/65">
                    Step
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-[10px] text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-9 text-lg font-semibold tracking-[-0.02em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
