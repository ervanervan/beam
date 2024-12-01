import Image from "next/image";
import logoPrimary from "@/assets/images/logo-primary.svg";
import Button from "@/components/Button";
import ChangeLanguage from "@/components/ChangeLanguage";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Kota", href: "#kota" },
  { label: "Mitra", href: "#mitra" },
  { label: "Pengendara", href: "#pengendara" },
  { label: "Perusahaan", href: "#perusahaan" },
];

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_218_248)">
      <path
        d="M1.5 4.5C1.5 10.0227 5.97733 14.5 11.5 14.5H13C13.3978 14.5 13.7794 14.342 14.0607 14.0607C14.342 13.7794 14.5 13.3978 14.5 13V12.0853C14.5 11.7413 14.266 11.4413 13.932 11.358L10.9833 10.6207C10.69 10.5473 10.382 10.6573 10.2013 10.8987L9.55467 11.7607C9.36667 12.0113 9.042 12.122 8.748 12.014C7.65659 11.6128 6.66544 10.9791 5.84319 10.1568C5.02094 9.33456 4.38725 8.34341 3.986 7.252C3.878 6.958 3.98867 6.63333 4.23933 6.44533L5.10133 5.79867C5.34333 5.618 5.45267 5.30933 5.37933 5.01667L4.642 2.068C4.60143 1.9058 4.50781 1.7618 4.37604 1.65889C4.24426 1.55598 4.08187 1.50006 3.91467 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V4.5Z"
        stroke="#F9F9F9"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_218_248">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="grid grid-cols-3 items-center">
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
            <Button variant="primary" icon={<PhoneIcon />} iconPosition="right">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
