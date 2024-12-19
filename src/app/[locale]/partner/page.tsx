"use client";
import { AccessibilityIcon } from "../../../../public/assets/icons/AccessibilityIcon";
import { ArrowRightLongIcon } from "../../../../public/assets/icons/ArrowRightLongIcon";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import Benefits from "@/sections/Benefits";
import Feature from "@/sections/Feature";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import Testimonial from "@/sections/Testimonial";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Partner() {
  const t = useTranslations("PartnerPage");
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "id";
  return (
    <>
      <Hero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundClass="bg-hero-partner-pattern"
      >
        <div className="flex flex-col md:flex-row gap-3 mt-11">
          <Link href={`/${currentLocale}/download`}>
            <Button
              variant="primary"
              icon={<ArrowRightLongIcon />}
              iconPosition="right"
            >
              {t("buttons.downloadApp")}
            </Button>
          </Link>
        </div>
        <Button
          variant="secondary"
          icon={<AccessibilityIcon />}
          className="px-[10px]"
        ></Button>
      </Hero>
      <Benefits />
      <Feature
        tag={t("feature.tag")}
        title={t("feature.title")}
        description={t("feature.description")}
        button={t("feature.button")}
      />
      <Testimonial />
      <Help
        title={t("help.title")}
        description={t("help.description")}
        backgroundClass="bg-partner-pattern"
      >
        <Button
          variant="primary"
          icon={<ArrowRightLongIcon />}
          iconPosition="right"
        >
          {t("buttons.collaborateNow")}
        </Button>
      </Help>
    </>
  );
}
