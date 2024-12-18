import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import React from "react";
import globeImage from "../../public/assets/images/globe-image.png";
import vectorLocationGarage from "../../public/assets/images/vector-location-garage.svg";
import CountryList from "@/components/CountryList";
import { useTranslations } from "next-intl";

// const countriesData = [
//   {
//     country: "Turkey",
//     cities: ["Ankara", "Antalya", "Mugla"],
//   },
//   {
//     country: "Indonesia",
//     cities: [
//       "Bali",
//       "Bekasi",
//       "Bogor",
//       "Cikarang",
//       "Depok",
//       "Tanggerang",
//       "Tanggerang Selatan",
//     ],
//   },
//   {
//     country: "Malaysia",
//     cities: [
//       "Johor",
//       "Kedah",
//       "Kuala Lumpur",
//       "Kuala Trengganu",
//       "Kuantan",
//       "Selangor",
//       "Melaka",
//       "Negeri Sembilan",
//       "Perak",
//       "Pahang",
//       "Penang",
//       "Sabah",
//       "Sarawak",
//     ],
//   },
//   {
//     country: "Korea Selatan",
//     cities: [
//       "Ansan",
//       "Asan",
//       "Buc-Bupyeong",
//       "Busan",
//       "Changwon",
//       "Cheonan",
//       "Cheongju",
//       "Chuncheon",
//       "Daegu",
//       "Daejeon",
//       "Incheon",
//       "Seoul",
//     ],
//   },
//   {
//     country: "Jepang",
//     cities: ["Naha", "Osaka", "Minami Uonuma"],
//   },
//   {
//     country: "Thailand",
//     cities: [
//       "Bangkok",
//       "Chiangmai",
//       "Chonburi",
//       "Pathum Thani",
//       "Depok",
//       "Phuket",
//     ],
//   },
//   {
//     country: "Australia",
//     cities: [
//       "Adelaide",
//       "Albury",
//       "Bendigo",
//       "Broome",
//       "Burnburry",
//       "Cairns",
//       "Darwin",
//       "Esperance",
//       "Foster-Tuncurry",
//       "Geraldton",
//       "Harvey Bay",
//       "Hobart",
//       "Ipswich",
//       "Kogarah",
//       "Launceston",
//     ],
//   },
//   {
//     country: "Selandia Baru",
//     cities: [
//       "Napier",
//       "Porirua",
//       "Queenstown",
//       "Taupō",
//       "Tauranga",
//       "Whangārei",
//     ],
//   },
// ];

export default function GarageLocation() {
  const t = useTranslations("GarageLocation");

  const countriesData = [
    {
      country: t("countries.0.country"),
      cities: [
        t("countries.0.cities.0"),
        t("countries.0.cities.1"),
        t("countries.0.cities.2"),
      ],
    },
    {
      country: t("countries.1.country"),
      cities: [
        t("countries.1.cities.0"),
        t("countries.1.cities.1"),
        t("countries.1.cities.2"),
        t("countries.1.cities.3"),
        t("countries.1.cities.4"),
        t("countries.1.cities.5"),
        t("countries.1.cities.6"),
      ],
    },
    {
      country: t("countries.2.country"),
      cities: [
        t("countries.2.cities.0"),
        t("countries.2.cities.1"),
        t("countries.2.cities.2"),
        t("countries.2.cities.3"),
        t("countries.2.cities.4"),
        t("countries.2.cities.5"),
        t("countries.2.cities.6"),
        t("countries.2.cities.7"),
        t("countries.2.cities.8"),
        t("countries.2.cities.9"),
        t("countries.2.cities.10"),
        t("countries.2.cities.11"),
        t("countries.2.cities.12"),
      ],
    },
    {
      country: t("countries.3.country"),
      cities: [
        t("countries.3.cities.0"),
        t("countries.3.cities.1"),
        t("countries.3.cities.2"),
        t("countries.3.cities.3"),
        t("countries.3.cities.4"),
        t("countries.3.cities.5"),
        t("countries.3.cities.6"),
        t("countries.3.cities.7"),
        t("countries.3.cities.8"),
        t("countries.3.cities.9"),
        t("countries.3.cities.10"),
        t("countries.3.cities.11"),
      ],
    },
    {
      country: t("countries.4.country"),
      cities: [
        t("countries.4.cities.0"),
        t("countries.4.cities.1"),
        t("countries.4.cities.2"),
      ],
    },
    {
      country: t("countries.5.country"),
      cities: [
        t("countries.5.cities.0"),
        t("countries.5.cities.1"),
        t("countries.5.cities.2"),
        t("countries.5.cities.3"),
        t("countries.5.cities.4"),
        t("countries.5.cities.5"),
      ],
    },
    {
      country: t("countries.6.country"),
      cities: [
        t("countries.6.cities.0"),
        t("countries.6.cities.1"),
        t("countries.6.cities.2"),
        t("countries.6.cities.3"),
        t("countries.6.cities.4"),
        t("countries.6.cities.5"),
        t("countries.6.cities.6"),
        t("countries.6.cities.7"),
        t("countries.6.cities.8"),
        t("countries.6.cities.9"),
        t("countries.6.cities.10"),
        t("countries.6.cities.11"),
        t("countries.6.cities.12"),
      ],
    },
    {
      country: t("countries.7.country"),
      cities: [
        t("countries.7.cities.0"),
        t("countries.7.cities.1"),
        t("countries.7.cities.2"),
        t("countries.7.cities.3"),
        t("countries.7.cities.4"),
        t("countries.7.cities.5"),
      ],
    },
  ];

  return (
    <section>
      <div className="relative">
        <Image
          src={vectorLocationGarage}
          alt="Vector location garage"
          className="absolute -z-10 left-0 w-full top-52 md:top-72 xl:top-40 2xl:top-0"
        />

        <DashedBorderContainer>
          <div>
            <div className="flex justify-center">
              <Tag>{t("tag")}</Tag>
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
