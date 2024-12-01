"use client";
import React, { useState } from "react";

const countries = [
  { code: "EN", flag: "/flags/en.svg" },
  { code: "ID", flag: "/flags/id.svg" },
  { code: "FR", flag: "/flags/fr.svg" },
];

export default function ChangeLanguage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[1]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountryChange = (country: { code: string; flag: string }) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
        id="menu-button"
        onClick={() => setIsDropdownOpen((prev) => !prev)} // Toggle dropdown
      >
        <span>{selectedCountry.code}</span>
        <img
          src={selectedCountry.flag}
          alt={`${selectedCountry.code} flag`}
          className="w-5 h-5"
        />
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
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {countries.map((country) => (
            <button
              key={country.code}
              className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
              onClick={() => handleCountryChange(country)}
            >
              <span>{country.code}</span>
              <img
                src={country.flag}
                alt={`${country.code} flag`}
                className="w-5 h-5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
