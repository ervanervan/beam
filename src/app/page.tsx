import { AccessibilityIcon } from "@/assets/icons/AccessibilityIcon";
import { ArrowRightLongIcon } from "@/assets/icons/ArrowRightLongIcon";
import { MapPinIcon } from "@/assets/icons/MapPinIcon";
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

export default function Home() {
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
            <Button
              variant="primary"
              icon={<ArrowRightLongIcon />}
              iconPosition="right"
            >
              Unduh Aplikasi
            </Button>
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
      <Feature />
      <News />
      <Partnership />
      <Help />
    </>
  );
}
