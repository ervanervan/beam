import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import VehicleCard from "@/components/VehicleCard";
import vehicleImage1 from "@/assets/images/vehicle-image1.png";
import vehicleImage2 from "@/assets/images/vehicle-image2.png";

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
  // const handleButtonClick = (title: string) => {
  //   console.log(`Button clicked for ${title}`);
  // };

  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div>
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <div>
              <Tag>Kendaraan</Tag>
            </div>
            <div className="mt-8 flex flex-col gap-3 items-center">
              <h3 className="text-h3 font-medium text-text-blackPrimary">
                Kendaraan
              </h3>
              <p className="text-body1 text-text-blackSecondary text-center">
                Skuter dan sepeda listrik kami, dirancang untuk berbagi,
                memberikan pengalaman berkendara yang nyaman dan andal, sesuai
                dengan kebutuhan sehari-hari.
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
