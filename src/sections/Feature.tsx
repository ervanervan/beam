"use client";
import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import imageFeature1 from "../../public/assets/images/feature-image1.png";
import imageFeature2 from "../../public/assets/images/feature-image1.png";
import imageFeature3 from "../../public/assets/images/feature-image1.png";
import { useState } from "react";
import ArrowRightBlackIcon from "../../public/assets/icons/ArrowRightBlackIcon";
import ArrowLeftBlackIcon from "../../public/assets/icons/ArrowLeftBlackIcon";
import { ArrowRightLongIcon } from "../../public/assets/icons/ArrowRightLongIcon";
import { useTranslations } from "next-intl";

// type FeatureProps = {
//   tag: string;
//   title: string;
//   description: string;
// };

const images = [
  { src: imageFeature1, alt: "Feature image 1" },
  { src: imageFeature2, alt: "Feature image 2" },
  { src: imageFeature3, alt: "Feature image 3" },
];

export default function Feature() {
  // State untuk menyimpan indeks gambar yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fungsi untuk navigasi ke gambar berikutnya
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fungsi untuk navigasi ke gambar sebelumnya
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const t = useTranslations("FeatureHome");

  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-center">
          <div className="flex flex-col">
            <Tag>{t("tag")}</Tag>
            <h3 className="mt-8 text-text-blackPrimary text-h3 font-medium">
              {t("title")}
            </h3>
            <p className="mt-3 text-text-blackSecondary text-body1">
              {t("description")}
            </p>
            <div className="mt-6">
              <Button
                variant="tertiary"
                icon={<ArrowRightLongIcon />}
                iconPosition="right"
              >
                {t("button")}
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-[530px] flex flex-col gap-4">
              <div className="w-full md:h-[348px] mx-auto bg-gradientPrimary rounded-3xl">
                <div className="flex items-center justify-center p-10">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full md:w-[382px] object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>{`${currentIndex + 1}/${images.length}`}</span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="secondary"
                    icon={<ArrowLeftBlackIcon />}
                    className="border border-tertiary-200"
                    onClick={prevImage}
                  />
                  <Button
                    variant="secondary"
                    icon={<ArrowRightBlackIcon />}
                    className="border border-tertiary-200"
                    onClick={nextImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
