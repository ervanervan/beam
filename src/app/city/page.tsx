"use client";
import { AccessibilityIcon } from "@/assets/icons/AccessibilityIcon";
import { ArrowRightLongIcon } from "@/assets/icons/ArrowRightLongIcon";
import Button from "@/components/Button";
import GarageLocation from "@/sections/GarageLocation";
import Hero from "@/sections/Hero";
import VehicleSafety from "@/sections/VehicleSafety";
import React from "react";

export default function City() {
  return (
    <>
      <Hero
        title="Kota"
        description="Beam adalah pemimpin global dalam mikromobilitas, 
        yang mengoperasikan sepeda listrik, skuter listrik, 
        dan motor sepeda di lebih dari 60 kota di Asia Pasifik."
        backgroundClass="bg-hero-city-pattern"
      >
        <div className="flex flex-col md:flex-row gap-3 mt-11">
          <Button
            variant="primary"
            icon={<ArrowRightLongIcon />}
            iconPosition="right"
          >
            Unduh Aplikasi
          </Button>
        </div>
        <Button
          variant="secondary"
          icon={<AccessibilityIcon />}
          className="px-[10px]"
        ></Button>
      </Hero>
      <GarageLocation />
      <VehicleSafety />
    </>
  );
}
