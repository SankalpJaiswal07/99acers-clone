export default function ExploreSection() {
  return (
    <div className="mt-28 w-[1200px] m-auto relative bg-none">
      <div className="relative mb-12">
        <h1 className="caption_subdued_medium text-xs mt-5 text-center text-[#8993a4] font-bold align-middle">
          GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
        </h1>
        <div className="block h-5 w-full clear-both"></div>
        <div className="relative">
          <div className="w-full">
            <div className="cc__CarouselBox">
              <div className="w-auto whitespace-nowrap transition-all duration-300 ease-in-out overflow-hidden scroll-smooth">
                <div className="flex items-center scroll-auto">
                  <ImageCardList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const imageData = [
  {
    src: "/image/explore/buy.png",
    alt: "Buying a Home",
    text: "Buying a home",
  },
  {
    src: "/image/explore/rent.png",
    alt: "Renting a Home",
    text: "Renting a home",
  },
  {
    src: "/image/explore/invest.png",
    alt: "Invest in Real Estate",
    text: "Invest in Real Estate",
  },
  {
    src: "/image/explore/sell-rent.png",
    alt: "Sell/Rent your property",
    text: "Sell/Rent your property",
  },
  {
    src: "/image/explore/plot-land.png",
    alt: "plot/land",
    text: "Plot/Land",
  },
  {
    src: "/image/explore/pg.png",
    alt: "PG and co-living",
    text: "PG and co-living",
  },
  {
    src: "/image/explore/commercial_buy.png",
    alt: "Commercial Properties",
    text: "Commercial Properties",
  },
];

const ImageCard = ({ src, alt, text }: any) => (
  <div className="w-[180px] rounded-lg cursor-pointer mr-4 inline-block align-top p-1 mb-[2px]">
    <div className="rounded-lg first:w-[180px] first:h-[120px] first:mb-4 first:overflow-hidden">
      <picture>
        <img
          src={src}
          alt={alt}
          className="cursor-pointer transition-transform duration-700 ease-in-out transform hover:scale-110"
        />
      </picture>
    </div>
    <div className="Ng600 ic__cardText text-sm text-[#041533] font-semibold opacity-80">
      {text}
    </div>
  </div>
);

const ImageCardList = () => (
  <>
    {imageData.map((item, index) => (
      <ImageCard key={index} src={item.src} alt={item.alt} text={item.text} />
    ))}
  </>
);
