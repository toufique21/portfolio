import { EnergyCore } from "@/components/energy-core";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { profile, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 size-[28rem] rounded-full bg-mint/10 blur-[110px]"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 lg:pb-20">
          <div>
            <div className="rise flex flex-wrap items-center gap-3">
              <span className="glass-chip">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-mint" />
                </span>
                {profile.availability}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
                {profile.location}
              </span>
            </div>

            <p className="kicker rise rise-1 mt-8">
              Electrical &amp; Electronics Engineer
            </p>

            <h1 className="rise rise-2 mt-5 text-[clamp(4.25rem,15vw,9.5rem)] font-semibold leading-[0.78] tracking-[-0.065em]">
              <span className="name-gradient">TURJO</span>
            </h1>

            <div className="rise rise-3 mt-6 flex items-center gap-4">
              <span className="h-px w-10 bg-mint/60" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint/75">
                Power · Solar · Motion
              </p>
            </div>

            <p className="rise rise-3 mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              {profile.intro} From load study to the final commissioning test.
            </p>

            <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="btn btn-primary">
                View selected work
                <ArrowUpRightIcon />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Start a project
                <ArrowRightIcon />
              </a>
            </div>

            <div className="rise rise-5 mt-11 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[8px] uppercase leading-4 tracking-[0.14em] text-white/35 sm:text-[9px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rise rise-3 relative lg:pl-2">
            <EnergyCore />
          </div>
        </div>
      </div>
    </section>
  );
}
