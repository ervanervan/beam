"use client";
import { AccessibilityIcon } from "../../../../public/assets/icons/AccessibilityIcon";
import { ArrowRightLongIcon } from "../../../../public/assets/icons/ArrowRightLongIcon";
import Button from "@/components/Button";
import GarageLocation from "@/sections/GarageLocation";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import VehicleSafety from "@/sections/VehicleSafety";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function City() {
  const tHero = useTranslations("CityPage.Hero");
  const tHelp = useTranslations("CityPage.Help");
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "id";

  return (
    <>
      <Hero
        title={tHero("title")}
        description={tHero("description")}
        backgroundClass="bg-hero-city-pattern"
      >
        <div className="flex flex-col md:flex-row gap-3 mt-11">
          <Link href={`/${currentLocale}/download`}>
            <Button
              variant="primary"
              icon={<ArrowRightLongIcon />}
              iconPosition="right"
            >
              {tHero("downloadButton")}
            </Button>
          </Link>
        </div>
        <Button
          variant="secondary"
          icon={<AccessibilityIcon />}
          className="px-[10px]"
        ></Button>
      </Hero>
      <GarageLocation />
      <VehicleSafety />
      <Help
        title={tHelp("title")}
        description={tHelp("description")}
        backgroundClass="bg-city-pattern"
      >
        <Button
          variant="primary"
          icon={<ArrowRightLongIcon />}
          iconPosition="right"
        >
          {tHelp("bringBeamButton")}
        </Button>
      </Help>
    </>
  );
}
