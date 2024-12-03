"use client";
import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import imageFeature1 from "@/assets/images/feature-image1.png";
import imageFeature2 from "@/assets/images/feature-image1.png";
import imageFeature3 from "@/assets/images/feature-image1.png";
import { useState } from "react";

const ArrowLeftIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13L2 8M2 8L7 3M2 8H14"
      stroke="#1F1F1F"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3L14 8M14 8L9 13M14 8H2"
      stroke="#1F1F1F"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-center">
          <div className="flex flex-col">
            <Tag>Fitur kami</Tag>
            <h3 className="mt-8 text-text-blackPrimary text-h3 font-medium">
              Perjalanan grup
            </h3>
            <p className="mt-3 text-text-blackSecondary text-body1">
              Nikmati perjalanan seru bersama teman dan keluarga dengan fitur
              Perjalanan Grup, di mana Anda dapat berkendara bersama menggunakan
              satu akun. Fitur ini tersedia di beberapa kota tertentu.
            </p>
            <div className="mt-6">
              <Button
                variant="tertiary"
                icon={<ArrowRightIcon />}
                iconPosition="right"
              >
                Pelajari selengkapnya
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
                    icon={<ArrowLeftIcon />}
                    className="border border-tertiary-200"
                    onClick={prevImage}
                  />
                  <Button
                    variant="secondary"
                    icon={<ArrowRightIcon />}
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
