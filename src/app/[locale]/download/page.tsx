import { AccessibilityIcon } from "../../../../public/assets/icons/AccessibilityIcon";
import Button from "@/components/Button";
import Hero from "@/sections/Hero";
import QrCode from "@/sections/QrCode";
import { useTranslations } from "next-intl";
import React from "react";

export default function Download() {
  const t = useTranslations("DownloadPage");
  return (
    <>
      <Hero
        title={t("title")}
        description={t("description")}
        backgroundClass="bg-hero-download-pattern"
      >
        <>
          <div className="flex flex-col md:flex-row gap-3 mt-11">
            <Button variant="primary">{t("iosButton")}</Button>
            <Button variant="primary">{t("androidButton")}</Button>
          </div>
          <Button
            variant="secondary"
            icon={<AccessibilityIcon />}
            className="px-[10px]"
          ></Button>
        </>
      </Hero>
      <QrCode />
    </>
  );
}
