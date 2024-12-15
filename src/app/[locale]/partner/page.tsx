import { AccessibilityIcon } from "../../../../public/assets/icons/AccessibilityIcon";
import { ArrowRightLongIcon } from "../../../../public/assets/icons/ArrowRightLongIcon";
import Button from "@/components/Button";
import Benefits from "@/sections/Benefits";
import Feature from "@/sections/Feature";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import Testimonial from "@/sections/Testimonial";
import Link from "next/link";
import React from "react";

export default function Partner() {
  return (
    <>
      <Hero
        title="Mitra"
        description="Jika Anda peduli pada masa depan yang lebih baik 
        melalui transportasi berkelanjutan, mari berbincang. 
        Kami ingin mendengar ide dan masukan Anda!."
        backgroundClass="bg-hero-partner-pattern"
      >
        <div className="flex flex-col md:flex-row gap-3 mt-11">
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
      </Hero>
      <Benefits />
      <Feature
        tag="Program kerjasama"
        title="#BeamBooster"
        description="Membantu bisnis-bisnis setempat terhubung dengan pelanggan Beam untuk meningkatkan jumlah kunjungan, eksposur, dan pendapatan."
      />
      <Testimonial />
      <Help
        title="Ayo berkolaborasi!"
        description="Bermitra dengan kami bisa berarti berbagai hal—mulai dari kerjasama sederhana hingga kolaborasi strategis jangka panjang. Kami terbuka untuk diskusi dan mencari solusi terbaik bersama Anda."
        backgroundClass="bg-partner-pattern"
      >
        <Button
          variant="primary"
          icon={<ArrowRightLongIcon />}
          iconPosition="right"
        >
          Kolaborasi Sekarang
        </Button>
      </Help>
    </>
  );
}
