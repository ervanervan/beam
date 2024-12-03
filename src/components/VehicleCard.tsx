import React from "react";
import Button from "./Button";
import Image, { StaticImageData } from "next/image";

interface VehicleCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  onButtonClick?: () => void; // Optional click handler
}

const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
      stroke="#F9F9F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function VehicleCard({
  imageSrc,
  title,
  onButtonClick,
}: VehicleCardProps) {
  return (
    <div className="bg-gradientPrimary hover:bg-gradientPrimaryHover transition-all duration-300 ease-in-out rounded-3xl">
      <div className="flex flex-col px-6 md:px-10 pb-6 md:pb-10 pt-6">
        <div className="flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={`${title} image`}
            className="w-[254px] h-auto"
          />
        </div>
        <div className="flex items-center justify-between mt-7">
          <h4 className="text-h5 md:text-h4 font-medium text-text-blackPrimary">
            {title}
          </h4>
          <Button
            variant="tertiary"
            icon={<ArrowRightIcon />}
            onClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
