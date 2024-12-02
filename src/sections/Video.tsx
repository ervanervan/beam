import DashedBorderContainer from "@/components/DashedBorderContainer";
import Image from "next/image";
import thumbnailVideo from "@/assets/images/video-image.png";

export default function Video() {
  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <Image src={thumbnailVideo} alt="Thumbnail video" />
      </DashedBorderContainer>
    </section>
  );
}
