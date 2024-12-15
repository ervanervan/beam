import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import { useTranslations } from "next-intl";
import imageProgram1 from "../../public/assets/images/priority-image1.png";
import iconProgramBeam from "../../public/assets/images/program-beam-icon.svg";
import { ArrowRightLongIcon } from "../../public/assets/icons/ArrowRightLongIcon";

export default function Priority() {
  const t = useTranslations("Priority");

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
            <div className="flex flex-col w-full md:w-[530px] overflow-clip">
              <div className="pt-7 px-7 bg-gradientPrimary rounded-t-3xl">
                <div className="relative">
                  <Image
                    src={imageProgram1}
                    alt={t("title")}
                    className="rounded-t-2xl"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image src={iconProgramBeam} alt="Icon program beam" />
                  </div>
                </div>
              </div>
              <div className="bg-secondary-200 px-7 md:px-10 rounded-b-3xl overflow-x-scroll md:overflow-visible">
                <div className="flex items-center justify-between py-2.5 text-secondary-700">
                  <a
                    href="#"
                    className="px-4 py-1.5 rounded-lg bg-secondary-50 text-text-blackPrimary text-nav"
                  >
                    {t("tabs.sustainability")}
                  </a>
                  <a
                    href="#"
                    className="px-4 py-1.5 rounded-lg text-nav font-medium"
                  >
                    {t("tabs.safety")}
                  </a>
                  <a
                    href="#"
                    className="px-4 py-1.5 rounded-lg text-nav font-medium"
                  >
                    {t("tabs.community")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
