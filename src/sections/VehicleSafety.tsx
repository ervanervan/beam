import DashedBorderContainer from "@/components/DashedBorderContainer";
import VehicleSafetyCard from "@/components/VehicleSafetyCard";
import React from "react";
import vehicleSafetyImage1 from "@/assets/images/vehicle-safety-card-image1.png";
import vehicleSafetyImage2 from "@/assets/images/vehicle-safety-card-image2.png";
import vehicleSafetyImage3 from "@/assets/images/vehicle-safety-card-image3.png";
import vehicleSafetyImage4 from "@/assets/images/vehicle-safety-card-image4.png";
import vehicleSafetyImage5 from "@/assets/images/vehicle-safety-card-image5.png";

export default function VehicleSafety() {
  return (
    <section>
      <DashedBorderContainer showBottom={false} showTop={false}>
        <div className="flex flex-col items-center gap-24">
          <VehicleSafetyCard
            tag="Keamanan kendaraan"
            title="Keselamatan"
            description="Bagi kami, keselamatan bukan hanya soal kendaraan yang berfungsi baik dan memenuhi standar pemerintah. Dengan perpaduan perangkat keras, perangkat lunak, dan edukasi, kami menghadirkan kendaraan mikromobilitas Beam yang paling aman — jaminan yang tak bisa diberikan oleh kendaraan pribadi."
            imageSrc={vehicleSafetyImage1}
            imageAlt="Vehicle safety image 1"
            textPosition="left"
            imagePosition="right"
          />
          <VehicleSafetyCard
            tag="Keamanan kendaraan"
            title="Jejak karbon"
            description="Di Asia Pasifik, Beam adalah satu-satunya operator mobilitas listrik yang Bersertifikat Netral Iklim. Semua perjalanan dengan Beam tidak hanya 100% bertenaga listrik, tetapi juga telah disetujui memiliki berstatus netral karbon menyeluruh."
            imageSrc={vehicleSafetyImage2}
            imageAlt="Vehicle safety image 2"
            textPosition="right"
            imagePosition="left"
          />
          <VehicleSafetyCard
            tag="Keamanan kendaraan"
            title="Meningkatkan bisnis lokal"
            description="Platform #BeamBooster kami memanfaatkan perpaduan teknologi GPS, notifikasi dalam aplikasi, dan insentif mitra untuk menstimulasi aktivitas ekonomi di masyarakat setempat Anda. Lebih baik lagi, pendaftarannya gratis untuk bisnis."
            imageSrc={vehicleSafetyImage3}
            imageAlt="Vehicle safety image 3"
            textPosition="left"
            imagePosition="right"
          />
          <VehicleSafetyCard
            tag="Keamanan kendaraan"
            title="Peluang kerja"
            description="Program Beam Marshals kami menciptakan peluang kerja di bidang ekonomi. Mereka bertugas memelihara skuter, mengganti baterai, serta menyebarkan dan mengumpulkan skuter, memastikan pengendara dapat berkendara dengan aman dan nyaman kapan saja, di mana saja."
            imageSrc={vehicleSafetyImage4}
            imageAlt="Vehicle safety image 4"
            textPosition="right"
            imagePosition="left"
          />
          <VehicleSafetyCard
            tag="Keamanan kendaraan"
            title="Data untuk perencanaan kota"
            description="Kami percaya data penting untuk memaksimalkan dampak positif di kota-kota mitra kami. Beam melacak dan menganalisis ribuan metrik untuk meningkatkan keamanan, memahami permintaan mikromobilitas, serta mendukung perencanaan kota dan pengembangan infrastruktur masa depan."
            imageSrc={vehicleSafetyImage5}
            imageAlt="Vehicle safety image 5"
            textPosition="left"
            imagePosition="right"
          />
        </div>
      </DashedBorderContainer>
    </section>
  );
}
