import DashedBorderContainer from "@/components/DashedBorderContainer";
import Image from "next/image";
import thumbnailVideo from "@/assets/images/video-image.png";
import Button from "@/components/Button";

const PlayICon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.25 5.65308C5.25 4.79708 6.167 4.25508 6.917 4.66708L18.457 11.0141C18.6336 11.1111 18.781 11.2538 18.8836 11.4273C18.9862 11.6007 19.0403 11.7986 19.0403 12.0001C19.0403 12.2016 18.9862 12.3994 18.8836 12.5729C18.781 12.7463 18.6336 12.889 18.457 12.9861L6.917 19.3331C6.74569 19.4273 6.55278 19.4752 6.35731 19.4721C6.16184 19.469 5.97054 19.4151 5.80227 19.3155C5.634 19.216 5.49457 19.0744 5.39773 18.9045C5.30089 18.7347 5.24997 18.5426 5.25 18.3471V5.65308Z"
      stroke="#0F0F0F"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Videos() {
  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div className="relative">
          <Image
            src={thumbnailVideo}
            alt="Thumbnail video"
            className="w-full md:h-[536px] object-cover rounded-[32px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Button
              variant="secondary"
              icon={<PlayICon />}
              className="px-[10px]"
            ></Button>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
