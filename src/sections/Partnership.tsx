import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";

const ArrowLeftIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13L2 8M2 8L7 3M2 8H14"
      stroke="#1F1F1F"
      strokeWidth="1.4"
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
      d="M9 3L14 8M14 8L9 13M14 8H2"
      stroke="#1F1F1F"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Partnership() {
  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div className="flex flex-col ">
          <div className="md:max-w-lg">
            <div>
              <Tag>Kemitraaan strategis</Tag>
            </div>
            <div className="mt-8">
              <h3 className="text-h3 font-medium text-text-blackPrimary">
                Menata ulang kota Anda.
              </h3>
              <p className="mt-3 text-body1 text-text-blackSecondary">
                Kami ingin bermitra dengan Anda untuk mendorong sesuatu yang
                baru hari ini.
              </p>
            </div>
          </div>
          <div className="mt-9">
            <div className="flex items-center justify-between">
              <span>1/4</span>
              <div className="flex items-center gap-4 mr-9">
                <Button variant="secondary" icon={<ArrowLeftIcon />} />
                <Button variant="secondary" icon={<ArrowRightIcon />} />
              </div>
            </div>
            <div className="flex items-center gap-10 overflow-x-scroll">
              <div className="w-1/2 bg-red-500 h-[500px]"></div>
              <div className="w-1/2 bg-red-500 h-[500px]"></div>
              <div className="w-1/2 bg-red-500 h-[500px]"></div>
              <div className="w-1/2 bg-red-500 h-[500px]"></div>
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
