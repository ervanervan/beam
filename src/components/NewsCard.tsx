import Image, { StaticImageData } from "next/image";

interface NewsCardProps {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  category: string;
  description: string;
  date: string;
}

export default function NewsCard({
  imageSrc,
  imageAlt,
  category,
  description,
  date,
}: NewsCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full object-cover rounded-2xl"
          width={1000}
          height={1000}
        />
      </div>
      <div className="mt-3">
        <h4 className="text-kategori font-medium text-text-purple2">
          {category}
        </h4>
        <p className="mt-2 text-text-blackPrimary text-sm w-[90%]">
          {description}
        </p>
        <div className="mt-1 flex gap-2 items-center">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4V8H11M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z"
                stroke="#808080"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-body3 text-text-blackSecondary">{date}</span>
        </div>
      </div>
    </div>
  );
}
