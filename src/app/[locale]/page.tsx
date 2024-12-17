import { AccessibilityIcon } from "../../../public/assets/icons/AccessibilityIcon";
import { ArrowRightLongIcon } from "../../../public/assets/icons/ArrowRightLongIcon";
import { MapPinIcon } from "../../../public/assets/icons/MapPinIcon";
import { PhoneWhiteIcon } from "../../../public/assets/icons/PhoneWhiteIcon";
import Button from "@/components/Button";
import Feature from "@/sections/Feature";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import Mission from "@/sections/Mission";
import News from "@/sections/News";
import Partnership from "@/sections/Partnership";
import Priority from "@/sections/Priority";
import Vehicle from "@/sections/Vehicle";
import Videos from "@/sections/Videos";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const tHero = useTranslations("HomePage.Hero");
  const tFeature = useTranslations("HomePage.Feature");
  const tHelp = useTranslations("HomePage.Help");
  return (
    <>
      <Hero
        title={tHero("title")}
        description={tHero("description")}
        backgroundClass="bg-hero-pattern"
      >
        <>
          <div className="flex flex-col md:flex-row gap-3 mt-11">
            <Button variant="secondary" icon={<MapPinIcon />}>
              {tHero("buttons.viewGarage")}
            </Button>
            <Link href={"/download"}>
              <Button
                variant="primary"
                icon={<ArrowRightLongIcon />}
                iconPosition="right"
              >
                {tHero("buttons.downloadApp")}
              </Button>
            </Link>
          </div>
          <Button
            variant="secondary"
            icon={<AccessibilityIcon />}
            className="px-[10px]"
          ></Button>
        </>
      </Hero>
      <Mission />
      <Videos />
      <Priority />
      <Vehicle />
      <Feature
        tag={tFeature("tag")}
        title={tFeature("title")}
        description={tFeature("description")}
        button={tFeature("button")}
      />
      <News />
      <Partnership />
      <Help
        title={tHelp("title")}
        description={tHelp("description")}
        backgroundClass="bg-help-pattern"
      >
        <Button
          variant="primary"
          icon={<PhoneWhiteIcon />}
          iconPosition="right"
        >
          {tHelp("contact")}
        </Button>
      </Help>
    </>
  );
}
