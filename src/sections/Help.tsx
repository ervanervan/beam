import bulletIcon from "@/assets/images/bullet-icon.svg";
import Button from "@/components/Button";
import Image from "next/image";

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_282_963)">
      <path
        d="M1.5 4.5C1.5 10.0227 5.97733 14.5 11.5 14.5H13C13.3978 14.5 13.7794 14.342 14.0607 14.0607C14.342 13.7794 14.5 13.3978 14.5 13V12.0853C14.5 11.7413 14.266 11.4413 13.932 11.358L10.9833 10.6207C10.69 10.5473 10.382 10.6573 10.2013 10.8987L9.55467 11.7607C9.36667 12.0113 9.042 12.122 8.748 12.014C7.65659 11.6128 6.66544 10.9791 5.84319 10.1568C5.02094 9.33456 4.38725 8.34341 3.986 7.252C3.878 6.958 3.98867 6.63333 4.23933 6.44533L5.10133 5.79867C5.34333 5.618 5.45267 5.30933 5.37933 5.01667L4.642 2.068C4.60143 1.9058 4.50781 1.7618 4.37604 1.65889C4.24426 1.55598 4.08187 1.50006 3.91467 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V4.5Z"
        stroke="#F9F9F9"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_282_963">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function Help() {
  return (
    <section>
      <div className="relative container max-w-xs md:max-w-[44rem] lg:max-w-6xl pt-10 border-x border-others-santasGray border-dashed">
        <div className="absolute z-10 -top-[5px] -left-1">
          <Image
            src={bulletIcon}
            alt="Bullet icon"
            className="size-2"
            draggable="false"
          />
        </div>

        <div className="absolute z-10 -top-[5px] -right-1">
          <Image
            src={bulletIcon}
            alt="Bullet icon"
            className="size-2"
            draggable="false"
          />
        </div>
      </div>
      <div className="relative z-20 container lg:px-16 w-full bg-cover bg-center bg-help-pattern xl:rounded-[2rem]">
        <div className="flex flex-col justify-center w-full md:max-w-[720px] h-[496px]">
          <h1 className="text-h2 md:text-h1 font-semibold text-text-whitePrimary">
            Masih ada pertanyaan?
          </h1>
          <p className="text-body1 text-text-whiteSecondary mt-3">
            Jika ingin tahu lebih lanjut tentang Beam atau tertarik bermitra
            bersama kami, kami dengan senang hati membantu Anda. Hubungi kami
            sekarang dan mari ciptakan sesuatu yang hebat bersama.
          </p>
          <div className="mt-8">
            <Button variant="primary" icon={<PhoneIcon />} iconPosition="right">
              Hubungi kami
            </Button>
          </div>
        </div>
      </div>
      <div className="relative container max-w-xs md:max-w-[44rem] lg:max-w-6xl pt-10 border-x border-others-santasGray border-dashed"></div>
    </section>
  );
}
