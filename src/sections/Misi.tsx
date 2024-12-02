import Image from "next/image";
import Tag from "@/components/Tag";
import bulletIcon from "@/assets/images/bullet-icon.svg";
import misiImage1 from "@/assets/images/misi-image1.png";
import misiImage2 from "@/assets/images/misi-image2.png";
import vectorMisi from "@/assets/images/vector-misi.svg";

export default function Misi() {
  return (
    <section className="">
      <div className="relative border-y border-others-santasGray border-dashed">
        <div className="relative container max-w-6xl py-16 border-x border-others-santasGray border-dashed">
          <div className="absolute -top-1 -left-1">
            <Image
              src={bulletIcon}
              alt="Bullet icon"
              className="size-2"
              draggable="false"
            />
          </div>
          <div className="absolute -top-1 -right-1">
            <Image
              src={bulletIcon}
              alt="Bullet icon"
              className="size-2"
              draggable="false"
            />
          </div>
          <div className="absolute -bottom-1 -left-1">
            <Image
              src={bulletIcon}
              alt="Bullet icon"
              className="size-2"
              draggable="false"
            />
          </div>
          <div className="absolute -bottom-1 -right-1">
            <Image
              src={bulletIcon}
              alt="Bullet icon"
              className="size-2"
              draggable="false"
            />
          </div>
          <div className="absolute -z-10 top-0 left-0 hidden md:block">
            <Image
              src={vectorMisi}
              alt="Vector misi"
              className="w-full h-fit"
              draggable="false"
            />
          </div>
          <div className="flex justify-center">
            <Tag>Misi</Tag>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute z-10 top-11 -left-6 hidden md:block">
              <Image
                src={misiImage1}
                alt="Misi image 1"
                className="w-20 h-12 rounded-md"
              />
            </div>
            <div className="absolute z-10 top-4 -right-11 hidden md:block">
              <Image
                src={misiImage2}
                alt="Misi image 2"
                className="w-20 h-12 rounded-md"
              />
            </div>
            <div className="relative z-20">
              <h3 className="text-h3 text-center text-text-blackPrimary font-medium mt-8">
                Kami memiliki misi untuk mengubah perjalanan kecil menjadi
                perjalanan yang lebih baik, dan{" "}
                <span className="text-primary-500">membuat kota berjalan</span>{" "}
                lebih baik untuk semua orang
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
