import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <section className="flex h-[50dvh] flex-col pb-10 lg:flex-row">
      <div className="flex-1"></div>
      <div className="flex flex-2 items-end">
        <div>{children}</div>
      </div>
    </section>
  );
};
