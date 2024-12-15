import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import VehicleCard from "@/components/VehicleCard";
import vehicleImage1 from "../../public/assets/images/vehicle-image1.png";
import vehicleImage2 from "../../public/assets/images/vehicle-image2.png";
import { useTranslations } from "next-intl";

const vehicles = [
  {
    id: 1,
    imageSrc: vehicleImage1,
    title: "The Beam Saturn S",
  },
  {
    id: 2,
    imageSrc: vehicleImage2,
    title: "Beam Rover",
  },
];

export default function Vehicle() {
  const t = useTranslations("Vehicle");

  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div>
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <div>
              <Tag>{t("tag")}</Tag>
            </div>
            <div className="mt-8 flex flex-col gap-3 items-center">
              <h3 className="text-h3 font-medium text-text-blackPrimary">
                {t("title")}
              </h3>
              <p className="text-body1 text-text-blackSecondary text-center">
                {t("description")}
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-7">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                imageSrc={vehicle.imageSrc}
                title={vehicle.title}
                // onButtonClick={() => handleButtonClick(vehicle.title)}
              />
            ))}
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
