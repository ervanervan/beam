import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { AccessibilityIcon } from "@/assets/icons/AccessibilityIcon";

type ButtonConfig = {
  label?: string;
  variant: "primary" | "secondary" | "tertiary";
  icon?: "MapPin" | "ArrowRight";
  iconPosition?: "left" | "right";
  onClick?: () => void;
};

type HeroProps = {
  title: string;
  description: string;
  buttons: ButtonConfig[];
};

export default function Hero({ title, description, buttons }: HeroProps) {
  return (
    <section className="xl:px-7 xl:pt-7">
      <div className="container lg:px-16 w-full h-[42.5rem] bg-cover bg-center bg-hero-pattern xl:rounded-[2rem]">
        <div className="flex flex-col items-start justify-center h-full mx-auto">
          <h1 className="text-text-whitePrimary text-6xl md:text-title font-semibold mt-32 w-full md:w-[519px]">
            {title}
          </h1>
          <p className="mt-3 text-body1 text-text-whiteSecondary w-full md:w-[519px]">
            {description}
          </p>
          <div className="flex items-end justify-between w-full">
            <div className="flex flex-col md:flex-row gap-3 mt-11">
              {buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.variant}
                  icon={btn.icon ? <Icon name={btn.icon} /> : undefined}
                  iconPosition={btn.iconPosition}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </Button>
              ))}
            </div>
            <Button
              variant="secondary"
              icon={<AccessibilityIcon />}
              className="px-[10px]"
            ></Button>
          </div>
        </div>
      </div>
      <div className="container max-w-xs md:max-w-[44rem] lg:max-w-6xl pb-10 border-x border-others-santasGray border-dashed"></div>
    </section>
  );
}
