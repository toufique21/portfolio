import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
          {children}
        </div>
      ) : null}
    </div>
  );
}
