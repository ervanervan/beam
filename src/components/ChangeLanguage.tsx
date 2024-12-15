"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useTransition } from "react";
import Image from "next/image";

interface Country {
  code: string;
  flag: string;
  value: string;
}

const countries: Country[] = [
  { code: "ID", value: "id", flag: "/flags/id.svg" },
  { code: "EN", value: "en", flag: "/flags/en.svg" },
  { code: "FR", value: "fr", flag: "/flags/fr.svg" },
];

export default function ChangeLanguage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const localActive = useLocale();

  // Set the initial selected country based on the current locale
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find((c) => c.value === localActive) || countries[0]
  );

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    startTransition(() => {
      // Replace the locale part of the pathname with the selected language
      const newPath = pathname.replace(/^\/[a-z]{2}/, `/${selectedValue}`);
      router.replace(newPath); // Redirect to the updated path
    });

    const country = countries.find((c) => c.value === selectedValue);
    if (country) {
      setSelectedCountry(country);
    }
  };

  return (
    <div className="flex items-center gap-2 bg-text-blackSecondary lg:bg-others-stack px-4 rounded-lg">
      <Image
        src={selectedCountry.flag}
        alt={`${selectedCountry.code} flag`}
        width={16}
        height={15}
        className="w-4 h-[15px]"
      />
      <select
        value={selectedCountry.value}
        onChange={handleCountryChange}
        disabled={isPending}
        className="h-11 bg-text-blackSecondary lg:bg-others-stack text-text-whitePrimary focus:outline-none"
      >
        {countries.map((country) => (
          <option
            key={country.code}
            value={country.value}
            className="text-text-whitePrimary bg-text-blackSecondary lg:bg-others-stack"
          >
            {country.code}
          </option>
        ))}
      </select>
    </div>
  );
}
