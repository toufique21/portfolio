import { BoltIcon } from "@/components/icons";
import { About } from "@/components/sections/about";
import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const specialties = [
  "Transformer systems",
  "Solar EPC",
  "Lift electrification",
  "Generator & backup",
  "Substation & switchgear",
  "Preventive maintenance",
];

function SpecialtiesMarquee() {
  return (
    <div className="relative mt-16 border-y border-white/10 bg-white/[0.02] py-4 sm:mt-20">
      <p className="sr-only">
        Specialties: {specialties.join(", ")}.
      </p>
      <div aria-hidden="true" className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-8 pr-8"
            >
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="inline-flex items-center gap-3 whitespace-nowrap"
                >
                  <BoltIcon className="size-3 text-mint/45" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
                    {specialty}
                  </span>
                  <span className="size-1 rounded-full bg-mint/30" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <SpecialtiesMarquee />
        <Expertise />
        <Work />
        <About />
        <Approach />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
