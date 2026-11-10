import { ContactForm } from "@/components/contact-form";
import {
  ArrowUpRightIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-pad pt-0">
      <div className="container-page">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-mint/10 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/4 size-72 rounded-full bg-ice/10 blur-[90px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
              <div>
                <p className="kicker">05 — Contact</p>
                <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
                  Let&apos;s build something{" "}
                  <span className="text-gradient">that stays on.</span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                  Tell me what you&apos;re powering. If it&apos;s a transformer
                  that keeps tripping, a rooftop that needs to pay for itself, or
                  a substation still on paper — send the basics and I&apos;ll
                  come back with a clear next step.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="glass-card flex items-center gap-4 rounded-2xl p-4"
                  >
                    <span className="icon-tile size-11 rounded-xl">
                      <MailIcon className="size-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                        Email
                      </span>
                      <span className="mt-1 block text-sm text-white">
                        {profile.email}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="ml-auto size-4 text-white/30" />
                  </a>

                  <div className="glass flex items-center gap-4 rounded-2xl p-4">
                    <span className="icon-tile size-11 rounded-xl">
                      <MapPinIcon className="size-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                        Based in
                      </span>
                      <span className="mt-1 block text-sm text-white">
                        {profile.location}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2.5 text-[11px] text-white/35">
                  <span className="size-1.5 rounded-full bg-mint/80" />
                  Usually replies within two business days
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
