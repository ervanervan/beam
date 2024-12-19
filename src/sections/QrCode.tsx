import DashedBorderContainer from "@/components/DashedBorderContainer";
import Image from "next/image";
import React from "react";
import qrCodeAndroid from "../../public/assets/images/qr-code-android.svg";
import qrCodeIos from "../../public/assets/images/qr-code-ios.svg";
import AndroidIcon from "../../public/assets/icons/AndroidIcon";
import IosIcon from "../../public/assets/icons/IosIcon";
import { useTranslations } from "next-intl";

export default function QrCode() {
  const t = useTranslations("QrCode");
  return (
    <section>
      <DashedBorderContainer showBottom={false}>
        <div>
          <h4 className="text-h4 font-medium text-text-blackSecondary max-w-lg mb-6">
            {t("title")}
          </h4>
        </div>
        <div className="container max-w-xs md:max-w-[44rem] lg:max-w-6xl border-y border-others-santasGray border-dashed"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-3 items-center mt-14">
          <div className="p-3 flex flex-col md:flex-row md:items-center gap-5">
            <Image src={qrCodeAndroid} alt="Qr code android" className="w-36" />

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 flex items-center justify-center bg-gradientTertiary rounded-lg size-11">
                  <AndroidIcon />
                </div>
                <span className="text-h5 text-text-blackPrimary font-medium">
                  {t("android.title")}
                </span>
              </div>
              <p className="mt-3 text-body2 text-text-blackSecondary">
                {t("android.description")}
              </p>
            </div>
          </div>

          <div className="absolute h-72 mt-2 border-x border-others-santasGray border-dashed left-1/2 -translate-x-1/2 hidden lg:block"></div>

          <div className="p-3 flex flex-col md:flex-row md:items-center gap-5">
            <Image src={qrCodeIos} alt="Qr code iOS" className="w-36" />

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 flex items-center justify-center bg-gradientTertiary rounded-lg size-11">
                  <IosIcon />
                </div>
                <span className="text-h5 text-text-blackPrimary font-medium">
                  {t("ios.title")}
                </span>
              </div>
              <p className="mt-3 text-body2 text-text-blackSecondary">
                {t("ios.description")}
              </p>
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
