"use client";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BuyHomeSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const itemWidth = 298; // Updated width of each carousel item

  const handlePrev = () => {
    const newPosition = Math.max(scrollPosition - itemWidth, 0);
    setScrollPosition(newPosition);
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const maxPosition =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newPosition = Math.min(scrollPosition + itemWidth, maxPosition);
      setScrollPosition(newPosition);
    }
  };

  return (
    <div data-label="EXPLORE_CARD_BUY_EXPANDED" className="pageComponent">
      <div className="text-gray-500 font-bold my-1.5 text-center">
        ALL PROPERTY NEEDS - ONE PORTAL
      </div>
      <div className="text-4xl font-extrabold text-gray-800 my-1.5 text-center hpc__headingWrap">
        Find Better Places to Live, Work and Wonder...
      </div>
      <div className="my-5"></div>
      <div className="flex flex-wrap">
        <div className="tcs__section flex flex-row gap-20">
          <div className="tcs__imgCont imgHover">
            <picture>
              <img
                src="https://static.99acres.com/universalhp/img/d_hp_buy_xl.webp"
                alt="Buying a Home"
                title="99acres"
                decoding="auto"
                className="animate-gracefulimage duration-300 ease-in"
              />
            </picture>
          </div>
          <div className="tcs__contentArea flex items-center justify-center">
            <div>
              <div className="text-gray-500 font-bold my-1.5">BUY A HOME</div>
              <div className="text-2xl font-bold text-gray-700 my-2">
                Find, Buy &amp; Own Your Dream Home
              </div>
              <div className="my-1.5"></div>
              <div className="text-lg text-gray-500 my-5">
                Explore from Apartments, land, builder floors, villas and more
              </div>
              <button
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
                data-sstheme="_BUTTON_TOP_LEVEL"
              >
                Explore Buying
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg m-auto -mt-[50px] w-[936px] px-12 pb-6 pt-8 shadow-[0_1px_4px_0_rgba(0,106,194,0.2)]">
          <div className="flex flex-row m-auto h-[250px]">
            <div className="pgo__sideHeading w-[300px] inline-block pr-16 align-top mt-[10px] h-[92px]">
              <div className="text-xl font-bold text-gray-800  text-left align-middle">
                Top articles on home buying
              </div>
              <div className="h-4 w-full clear-both"></div>
              <div className="text-xs font-normal text-[#42526E] text-left align-middle">
                Read from Beginners check-list to Pro Tips
              </div>
            </div>
            <div className="pgo__articleWrap w-calc(100%-300px)">
              <div id="article" className="InPageTabs ">
                <div className="relative w-full z-[2] whitespace-nowrap  bg-white border-b border-[#f4f5f7]">
                  <div
                    id="article_0"
                    className="p-2 inline-block mr-6 cursor-pointer text-sm font-semibold text-[#091e42] text-left align-middle"
                  >
                    News
                  </div>
                  <div
                    id="article_1"
                    className="p-2 inline-block mr-6 text-sm  text-[#8993a4] cursor-pointer text-left align-middle pageComponent"
                  >
                    Tax &amp; Legal
                  </div>
                  <div
                    id="article_2"
                    className="p-2 inline-block mr-6 text-sm  text-[#8993a4] cursor-pointer text-left align-middle pageComponent"
                  >
                    Help Guides
                  </div>
                  <div
                    id="article_3"
                    className="p-2 inline-block mr-6 text-sm  text-[#8993a4] cursor-pointer text-left align-middle pageComponent"
                  >
                    Investment
                  </div>
                  <div className="tab__bar absolute w-12 h-[2px] bg-blue-600 left-0"></div>
                </div>
                <div className="pt-4 text-black">
                  <div className="cc__CarouselContainer  relative w-full ">
                    <div className="absolute top-14 -left-7 cursor-pointer">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        onClick={handlePrev}
                      />
                    </div>
                    <div className="cc__CarouselBox  w-full overflow-hidden  ">
                      <div
                        className="cc__slidingBox w-auto whitespace-nowrap transition-all duration-300 ease-in-out flex flex-row ml-0"
                        style={{
                          transform: `translateX(-${scrollPosition}px)`,
                        }}
                        ref={scrollRef}
                      >
                        <div className="pgo__pgArticle mr-6 inline-block">
                          <div className="pageComponent articleCard__articleCard articleCard__imgHover cursor-pointer  mr-2 flex flex-row w-[290px]">
                            <div className="articleCard__imgStyle w-[80px] h-[60px]  rounded-[4px]">
                              <Image
                                src="/image/property/water-conservation.jpeg"
                                alt="Water conservation: The USP of builders"
                                width={80}
                                height={60}
                                className="animate-gracefulimage duration-300 ease-in  w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="h-[77px] pb-4 w-[calc(90%-65px)] ml-4 flex flex-col whitespace-nowrap">
                              <div className="text-sm font-semibold truncate flex items-center text-left">
                                <a className="articleCard__anchorText">
                                  Water conservation: The USP
                                  <br /> of builders
                                </a>
                              </div>
                              <div className="h-[4px] w-full clear-both block"></div>
                              <div className="text-xs text-[#8993a4] font-normal text-left flex items-center">
                                May 06, 2024
                              </div>
                            </div>
                          </div>
                          <div className="pageComponent articleCard__articleCard articleCard__imgHover cursor-pointer  mr-2 flex flex-row w-[290px]">
                            <div className="articleCard__imgStyle w-[80px] h-[60px]  rounded-[4px]">
                              <Image
                                src="/image/property/impact_of_tod.jpeg"
                                alt="Impact of TOD policy on Noida, Ghaziabad"
                                width={80}
                                height={60}
                                className="animate-gracefulimage duration-300 ease-in w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="h-[77px] pb-4 w-[calc(90%-65px)] ml-4 flex flex-col whitespace-nowrap">
                              <div className="text-sm font-semibold truncate flex items-center text-left">
                                <a className="articleCard__anchorText">
                                  Impact of TOD policy on
                                  <br /> Noida, Ghaziabad
                                </a>
                              </div>
                              <div className="h-[4px] w-full clear-both block"></div>
                              <div className="text-xs text-[#8993a4] font-normal text-left flex items-center">
                                Feb 09, 2024
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pgo__pgArticle">
                          <div className="pageComponent articleCard__articleCard articleCard__imgHover cursor-pointer  mr-2 flex flex-row  w-[290px]">
                            <div className="articleCard__imgStyle w-[80px] h-[60px]  rounded-[4px]">
                              <Image
                                src="/image/property/affordable-homes.jpeg"
                                alt="No maintenance fee in affordable homes"
                                width={80}
                                height={60}
                                className="animate-gracefulimage duration-300 ease-in w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="h-[77px] pb-4 w-[calc(90%-65px)] ml-4 flex flex-col whitespace-nowrap">
                              <div className="text-sm font-semibold truncate flex items-center text-left">
                                <a className="articleCard__anchorText">
                                  No maintenance fee in
                                  <br /> affordable homes
                                </a>
                              </div>
                              <div className="h-[4px] w-full clear-both block"></div>
                              <div className="text-xs text-[#8993a4] font-normal text-left flex items-center">
                                Feb 02, 2024
                              </div>
                            </div>
                          </div>
                          <div className="pageComponent articleCard__articleCard articleCard__imgHover cursor-pointer  mr-2 flex flex-row w-[290px]">
                            <div className="articleCard__imgStyle w-[80px] h-[60px]  rounded-[4px]">
                              <Image
                                src="/image/property/noida.jpeg"
                                alt="Noida tops in unsold inventory"
                                width={80}
                                height={60}
                                className="animate-gracefulimage duration-300 ease-in w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="h-[77px] pb-4 w-[calc(90%-65px)] ml-4 flex flex-col whitespace-nowrap">
                              <div className="text-sm font-semibold truncate flex items-center text-left">
                                <a className="articleCard__anchorText">
                                  Registry to start for 6,000 <br />
                                  flats in Noida
                                </a>
                              </div>
                              <div className="h-[4px] w-full clear-both block"></div>
                              <div className="text-xs text-[#8993a4] font-normal text-left flex items-center">
                                Jan 08, 2024
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-14 -right-7 cursor-pointer">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        onClick={handleNext}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
