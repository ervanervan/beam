import Image from "next/image";
import logoPrimary from "@/assets/images/logo-primary.svg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Kota", href: "#kota" },
  { label: "Mitra", href: "#mitra" },
  { label: "Pengendara", href: "#pengendara" },
  { label: "Perusahaan", href: "#perusahaan" },
];

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
                <a key={link.label} href={link.href} className="px-2">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-3">
            <button className="p-3 rounded-lg gap-2 bg-secondary-500">
              ID
            </button>
            <button className="px-6 py-3 bg-primary-500 rounded-xl gap-1">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
