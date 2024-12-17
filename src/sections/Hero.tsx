import { useTranslations } from "next-intl";

type HeroProps = {
  title: string;
  description: string;
  backgroundClass: string;
  children: React.ReactNode;
};

export default function Hero({
  title,
  description,
  backgroundClass,
  children,
}: HeroProps) {
  return (
    <section className="xl:px-7 xl:pt-7">
      <div
        className={`container lg:px-16 w-full h-[42.5rem] bg-cover bg-center xl:rounded-[2rem] ${backgroundClass}`}
      >
        <div className="flex flex-col items-start justify-center h-full mx-auto">
          <h1 className="text-text-whitePrimary text-6xl md:text-title font-semibold mt-32 w-full md:w-[519px]">
            {title}
          </h1>
          <p className="mt-3 text-body1 text-text-whiteSecondary w-full md:w-[519px]">
            {description}
          </p>
          <div className="flex items-end justify-between w-full">
            {children}
          </div>
        </div>
      </div>
      <div className="container max-w-xs md:max-w-[44rem] lg:max-w-6xl pb-10 border-x border-others-santasGray border-dashed"></div>
    </section>
  );
}
