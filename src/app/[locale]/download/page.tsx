import { AccessibilityIcon } from "../../../../public/assets/icons/AccessibilityIcon";
import Button from "@/components/Button";
import Hero from "@/sections/Hero";
import QrCode from "@/sections/QrCode";
import React from "react";

export default function Download() {
  return (
    <>
      <Hero
        title="Mulai dengan Beam"
        description="Temukan, buka kunci, dan kendarai Beam di kota terdekat. Berangkat dalam hitungan menit, mudah dan cepat. Tersedia di iOS dan Android."
        backgroundClass="bg-hero-download-pattern"
      >
        <>
          <div className="flex flex-col md:flex-row gap-3 mt-11">
            <Button variant="primary">Unduh untuk iOS</Button>
            <Button variant="primary">Unduh untuk Android</Button>
          </div>
          <Button
            variant="secondary"
            icon={<AccessibilityIcon />}
            className="px-[10px]"
          ></Button>
        </>
      </Hero>
      <QrCode />
    </>
  );
}
