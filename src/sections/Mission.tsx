import Image from "next/image";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import vectorMisi from "@/assets/images/vector-misi.svg";
import misiImage1 from "@/assets/images/misi-image1.png";
import misiImage2 from "@/assets/images/misi-image2.png";

export default function Mission() {
  return (
    <section>
      <DashedBorderContainer>
        {/* Vector Background */}
        <div className="absolute -z-10 top-0 left-0 hidden md:block">
          <Image
            src={vectorMisi}
            alt="Vector misi"
            className="w-full h-fit"
            draggable="false"
          />
        </div>

        {/* Tag */}
        <div className="flex justify-center">
          <Tag>Misi</Tag>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto relative">
          {/* Images */}
          <div className="absolute z-10 top-11 -left-6 hidden lg:block">
            <Image
              src={misiImage1}
              alt="Misi image 1"
              className="w-20 h-12 rounded-md"
            />
          </div>
          <div className="absolute z-10 top-4 -right-11 hidden lg:block">
            <Image
              src={misiImage2}
              alt="Misi image 2"
              className="w-20 h-12 rounded-md"
            />
          </div>

          {/* Text */}
          <div className="relative z-20">
            <h3 className="text-h4 md:text-h3 text-center text-text-blackPrimary font-medium mt-8">
              Kami memiliki misi untuk mengubah perjalanan kecil menjadi
              perjalanan yang lebih baik, dan{" "}
              <span className="text-primary-500">membuat kota berjalan</span>{" "}
              lebih baik untuk semua orang
            </h3>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
