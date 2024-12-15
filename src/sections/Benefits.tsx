import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import React from "react";
import CheckCircleIcon from "../../public/assets/icons/CheckCircleIcon";
import vectorBenefit from "../../public/assets/images/vector-benefit.svg";

export default function Benefits() {
  return (
    <section>
      <DashedBorderContainer>
        <div className="text-center max-w-[37rem] mx-auto">
          <div>
            <Tag>Benefit</Tag>
          </div>
          <div>
            <h3 className="mt-8 text-h3 text-text-blackPrimary font-medium">
              Benefit kami
            </h3>
            <p className="text-body1 text-text-blackSecondary mt-3">
              Di Beam, kami berkomitmen penuh untuk bekerja sama dengan berbagai
              jenis dan ukuran organisasi untuk membuat kehidupan kota berjalan
              lebih baik bagi semua orang.
            </p>
          </div>
        </div>
        <div className="relative mt-14 grid grid-cols-1 lg:grid-cols-3 items-center max-w-4xl mx-auto gap-y-2">
          <div className="absolute -z-10">
            <Image src={vectorBenefit} alt="Vector benefit" />
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <CheckCircleIcon />
            </div>
            <span className="text-h4 font-medium text-text-blackPrimary">
              Solusi Usaha
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <CheckCircleIcon />
            </div>
            <span className="text-h4 font-medium text-text-blackPrimary">
              Merek dan iklan
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10">
              <CheckCircleIcon />
            </div>
            <span className="text-h4 font-medium text-text-blackPrimary">
              Kerjasama dengan pendidikan tinggi
            </span>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
