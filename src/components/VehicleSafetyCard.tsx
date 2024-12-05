import React from "react";
import Tag from "./Tag";
import Image, { StaticImageData } from "next/image";

type VehicleSafetyCardProps = {
  tag: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  textPosition?: "left" | "right";
  imagePosition?: "left" | "right";
};

export default function VehicleSafetyCard({
  tag,
  title,
  description,
  imageSrc,
  imageAlt,
  textPosition = "left",
  imagePosition = "right",
}: VehicleSafetyCardProps) {
  const isTextLeft = textPosition === "left";
  const isImageLeft = imagePosition === "left";
  return (
    <div className="grid grid-cols-2 items-center gap-8">
      {/* Konten Teks */}
      <div className={`flex flex-col ${isTextLeft ? "order-1" : "order-2"}`}>
        <div>
          <Tag>{tag}</Tag>
        </div>
        <div>
          <h3 className="mt-8 text-h3 text-text-blackPrimary font-medium">
            {title}
          </h3>
          <p className="mt-3 text-text-blackSecondary text-body1">
            {description}
          </p>
        </div>
      </div>

      {/* Konten Gambar */}
      <div
        className={`flex justify-end ${
          isImageLeft ? "mr-auto order-1" : "order-2"
        }`}
      >
        <div className="bg-gradientPrimary rounded-3xl w-full md:w-[33rem] p-16">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full md:w-[24rem] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
