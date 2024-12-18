import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import React from "react";
import CheckCircleIcon from "../../public/assets/icons/CheckCircleIcon";
import vectorBenefit from "../../public/assets/images/vector-benefit.svg";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("Benefit");
  return (
    <section>
      <DashedBorderContainer>
        <div className="text-center max-w-[37rem] mx-auto">
          <div>
            <Tag>{t("tag")}</Tag>
          </div>
          <div>
            <h3 className="mt-8 text-h3 text-text-blackPrimary font-medium">
              {t("title")}
            </h3>
            <p className="text-body1 text-text-blackSecondary mt-3">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="relative mt-14 grid grid-cols-1 lg:grid-cols-3 items-center max-w-4xl mx-auto gap-y-2">
          <div className="absolute -z-10">
            <Image src={vectorBenefit} alt="Vector benefit" />
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <CheckCircleIcon />
            </div>
            <span className="text-h4 font-medium text-text-blackPrimary">
              {t("businessSolutions")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <CheckCircleIcon />
            </div>
            <span className="text-h4 font-medium text-text-blackPrimary">
              {t("brandingAndAdvertising")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <CheckCircleIcon />
            </div>
            <span className="text-h4 font-medium text-text-blackPrimary">
              {t("higherEducationPartnership")}
            </span>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
