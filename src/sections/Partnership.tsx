"use client";
import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import buildingIcon from "@/assets/images/building-office-icon.svg";
import userGroupIcon from "@/assets/images/user-grup-icon.svg";
import shieldCheckIcon from "@/assets/images/shield-check.svg";
import partnershipImage1 from "@/assets/images/partnership-image1.png";
import partnershipImage2 from "@/assets/images/partnership-image2.png";
import partnershipImage3 from "@/assets/images/partnership-image3.png";
import PartnershipCard from "@/components/PartnershipCard";
import { useRef } from "react";

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

const ArrowRightWhiteIcon = () => (
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

const partnershipData = [
  {
    title: "Bekerja sama, dengan kota",
    subtitle:
      "Kami berkomitmen penuh untuk bermitra dengan pemerintah di semua tingkatan untuk membuat kehidupan kota berjalan lebih baik bagi semua orang.",
    imageSrc: partnershipImage1,
    imageAlt: "Partnership Image 1",
    iconSrc: buildingIcon,
    buttonIcon: <ArrowRightWhiteIcon />,
  },
  {
    title: "Bermitra, dengan kami",
    subtitle:
      "Di mana pun kami beroperasi, kami berusaha untuk mengembangkan operasi kami melalui kerja sama dengan komunitas setempat.",
    imageSrc: partnershipImage2,
    imageAlt: "Partnership Image 2",
    iconSrc: userGroupIcon,
    buttonIcon: <ArrowRightWhiteIcon />,
  },
  {
    title: "Akademi keselamatan, beam",
    subtitle:
      "Kami bekerja keras untuk memastikan setiap pengguna Beam selalu memperhatikan lingkungan berkendara dan menggunakan ruang bersama kota dengan baik.",
    imageSrc: partnershipImage3,
    imageAlt: "Partnership Image 3",
    iconSrc: shieldCheckIcon,
    buttonIcon: <ArrowRightWhiteIcon />,
  },
];

export default function Partnership() {
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
  return (
    <section>
      <DashedBorderContainer showTop={false} className="overflow-hidden">
        <div className="flex flex-col">
          <div className="md:max-w-lg">
            <div>
              <Tag>Kemitraaan strategis</Tag>
            </div>
            <div className="mt-8">
              <h3 className="text-h3 font-medium text-text-blackPrimary">
                Menata ulang kota Anda.
              </h3>
              <p className="mt-3 text-body1 text-text-blackSecondary">
                Kami ingin bermitra dengan Anda untuk mendorong sesuatu yang
                baru hari ini.
              </p>
            </div>
          </div>
          <div className="mt-9">
            <div className="md:flex items-center justify-between hidden">
              {/* <span>1/4</span> */}
              <div></div>
              <div className="flex items-center gap-4 md:mr-9">
                <Button
                  variant="secondary"
                  icon={<ArrowLeftIcon />}
                  onClick={handlePrev}
                />
                <Button
                  variant="secondary"
                  icon={<ArrowRightIcon />}
                  onClick={handleNext}
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
