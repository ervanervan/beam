"use client";

import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import PartnershipCard from "@/components/PartnershipCard";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import ArrowLeftBlackIcon from "../../public/assets/icons/ArrowLeftBlackIcon";
import ArrowRightBlackIcon from "../../public/assets/icons/ArrowRightBlackIcon";
import ArrowRightWhiteIcon from "../../public/assets/icons/ArrowRightWhiteIcon";
import buildingIcon from "../../public/assets/images/building-office-icon.svg";
import userGroupIcon from "../../public/assets/images/user-grup-icon.svg";
import shieldCheckIcon from "../../public/assets/images/shield-check.svg";
import partnershipImage1 from "../../public/assets/images/partnership-image1.png";
import partnershipImage2 from "../../public/assets/images/partnership-image2.png";
import partnershipImage3 from "../../public/assets/images/partnership-image3.png";

export default function Partnership() {
  const t = useTranslations("Partnership");

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300; // Jumlah scroll saat tombol ditekan

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= scrollAmount;
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  const partnershipData = [
    {
      title: t("partnerships.0.title"),
      subtitle: t("partnerships.0.subtitle"),
      imageSrc: partnershipImage1,
      imageAlt: t("partnerships.0.imageAlt"),
      iconSrc: buildingIcon,
      buttonIcon: <ArrowRightWhiteIcon />,
    },
    {
      title: t("partnerships.1.title"),
      subtitle: t("partnerships.1.subtitle"),
      imageSrc: partnershipImage2,
      imageAlt: t("partnerships.1.imageAlt"),
      iconSrc: userGroupIcon,
      buttonIcon: <ArrowRightWhiteIcon />,
    },
    {
      title: t("partnerships.2.title"),
      subtitle: t("partnerships.2.subtitle"),
      imageSrc: partnershipImage3,
      imageAlt: t("partnerships.2.imageAlt"),
      iconSrc: shieldCheckIcon,
      buttonIcon: <ArrowRightWhiteIcon />,
    },
  ];

  return (
    <section>
      <DashedBorderContainer showTop={false} className="overflow-hidden">
        <div className="flex flex-col">
          <div className="md:max-w-lg">
            <div>
              <Tag>{t("tag")}</Tag>
            </div>
            <div className="mt-8">
              <h3 className="text-h3 font-medium text-text-blackPrimary">
                {t("title")}
              </h3>
              <p className="mt-3 text-body1 text-text-blackSecondary">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="mt-9">
            <div className="md:flex items-center justify-between hidden">
              <div></div>
              <div className="flex items-center gap-4 md:mr-9">
                <Button
                  variant="secondary"
                  icon={<ArrowLeftBlackIcon />}
                  onClick={handlePrev}
                  aria-label={t("buttons.prev")}
                />
                <Button
                  variant="secondary"
                  icon={<ArrowRightBlackIcon />}
                  onClick={handleNext}
                  aria-label={t("buttons.next")}
                />
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              className="mt-6 flex items-start gap-7 overflow-x-scroll scrollbar-hide smooth-scroll"
            >
              {partnershipData.map((data, index) => (
                <PartnershipCard
                  key={index}
                  title={data.title}
                  subtitle={data.subtitle}
                  imageSrc={data.imageSrc}
                  imageAlt={data.imageAlt}
                  iconSrc={data.iconSrc}
                  buttonIcon={data.buttonIcon}
                />
              ))}
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
