import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const Section = ({ children, id, title }: SectionProps) => {
  return (
    <section
      className="py-10 flex items-center justify-center w-full flex-col scroll-m-16"
      id={id}
    >
      <h2 className="text-primary-white font-bold text-left self-start text-3xl">
        {title}
      </h2>

      {children}
    </section>
  );
};
