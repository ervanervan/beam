import Feature from "@/sections/Feature";
import Footer from "@/sections/Footer";
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
      <Hero />
      <Mission />
      <Videos />
      <Priority />
      <Vehicle />
      <Feature />
      <News />
      <Partnership />
      <Help />
      <Footer />
    </>
  );
}
