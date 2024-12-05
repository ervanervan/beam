"use client";
import Feature from "@/sections/Feature";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import Mission from "@/sections/Mission";
import News from "@/sections/News";
import Partnership from "@/sections/Partnership";
import Priority from "@/sections/Priority";
import Vehicle from "@/sections/Vehicle";
import Videos from "@/sections/Videos";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero
        title="Gerak bebas dengan Beam"
        description="Ubah masa depan mulai dari dirimu dengan menggunakan beam sekarang."
        buttons={[
          {
            label: "Lihat Garasi Beam",
            variant: "secondary",
            icon: "MapPin",
            iconPosition: "left",
            // onClick: () => alert("Lihat Garasi"),
          },
          {
            label: "Unduh Aplikasi",
            variant: "primary",
            icon: "ArrowRight",
            iconPosition: "right",
            onClick: () => router.push("/download"),
          },
        ]}
      />
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
