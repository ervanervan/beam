import DashedBorderContainer from "@/components/DashedBorderContainer";
import Image from "next/image";
import vectorFooterImage from "../../public/assets/images/vector-footer.png";
import logoPrimary from "../../public/assets/images/logo-primary.svg";
import instagramIcon from "../../public/assets/images/instagram-icon.svg";
import facebookIcon from "../../public/assets/images/facebook-icon.svg";
import linkedinIcon from "../../public/assets/images/linkedin-icon.svg";

const footerLinks = [
  {
    title: "Kota",
    links: ["Kota yang beroperasi"],
  },
  {
    title: "Mitra",
    links: ["Bermitra dengan kami"],
  },
  {
    title: "Pengendara",
    links: [
      "Perjalanan grup",
      "#BeamBooster",
      "Pesan kendaraan Beam",
      "Berkendara dengan kami",
    ],
  },
  {
    title: "Perusahaan",
    links: [
      "Unduh aplikasi",
      "Karir",
      "Kendaraan Kami",
      "Prioritas Kami",
      "Berita",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative pb-5">
      <DashedBorderContainer showBottom={false}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-start gap-6 md:gap-10">
            <div>
              <Image src={logoPrimary} alt="Beam logo" className="size-12" />
            </div>
            <div>
              <h2 className="text-h4 md:text-h2 text-primary-500 font-semibold">
                Beam <br className="hidden md:block" /> Mobility
              </h2>
              <div className="mt-4 md:mt-8">
                <p className="text-body4 text-text-blackSecondary">
                  Hak Cipta 2024 © <br /> Beam Mobility Holdings Pte. Ltd.
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

          <div className="flex lg:justify-end">
            <div className="grid grid-cols-2 md:grid-cols-[repeat(4,_140px)] items-start gap-7 xl:gap-10">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="font-medium text-text-blackPrimary">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-1 mt-3">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="block text-body4 text-tertiary-700"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashedBorderContainer>
      <div className="absolute bottom-0 left-0 -z-10">
        <Image src={vectorFooterImage} alt="Vector image" draggable="false" />
      </div>
    </footer>
  );
}
