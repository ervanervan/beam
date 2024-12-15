import { AccessibilityIcon } from "../../../public/assets/icons/AccessibilityIcon";
import { ArrowRightLongIcon } from "../../../public/assets/icons/ArrowRightLongIcon";
import { MapPinIcon } from "../../../public/assets/icons/MapPinIcon";
import { PhoneWhiteIcon } from "../../../public/assets/icons/PhoneWhiteIcon";
import Button from "@/components/Button";
import Feature from "@/sections/Feature";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import Mission from "@/sections/Mission";
import News from "@/sections/News";
import Partnership from "@/sections/Partnership";
import Priority from "@/sections/Priority";
import Vehicle from "@/sections/Vehicle";
import Videos from "@/sections/Videos";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Hero
        title="Gerak bebas dengan Beam"
        description="Ubah masa depan mulai dari dirimu dengan menggunakan beam sekarang."
        backgroundClass="bg-hero-pattern"
      >
        <>
          <div className="flex flex-col md:flex-row gap-3 mt-11">
            <Button variant="secondary" icon={<MapPinIcon />}>
              Lihat Garasi Beam
            </Button>
            <Link href={"/download"}>
              <Button
                variant="primary"
                icon={<ArrowRightLongIcon />}
                iconPosition="right"
              >
                Unduh Aplikasi
              </Button>
            </Link>
          </div>
          <Button
            variant="secondary"
            icon={<AccessibilityIcon />}
            className="px-[10px]"
          ></Button>
        </>
      </Hero>
      <Mission />
      <Videos />
      <Priority />
      <Vehicle />
      <Feature
        tag="Fitur kami"
        title="Perjalanan grup"
        description="Nikmati perjalanan seru bersama teman dan keluarga 
        dengan fitur Perjalanan Grup, di mana Anda dapat berkendara 
        bersama menggunakan satu akun. Fitur ini tersedia 
        di beberapa kota tertentu."
      />
      <News />
      <Partnership />
      <Help
        title="Masih ada pertanyaan?"
        description="Jika ingin tahu lebih lanjut tentang Beam atau tertarik bermitra bersama kami, 
        kami dengan senang hati membantu Anda. Hubungi kami sekarang 
        dan mari ciptakan sesuatu yang hebat bersama."
        backgroundClass="bg-help-pattern"
      >
        <Button
          variant="primary"
          icon={<PhoneWhiteIcon />}
          iconPosition="right"
        >
          Hubungi kami
        </Button>
      </Help>
    </>
  );
}
