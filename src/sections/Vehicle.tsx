import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import React from "react";

export default function Vehicle() {
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

          <div className="mt-10"></div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
