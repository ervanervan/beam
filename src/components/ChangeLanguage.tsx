"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Country {
  code: string;
  flag: string;
}

const countries: Country[] = [
  { code: "ID", flag: "/flags/id.svg" },
  { code: "EN", flag: "/flags/en.svg" },
  { code: "FR", flag: "/flags/fr.svg" },
];

export default function ChangeLanguage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center px-4 h-11 w-full gap-2 justify-between bg-text-blackSecondary lg:bg-others-stack text-text-whitePrimary rounded-lg hover:bg-text-blackSecondary/90 lg:hover:bg-others-stack/70 focus:outline-none"
        id="menu-button"
        onClick={() => setIsDropdownOpen((prev) => !prev)} // Toggle dropdown
      >
        <span className="flex items-center gap-2">
          <span className="text-sm">{selectedCountry.code}</span>
          <Image
            src={selectedCountry.flag}
            alt={`${selectedCountry.code} flag`}
            width={16}
            height={15}
            className="w-4 h-[15px]"
          />
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 transform transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute mt-2 w-full overflow-hidden bg-text-blackSecondary lg:bg-others-stack rounded-lg shadow-lg z-10">
          {countries.map((country) => (
            <button
              key={country.code}
              className="flex items-center gap-2 px-4 py-2 w-full text-text-whitePrimary hover:bg-white/15 focus:outline-none"
              onClick={() => handleCountryChange(country)}
            >
              <span className="text-sm">{country.code}</span>
              <Image
                src={country.flag}
                alt={`${country.code} flag`}
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
