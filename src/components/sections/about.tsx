import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { principles, profile, toolbox } from "@/data/portfolio";

const facts = ["5 systems", "360° delivery", "1 standard"];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
        <Reveal>
          <SectionHeading
            kicker="03 — About"
            title={
              <>
                Grounded in fundamentals.{" "}
                <span className="text-white/40">Fluent on site.</span>
              </>
            }
          />

          <div className="mt-6 space-y-5 text-sm leading-7 text-white/55">
            <p>
              I&apos;m an electrical and electronics engineer working across
              power distribution, renewables and building services. Most of my
              work sits where design meets site reality: the single-line
              diagram, the cable schedule, the earthing pit, and the 3 a.m.
              changeover that has to go right.
            </p>
            <p>
              I care about systems that are safe to operate, easy to maintain
              and properly documented. Whether I&apos;m sizing a transformer,
              commissioning an inverter or chasing an intermittent lift fault,
              the method is the same — measure, understand, then fix the root
              cause.
            </p>
          </div>

          <div className="mt-8">
            <p className="field-label">Toolbox</p>
            <div className="flex flex-wrap gap-1.5">
              {toolbox.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-mint/20 bg-mint/10 text-mint">
              <CheckIcon className="size-4" />
            </span>
            <div>
              <p className="text-sm text-white">
                B.Sc. Electrical &amp; Electronic Engineering
              </p>
              <p className="mt-0.5 text-[11px] text-white/40">
                IEB member · Certified solar PV designer
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="core-grid pointer-events-none absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-mint/10 blur-[80px]" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
                  Field notes / 001
                </p>
                <span className="glass-chip px-2.5 py-1 text-[8px]">
                  <span className="size-1.5 rounded-full bg-mint" />
                  On site
                </span>
              </div>

              <blockquote className="mt-8">
                <p className="text-2xl leading-[1.3] tracking-[-0.03em] text-white/90 sm:text-[1.7rem]">
                  &ldquo;A system is only as good as its weakest
                  termination.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-mint/60">
                  — Site rule no. 01
                </footer>
              </blockquote>

              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#05080f]/55 p-4 backdrop-blur-md">
                <div className="grid size-16 shrink-0 place-items-center rounded-2xl border border-mint/25 bg-mint/10 text-2xl font-semibold tracking-[-0.05em] text-mint">
                  T
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-xs text-white/45">{profile.role}</p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-mint/65">
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {facts.map((fact) => (
                  <div
                    key={fact}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center"
                  >
                    <p className="text-[11px] font-medium text-white/80">
                      {fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="glass-card h-full rounded-2xl p-5"
              >
                <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-mint">
                  <CheckIcon className="size-3.5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-white/45">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
