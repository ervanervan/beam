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
        <div>
          <Image
            src={logoPrimary}
            alt="Logo image"
            className="w-[54px] h:auto"
          />
        </div>
        <div className="lg:flex items-center justify-center hidden">
          <nav className="">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div></div>
      </div>
    </header>
  );
}
