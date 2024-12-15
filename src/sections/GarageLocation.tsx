import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import React from "react";
import globeImage from "../../public/assets/images/globe-image.png";
import vectorLocationGarage from "../../public/assets/images/vector-location-garage.svg";
import CountryList from "@/components/CountryList";

export interface Country {
  country: string;
  cities: string[];
}

export const countriesData: Country[] = [
  {
    country: "Turkey",
    cities: ["Ankara", "Antalya", "Mugla"],
  },
  {
    country: "Indonesia",
    cities: [
      "Bali",
      "Bekasi",
      "Bogor",
      "Cikarang",
      "Depok",
      "Tanggerang",
      "Tanggerang Selatan",
    ],
  },
  {
    country: "Malaysia",
    cities: [
      "Johor",
      "Kedah",
      "Kuala Lumpur",
      "Kuala Trengganu",
      "Kuantan",
      "Selangor",
      "Melaka",
      "Negeri Sembilan",
      "Perak",
      "Pahang",
      "Penang",
      "Sabah",
      "Sarawak",
    ],
  },
  {
    country: "Korea Selatan",
    cities: [
      "Ansan",
      "Asan",
      "Buc-Bupyeong",
      "Busan",
      "Changwon",
      "Cheonan",
      "Cheongju",
      "Chuncheon",
      "Daegu",
      "Daejeon",
      "Incheon",
      "Seoul",
    ],
  },
  {
    country: "Jepang",
    cities: ["Naha", "Osaka", "Minami Uonuma"],
  },
  {
    country: "Thailand",
    cities: [
      "Bangkok",
      "Chiangmai",
      "Chonburi",
      "Pathum Thani",
      "Depok",
      "Phuket",
    ],
  },
  {
    country: "Australia",
    cities: [
      "Adelaide",
      "Albury",
      "Bendigo",
      "Broome",
      "Burnburry",
      "Cairns",
      "Darwin",
      "Esperance",
      "Foster-Tuncurry",
      "Geraldton",
      "Harvey Bay",
      "Hobart",
      "Ipswich",
      "Kogarah",
      "Launceston",
    ],
  },
  {
    country: "Selandia Baru",
    cities: [
      "Napier",
      "Porirua",
      "Queenstown",
      "Taupō",
      "Tauranga",
      "Whangārei",
    ],
  },
];

export default function GarageLocation() {
  return (
    <section>
      <div className="relative">
        <Image
          src={vectorLocationGarage}
          alt="w-full Vector location garage"
          className="absolute -z-10 left-0 w-full top-52 md:top-72 xl:top-40 2xl:top-0"
        />

        <DashedBorderContainer>
          <div>
            <div className="flex justify-center">
              <Tag>Lokasi garasi beam</Tag>
            </div>
            <div className="w-full flex justify-center mt-6">
              <Image
                src={globeImage}
                alt="Globe image location"
                className="w-full md:max-w-2xl"
              />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <CountryList countries={countriesData.slice(0, 4)} />
            <CountryList countries={countriesData.slice(4)} />
          </div>
        </DashedBorderContainer>
      </div>
    </section>
  );
}
