import { ReactNode } from "react";
import Image from "next/image";
import bulletIcon from "@/assets/images/bullet-icon.svg";

interface DashedBorderContainerProps {
  children: ReactNode;
}

export default function DashedBorderContainer({
  children,
}: DashedBorderContainerProps) {
  return (
    <div className="relative border-y border-others-santasGray border-dashed">
      <div className="relative container max-w-xs md:max-w-[44rem] lg:max-w-6xl py-16 border-x border-others-santasGray border-dashed">
        {/* Bullet Icons */}
        <div className="absolute -top-1 -left-1">
          <Image
            src={bulletIcon}
            alt="Bullet icon"
            className="size-2"
            draggable="false"
          />
        </div>
        <div className="absolute -top-1 -right-1">
          <Image
            src={bulletIcon}
            alt="Bullet icon"
            className="size-2"
            draggable="false"
          />
        </div>
        <div className="absolute -bottom-1 -left-1">
          <Image
            src={bulletIcon}
            alt="Bullet icon"
            className="size-2"
            draggable="false"
          />
        </div>
        <div className="absolute -bottom-1 -right-1">
          <Image
            src={bulletIcon}
            alt="Bullet icon"
            className="size-2"
            draggable="false"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
