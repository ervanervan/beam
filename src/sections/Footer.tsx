import DashedBorderContainer from "@/components/DashedBorderContainer";
import Image from "next/image";
import vectorFooterImage from "@/assets/images/vector-footer.png";
import logoPrimary from "@/assets/images/logo-primary.svg";
import instagramIcon from "@/assets/images/instagram-icon.svg";
import facebookIcon from "@/assets/images/facebook-icon.svg";
import linkedinIcon from "@/assets/images/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className="relative pb-5">
      <DashedBorderContainer showBottom={false}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-10">
            <div>
              <Image src={logoPrimary} alt="Beam logo" className="size-12" />
            </div>
            <div>
              <h2 className="text-h2 text-primary-500 font-semibold">
                Beam <br className="hidden md:block" /> Mobility
              </h2>
              <div className="mt-8">
                <p className="text-body4 text-text-blackSecondary">
                  Hak Cipta 2024 © <br className="hidden md:block" /> Beam
                  Mobility Holdings Pte. Ltd.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div>
                  <Image
                    src={instagramIcon}
                    alt="Instagram icon"
                    className="size-4"
                  />
                </div>
                <div>
                  <Image
                    src={facebookIcon}
                    alt="Facebook icon"
                    className="size-4"
                  />
                </div>
                <div>
                  <Image
                    src={linkedinIcon}
                    alt="Linkedin icon"
                    className="size-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashedBorderContainer>
      <div className="absolute bottom-0 left-0">
        <Image src={vectorFooterImage} alt="Vector image" draggable="false" />
      </div>
    </footer>
  );
}
