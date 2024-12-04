import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "./Button";

interface PartnershipCardProps {
  title: string;
  subtitle: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  iconSrc: string;
  buttonIcon: React.ReactNode;
}

export default function PartnershipCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  iconSrc,
  buttonIcon,
}: PartnershipCardProps) {
  return (
    <div className="relative w-full max-w-[564px] bg-gradientTertiary hover:bg-gradientTertiaryHover transition-all duration-300 ease-in-out rounded-[1.75rem] flex flex-shrink-0">
      <div className="flex flex-col w-full gap-6 p-10">
        {/* Header Section */}
        <div className="flex items-start gap-3">
          <Image
            src={iconSrc}
            alt="Icon"
            className="mt-2 w-6 h-6"
            width={24}
            height={24}
          />
          <div>
            <h4 className="text-h4 text-text-blackPrimary font-medium">
              <span className="text-text-purple1">{title.split(",")[0]}</span>
              {title.split(",")[1] && ` ${title.split(",")[1].trim()}`}
            </h4>
            <p className="text-body3 text-text-blackSecondary mt-2">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative flex items-end justify-between mt-6">
          {/* Image */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-[350px] h-auto rounded-t-xl -mb-10"
            width={350}
            height={200}
          />
          {/* Button */}
          <div>
            <Button variant="tertiary">{buttonIcon}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
