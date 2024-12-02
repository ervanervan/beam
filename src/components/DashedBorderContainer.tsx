import { ReactNode } from "react";
import Image from "next/image";
import bulletIcon from "@/assets/images/bullet-icon.svg";

interface DashedBorderContainerProps {
  children: ReactNode;
  showTop?: boolean;
  showBottom?: boolean;
  showLeft?: boolean;
  showRight?: boolean;
}

export default function DashedBorderContainer({
  children,
  showTop = true,
  showBottom = true,
  showLeft = true,
  showRight = true,
}: DashedBorderContainerProps) {
  return (
    <div
      className={`relative ${
        showTop ? "border-t border-others-santasGray border-dashed" : ""
      } ${showBottom ? "border-b border-others-santasGray border-dashed" : ""}`}
    >
      <div
        className={`relative container max-w-xs md:max-w-[44rem] lg:max-w-6xl py-16 ${
          showLeft ? "border-l border-others-santasGray border-dashed" : ""
        } ${
          showRight ? "border-r border-others-santasGray border-dashed" : ""
        }`}
      >
        {/* Bullet Icons */}
        {showTop && showLeft && (
          <div className="absolute z-10 -top-1 -left-1">
            <Image
              src={bulletIcon}
              alt="Bullet icon"
              className="size-2"
              draggable="false"
            />
          </div>
        )}
        {showTop && showRight && (
          <div className="absolute z-10 -top-1 -right-1">
            <Image
              src={bulletIcon}
              alt="Bullet icon"
              className="size-2"
              draggable="false"
            />
          </div>
        )}
        {showBottom && showLeft && (
          <div className="absolute z-10 -bottom-1 -left-1">
            <Image
              src={bulletIcon}
              alt="Bullet icon"
              className="size-2"
              draggable="false"
            />
          </div>
        )}
        {showBottom && showRight && (
          <div className="absolute z-10 -bottom-1 -right-1">
            <Image
              src={bulletIcon}
              alt="Bullet icon"
              className="size-2"
              draggable="false"
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
