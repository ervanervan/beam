"use client";

import Image from "next/image";
import logoPrimary from "../../public/assets/images/logo-primary.svg";
import Button from "@/components/Button";
import ChangeLanguage from "@/components/ChangeLanguage";
import { PhoneWhiteIcon } from "../../public/assets/icons/PhoneWhiteIcon";
import Link from "next/link";
import MenuIcon from "../../public/assets/icons/MenuIcon";
import { useState } from "react";
import CloseIcon from "../../public/assets/icons/CloseIcon";
import { usePathname } from "next/navigation";

const navLinks = [
  // { label: "Home", path: "/" },
  { label: "Kota", path: "/city" },
  { label: "Mitra", path: "/partner" },
  { label: "Pengendara", path: "#vehicle" },
  { label: "Perusahaan", path: "#company" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Extract the current locale from the path (e.g., /en, /id)
  const currentLocale = pathname.split("/")[1] || "en"; // Default to "en"

  return (
    <header className="absolute pt-4 md:pt-8 lg:pt-0 lg:top-14 left-0 w-full z-30 bg-transparent">
      <div className="container mx-auto lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
          <Link href={`/${currentLocale}`}>
            <Image
              src={logoPrimary}
              alt="Logo image"
              className="w-[54px] h:auto"
            />
          </Link>
          <div className="lg:flex items-center justify-center hidden">
            <nav className="flex px-5 py-3 gap-6 rounded-xl bg-others-stack/50 backdrop-blur">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={`/${currentLocale}${link.path}`}
                  className="px-2 text-secondary-50 font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-3">
            <div className="md:flex gap-3 hidden">
              <ChangeLanguage />
              <Button
                variant="primary"
                icon={<PhoneWhiteIcon />}
                iconPosition="right"
              >
                Hubungi Kami
              </Button>
            </div>
            <button
              className="flex lg:hidden items-center justify-center p-2.5 bg-text-whitePrimary rounded-lg"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full bg-background-whitebg h-dvh shadow-lg z-30 transition-transform duration-300 ease-in-out ${
            isOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 md:p-8">
            <Link href={`/${currentLocale}`}>
              <Image
                src={logoPrimary}
                alt="Logo image"
                className="w-[54px] h:auto"
              />
            </Link>
            <button
              className="flex items-center justify-center p-2.5 bg-text-whitePrimary rounded-lg border border-text-blackSecondary"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col items-start gap-4 p-4 md:p-8 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={`/${currentLocale}${link.path}`}
                className="text-text-blackSecondary font-medium text-h3"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-text-blackTertiary mx-4 md:mx-8 my-5"></div>
          <div className="flex flex-col md:flex-row gap-3 p-4 md:p-8 border-gray-200">
            <ChangeLanguage />
            <Button
              variant="primary"
              icon={<PhoneWhiteIcon />}
              iconPosition="right"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
