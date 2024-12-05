import DashedBorderContainer from "@/components/DashedBorderContainer";
import VehicleSafetyCard from "@/components/VehicleSafetyCard";
import React from "react";

export default function VehicleSafety() {
  return (
    <section>
      <DashedBorderContainer showBottom={false}>
        <div className="flex flex-col items-center gap-24">
          <VehicleSafetyCard />
          <VehicleSafetyCard />
          <VehicleSafetyCard />
          <VehicleSafetyCard />
        </div>
      </DashedBorderContainer>
    </section>
  );
}
