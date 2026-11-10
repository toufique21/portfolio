import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export function Work() {
  return (
    <section id="work" className="section-pad pt-0">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              kicker="02 — Selected work"
              title={
                <>
                  Built for the{" "}
                  <span className="text-white/40">real grid.</span>
                </>
              }
            >
              Representative projects across substations, renewables, standby
              power and vertical transport.
            </SectionHeading>
          </Reveal>

          <Reveal delay={90}>
            <p className="max-w-xs font-mono text-[9px] uppercase leading-5 tracking-[0.18em] text-white/30 sm:text-right">
              Selected systems · 2024—2025
              <br />
              Full case notes available on request
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 70}
              className="h-full"
            >
              <article className="glass-card flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative h-40 shrink-0 border-b border-white/10 sm:h-44">
                  <ProjectVisual variant={project.signal} />
                  <span className="tag absolute right-4 top-4 bg-[#05080f]/70 text-white/50 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                        {project.client}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="metric">{project.metric}</span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/50">
                    {project.summary}
                  </p>

                  <ul
                    aria-label={`${project.title} scope`}
                    className="mt-auto flex flex-wrap gap-1.5 pt-6"
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="tag">{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
