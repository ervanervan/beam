import Button from "@/components/Button";
import Navbar from "./Navbar";

const MapPinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
      stroke="#1F1F1F"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
      stroke="#1F1F1F"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 5.5L14 8M14 8L11.5 10.5M14 8H2"
      stroke="#F9F9F9"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="p-7">
      <div className="relative z-20 container w-full h-screen bg-cover bg-center bg-hero-pattern rounded-[2rem]">
        <Navbar />
        <div className="flex flex-col items-start justify-center h-[80vh] mx-auto">
          <h1 className="text-text-whitePrimary text-title font-semibold">
            Gerak bebas <br /> dengan Beam
          </h1>
          <p className="mt-3 text-body1 text-text-whiteSecondary">
            Ubah masa depan mulai dari dirimu dengan <br /> menggunakan beam
            sekarang.
          </p>
          <div className="flex gap-3 mt-11">
            <Button variant="secondary" icon={<MapPinIcon />}>
              Lihat Garasi Beam
            </Button>
            <Button
              variant="primary"
              icon={<ArrowRightIcon />}
              iconPosition="right"
            >
              Unduh Aplikasi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
