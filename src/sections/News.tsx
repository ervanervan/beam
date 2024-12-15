import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import newsImage1 from "../../public/assets/images/news-image1.png";
import newsImage2 from "../../public/assets/images/news-image2.png";
import newsImage3 from "../../public/assets/images/news-image3.png";
import NewsCard from "@/components/NewsCard";

const ArrowRightIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5.5L14.5 8M14.5 8L12 10.5M14.5 8H2.5"
      stroke="#F9F9F9"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const newsData = [
  {
    imageSrc: newsImage1,
    imageAlt: "News image 1",
    category: "APAC",
    description:
      "Beam mempercepat pertumbuhan dengan lonjakan pendapatan bruto sebesar 36%, mencapai profitabilitas EBITDA yang disesuaikan.",
    date: "07 Oktober 2024",
  },
  {
    imageSrc: newsImage2,
    imageAlt: "News image 2",
    category: "APAC",
    description: "Beam memulai integrasi teknologi perisai pejalan kaki.",
    date: "26 September 2024",
  },
  {
    imageSrc: newsImage3,
    imageAlt: "News image 3",
    category: "APAC",
    description: "Beam meluncurkan kampanye musim panas keselamatan",
    date: "12 September 2024",
  },
];

export default function News() {
  return (
    <section>
      <DashedBorderContainer>
        <div>
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <div>
              <Tag>Berita</Tag>
            </div>
            <div className="mt-8 flex flex-col gap-3 items-center">
              <h3 className="text-h3 font-medium text-text-blackPrimary">
                Berita terbaru
              </h3>
              <p className="text-body1 text-text-blackSecondary text-center">
                Tetap terinformasi dengan kabar terbaru dan update menarik
                seputar kota, komunitas, dan program kami.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-7 mt-10">
            {newsData.map((news, index) => (
              <NewsCard
                key={index}
                imageSrc={news.imageSrc}
                imageAlt={news.imageAlt}
                category={news.category}
                description={news.description}
                date={news.date}
              />
            ))}
          </div>
          <div className="mt-11 flex justify-center">
            <Button
              variant="tertiary"
              icon={<ArrowRightIcon />}
              iconPosition="right"
            >
              Tampilkan Lebih Banyak
            </Button>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
