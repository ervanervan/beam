import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import imageProgram1 from "@/assets/images/priority-image1.png";
import iconProgramBeam from "@/assets/images/program-beam-icon.svg";

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 5.5L14 8M14 8L11.5 10.5M14 8H2"
      stroke="#F9F9F9"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Priority() {
  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-center">
          <div className="flex flex-col">
            <Tag>Prioritas kami</Tag>
            <h3 className="mt-8 text-text-blackPrimary text-h3 font-medium">
              Keberlanjutan
            </h3>
            <p className="mt-3 text-text-blackSecondary text-body1">
              Beam adalah satu-satunya operator di Asia Pasifik yang memiliki
              Sertifikasi Netral Iklim. Dan karena kami berkomitmen untuk
              melangkah lebih jauh, kami bertekad untuk menuju Negatif Karbon
              (Carbon Negative) pada tahun 2025.
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
            <div className="flex flex-col w-full md:w-[530px] overflow-clip">
              <div className="pt-7 px-7 bg-gradientPrimary rounded-t-3xl">
                <div className="relative">
                  <Image
                    src={imageProgram1}
                    alt="Program image 1"
                    className="rounded-t-2xl"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image src={iconProgramBeam} alt="Icon program beam" />
                  </div>
                </div>
              </div>
              <div className="bg-secondary-200 px-7 md:px-10 rounded-b-3xl overflow-scroll md:overflow-visible">
                <div className="flex items-center justify-between py-2.5 text-secondary-700">
                  <a
                    href=""
                    className="px-4 py-1.5 rounded-lg bg-secondary-50 text-text-blackPrimary text-nav"
                  >
                    Keberlanjutan
                  </a>
                  <a
                    href=""
                    className="px-4 py-1.5 rounded-lg text-nav font-medium"
                  >
                    Keamanan
                  </a>
                  <a
                    href=""
                    className="px-4 py-1.5 rounded-lg text-nav font-medium"
                  >
                    Komunitas
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
