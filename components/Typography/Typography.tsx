import { ReactNode } from 'react';

const Heading1 = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <h1 className="font-medium text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl mb-8">
      {children}
    </h1>
  );
};

const ArticleTitle = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <h1 className="font-medium text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-full lg:w-3/4">
      {children}
    </h1>
  );
};

const Heading2 = ({ children }: { children: ReactNode }): JSX.Element => {
  return <h2 className={'font-medium text-3xl lg:text-4xl 2xl:text-4xl'}>{children}</h2>;
};

const Heading3 = ({ children }: { children: ReactNode }): JSX.Element => {
  return <h3 className="font-medium text-2xl lg:text-3xl mt-8">{children}</h3>;
};

const Heading4 = ({ children }: { children: ReactNode }): JSX.Element => {
  return <h4 className={`font-medium text-xl mt-8`}>{children}</h4>;
};

const Heading5 = ({ children }: { children: ReactNode }): JSX.Element => {
  return <h5 className="font-medium text-lg lg:text-xl mb-4">{children}</h5>;
};

const Heading6 = ({ children }: { children: ReactNode }): JSX.Element => {
  return <h6 className="font-medium text-lg lg:text-xl mb-4">{children}</h6>;
};

const Paragraph = ({ children }: { children: ReactNode }): JSX.Element => {
  return <p className="break-words text-base xl:text-lg 2xl:text-xl mt-4">{children}</p>;
};

const Legal = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <p className="font-light text-sm leading-normal lg:leading-loose mt-8">{children}</p>
  );
};

const Eyebrow = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <h4 className="text-xs pb-4 inline-flex font-medium uppercase tracking-spread text-apadmiOrange">
      {children}
    </h4>
  );
};

const CardTitle = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <h3 className="font-medium text-2xl lg:text-3xl xl:text-3xl mb-4">{children}</h3>
  );
};

const TypograghyVariants = {
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  eyebrow: Eyebrow,
  legal: Legal,
  cardTitle: CardTitle,
  articleTitle: ArticleTitle,
};

interface TypographyProps {
  variant: keyof typeof TypograghyVariants;
  children: ReactNode;
}

const Typography = ({ variant, children }: TypographyProps) => {
  const Component = TypograghyVariants[variant];
  if (!Component) return null;

  return <Component>{children}</Component>;
};
export default Typography;
