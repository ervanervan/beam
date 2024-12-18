"use client";
import ArrowLeftBlackIcon from "../../public/assets/icons/ArrowLeftBlackIcon";
import ArrowRightBlackIcon from "../../public/assets/icons/ArrowRightBlackIcon";
import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import userTertimonial1 from "../../public/assets/images/user-testimonial1.svg";
import userTertimonial2 from "../../public/assets/images/user-testimonial2.svg";
import userTertimonial3 from "../../public/assets/images/user-testimonial3.svg";
import partnerLogo1 from "../../public/assets/images/tertimonial-logo1.svg";
import partnerLogo2 from "../../public/assets/images/tertimonial-logo2.svg";
import partnerLogo3 from "../../public/assets/images/tertimonial-logo3.svg";
import { useTranslations } from "next-intl";

const testimonial = [
  {
    quote:
      "#BeamBooster adalah inisiatif cerdas yang menggunakan skuter listrik Beam untuk mendatangkan lebih banyak orang di pintu kami. Kami sangat senang bisa terlibat.",
    author: "Helen Rutherford",
    position: "Komisaris",
    userTestimonialImage: userTertimonial1,
    partnerLogo: partnerLogo1,
  },
  {
    quote:
      "Program ini membantu meningkatkan pengunjung harian di toko kami. Skuter Beam sangat menarik perhatian, dan kami melihat dampak positifnya.",
    author: "Jane Smith",
    position: "Manajer Toko ABC",
    userTestimonialImage: userTertimonial2,
    partnerLogo: partnerLogo2,
  },
  {
    quote:
      "Kami sangat terkesan dengan dampak langsung dari #BeamBooster. Ini inovasi brilian yang mendukung bisnis lokal seperti kami.",
    author: "Michael Brown",
    position: "CEO Restoran DEF",
    userTestimonialImage: userTertimonial3,
    partnerLogo: partnerLogo3,
  },
];

export default function Testimonial() {
  const t = useTranslations("Testimonial");
  // State untuk menyimpan indeks gambar yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fungsi untuk navigasi ke gambar berikutnya
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
  };

  // Fungsi untuk navigasi ke gambar sebelumnya
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonial.length) % testimonial.length
    );
  };

  // Autoplay: Jalankan interval untuk secara otomatis memperbarui testimonial
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Beralih setiap 5 detik
    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div>
          <div>
            <Tag>{t("tag")}</Tag>
          </div>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6">
            <div className="w-full lg:w-[46rem]">
              <span className="text-title font-semibold text-primary-400">
                “
              </span>
              <p className="text-h4 text-text-blackPrimary font-medium -mt-6">
                {t(`quotes.${currentIndex}.quote`)}
              </p>
            </div>

            <div className="flex lg:justify-end">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={testimonial[currentIndex].partnerLogo}
                    alt="Partner logo"
                  />
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div>
                    <Image
                      src={testimonial[currentIndex].userTestimonialImage}
                      alt="User testimonial image"
                      className="size-11"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-body3 text-text-blackPrimary ">
                      {t(`quotes.${currentIndex}.author`)}
                    </h4>
                    <span className="text-body4 text-text-blackSecondary">
                      {t(`quotes.${currentIndex}.position`)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between lg:justify-start gap-7">
            <span>{`${currentIndex + 1}/${testimonial.length}`}</span>
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                icon={<ArrowLeftBlackIcon />}
                className="border border-tertiary-200"
                onClick={prevTestimonial}
              />
              <Button
                variant="secondary"
                icon={<ArrowRightBlackIcon />}
                className="border border-tertiary-200"
                onClick={nextTestimonial}
              />
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
