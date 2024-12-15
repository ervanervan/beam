import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import newsImage1 from "../../public/assets/images/news-image1.png";
import newsImage2 from "../../public/assets/images/news-image2.png";
import newsImage3 from "../../public/assets/images/news-image3.png";
import NewsCard from "@/components/NewsCard";
import { ArrowRightLongIcon } from "../../public/assets/icons/ArrowRightLongIcon";
import { useTranslations } from "next-intl";

export default function News() {
  const t = useTranslations("News");

  const newsData = [
    {
      imageSrc: newsImage1,
      imageAlt: "News image 1",
      category: t("news.0.category"),
      description: t("news.0.description"),
      date: t("news.0.date"),
    },
    {
      imageSrc: newsImage2,
      imageAlt: "News image 2",
      category: t("news.1.category"),
      description: t("news.1.description"),
      date: t("news.1.date"),
    },
    {
      imageSrc: newsImage3,
      imageAlt: "News image 3",
      category: t("news.2.category"),
      description: t("news.2.description"),
      date: t("news.2.date"),
    },
  ];

  return (
    <section>
      <DashedBorderContainer>
        <div>
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <div>
              <Tag>{t("tag")}</Tag>
            </div>
            <div className="mt-8 flex flex-col gap-3 items-center">
              <h3 className="text-h3 font-medium text-text-blackPrimary">
                {t("title")}
              </h3>
              <p className="text-body1 text-text-blackSecondary text-center">
                {t("description")}
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
              icon={<ArrowRightLongIcon />}
              iconPosition="right"
            >
              {t("button")}
            </Button>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
