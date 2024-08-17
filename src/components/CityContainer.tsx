import Image from "next/image";

const CityContainer: React.FC = () => {
  const cities = [
    {
      imgSrc: "/image/delhi-ncr.jpg",
      name: "Delhi / NCR",
      properties: "167,000+ Properties",
    },
    {
      imgSrc: "/image/bangalore.jpg",
      name: "Bangalore",
      properties: "41,000+ Properties",
    },
    {
      imgSrc: "/image/pune.jpg",
      name: "Pune",
      properties: "41,000+ Properties",
    },
    {
      imgSrc: "/image/chennai.jpg",
      name: "Chennai",
      properties: "29,000+ Properties",
    },
    {
      imgSrc: "/image/hyderabad.jpg",
      name: "Hyderabad",
      properties: "23,000+ Properties",
    },
    {
      imgSrc: "/image/kolkata.jpg",
      name: "Kolkata",
      properties: "26,000+ Properties",
    },
    {
      imgSrc: "/image/ahmedabad.jpeg",
      name: "Ahmedabad",
      properties: "113,000+ Properties",
    },
    {
      imgSrc: "/image/mumbai.jpg",
      name: "Mumbai",
      properties: "50,000+ Properties",
    },
  ];

  return (
    <section className="mt-8">
      <div className="px-[4%] py-4">
        <div className="mb-8 ">
          <p className="text-base font-semibold text-[#8993a4;]">Top cities</p>
          <h2 className="text-4xl font-bold text-[#041533]">
            Explore Real Estate in Popular Indian Cities
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="flex flex-row items-center gap-8">
              <div className="w-24 h-24 overflow-hidden rounded-lg">
                <Image
                  src={city.imgSrc}
                  alt={city.name}
                  width={100}
                  height={98}
                  className="object-cover w-full h-full cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-lg font-bold text-[#041533]">{city.name}</p>
                <span className="text-sm text-[#8993A4] font-semibold">
                  {city.properties}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityContainer;
