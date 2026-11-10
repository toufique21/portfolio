import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { expertiseIcons } from "@/components/icons";
import { expertise } from "@/data/portfolio";

export function Expertise() {
  return (
    <section id="expertise" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            kicker="01 — Expertise"
            title={
              <>
                Five systems.{" "}
                <span className="text-white/40">One standard.</span>
              </>
            }
          >
            I work across the electrical backbone of a building or plant — the
            equipment that steps power down, keeps it running, and gets people
            moving when it does.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {expertise.map((item, index) => {
            const Icon = expertiseIcons[item.id];

            return (
              <Reveal
                key={item.id}
                delay={index * 60}
                className={`h-full ${item.span}`}
              >
                <article className="glass-card flex h-full flex-col rounded-3xl p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="icon-tile">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-white/50">
                    {item.blurb}
                  </p>

                  <ul
                    aria-label={`${item.title} capabilities`}
                    className="mt-6 flex flex-wrap gap-1.5"
                  >
                    {item.tags.map((tag) => (
                      <li key={tag}>
                        <span className="tag">{tag}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
