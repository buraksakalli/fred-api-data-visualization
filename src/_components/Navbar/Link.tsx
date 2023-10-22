import NextLink from "next/link";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <NextLink
      href={href}
      className="uppercase text-md font-medium transition-colors text-primary-white hover:text-primary-white/80 sm:text-sm"
    >
      {children}
    </NextLink>
  );
};
