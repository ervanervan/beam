import Image from "next/image";
import logoPrimary from "@/assets/images/logo-primary.svg";
import Button from "@/components/Button";
import ChangeLanguage from "@/components/ChangeLanguage";
import { PhoneWhiteIcon } from "@/assets/icons/PhoneWhiteIcon";

const navLinks = [
  // { label: "Home", href: "#" },
  { label: "Kota", href: "/city" },
  { label: "Mitra", href: "/partner" },
  { label: "Pengendara", href: "#vehicle" },
  { label: "Perusahaan", href: "#company" },
];

export default function Navbar() {
  return (
    <header className="absolute top-8 md:top-14 left-0 w-full z-30 bg-transparent">
      <div className="container mx-auto lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
          <div>
            <Image
              src={logoPrimary}
              alt="Logo image"
              className="w-[54px] h:auto"
            />
          </div>
          <div className="lg:flex items-center justify-center hidden">
            <nav className="flex px-5 py-3 gap-6 rounded-xl bg-others-stack/50 backdrop-blur">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2 text-secondary-50 font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-3">
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
