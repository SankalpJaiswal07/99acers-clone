"use client";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SearchSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search for 3bhk in Mumbai");

  const placeholderTexts = [
    "Enter City / Locality / Projects / Landmarks...",
    'Search "for 3BHK sale in Mumbai"',
    'Search "Hyderabad"',
    'Search "Noida"',
    'Search "flat for rent in pune"',
    // Add more placeholder texts if needed
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholderTexts.length;
      setPlaceholder(placeholderTexts[index]);
    }, 3000); // Change the text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className=" mx-auto absolute top-[272px] left-0 right-0 z-3 w-[949.13px] h-[150px]">
      <div className="relative overflow-hidden flex justify-between rounded-t-xl py-1.5 bg-white">
        {[
          "Buy",
          "Rent",
          "New Launch",
          "PG / Co-living",
          "Commercial",
          "Plots/Land",
          "Projects",
        ].map((tab, index) => (
          <div
            key={index}
            className="flex items-center px-8 py-4 text-[16px] leading-6 font-semibold cursor-pointer text-[#041533]"
          >
            {tab}
          </div>
        ))}
        <div className="h-[3px] w-[54px] bg-[#006ac2] absolute bottom-0 left-5 transition-all ease-in-out rounded-md"></div>
      </div>
      <div className="flex justify-between items-center rounded-b-xl bg-white shadow-lg p-5">
        <div className="flex flex-grow min-w-0">
          <div
            className="flex whitespace-nowrap border-r border-gray-300 pr-5 cursor-pointer  text-[#091e42] group gap-1 items-center justify-center"
            onClick={toggleVisibility}
          >
            All Residential
            {!isVisible ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${isVisible ? "hidden" : ""}`}
                width={12}
                height={12}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`${isVisible ? "" : "hidden"}`}
                width={12}
                height={12}
              />
            )}
          </div>
          <div className="flex-grow relative">
            <input
              type="text"
              className="text-[14px] w-full ml-3 shadow-none focus:outline-none text-[#091e42]"
              placeholder={placeholder}
            />
          </div>
        </div>
        <div className="relative cursor-pointer h-[30px] whitespace-nowrap rounded-[36px] flex items-center mr-[12px]">
          <Image
            src="/image/nearMe.png"
            alt="nearMe Image"
            width={40}
            height={40}
          />
        </div>
        <div className="relative cursor-pointer h-[30px] whitespace-nowrap rounded-[36px] flex items-center mr-[12px]">
          <Image src="/image/mic.png" alt="mic image" width={40} height={40} />
        </div>
        <button className="px-4 py-2 bg-primary text-white font-semibold rounded-lg bg-[#0078db]">
          Search
        </button>
      </div>
      {isVisible && (
        <div className="relative  bg-white w-full p-10 pb-5 z-[-1] opacity-100 mt-[-15px] rounded-xl shadow-md transition-opacity duration-300 ease-in-out h-[270px] ">
          <div className=" p-2 pb-3 h-[160px] text-0 opacity-100 max-h-[600px]  border-b border-[#ebecf0] animate-[inPageSearchBox__filterdd_0.2s_forwards]">
            <div className="flex flex-row">
              <div className="clear-both w-full flex flex-wrap">
                {[
                  { label: "Flat/Apartment" },
                  { label: "Independent/Builder Floor" },
                  { label: "Independent House/Villa" },
                  { label: "Residential Land" },
                  { label: "1 RK/ Studio Apartment" },
                  { label: "Farm House" },
                  { label: "Serviced Apartments" },
                  { label: "Other" },
                ].map(({ label }) => (
                  <div
                    key={label}
                    className="flex w-1/3 align-top pr-3 pb-3 gap-1"
                  >
                    <input type="checkbox" checked />
                    <label className="inline-block text-[12px] leading-[24px] font-normal text-[#42526e] align-middle">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
              <div className=" flex-grow-[3] cursor-pointer text-right">
                <span className="block text-left align-middle font-semibold text-[14px] leading-[20px] text-[#0078db]">
                  <span>Clear</span>
                </span>
              </div>
            </div>
            <div className="h-[16px]"></div>
            <div className="text-[12px] leading-[16px] font-normal text-[#091e42] ">
              Looking for commercial properties?{" "}
              <a
                className="inline align-text-bottom font-semibold text-[12px] leading-[16px] text-[#0078db]"
                data-label="LOOKING_FOR_COMM"
              >
                Click here
              </a>
            </div>
          </div>
          <div className="pt-3 h-[40px] opacity-100 max-h-[600px] animate-[inPageSearchBox__filterdd_0.2s_forwards]">
            <div className="mr-3 flex gap-1">
              {/* Secondary Filter Buttons */}
              <div className="flex flex-row items-center justify-center text-center align-middle rounded-full bg-white border border-[#ebecf0] px-3 py-1 text-[14px] leading-[24px] font-normal text-[#42526e] cursor-pointer gap-1">
                <span>Budget</span>
                <FontAwesomeIcon icon={faChevronDown} width={12} height={12} />
              </div>
              <div className="flex flex-row items-center justify-center gap-1 text-center align-middle rounded-full bg-white border border-[#ebecf0] px-3 py-1 text-[14px] leading-[24px] font-normal text-[#42526e] cursor-pointer">
                <span>Bedroom</span>
                <FontAwesomeIcon icon={faChevronDown} width={12} height={12} />
              </div>
              <div className="flex flex-row items-center justify-center gap-1 text-center align-middle rounded-full bg-white border border-[#ebecf0] px-3 py-1 text-[14px] leading-[24px] font-normal text-[#42526e] cursor-pointer">
                <span>Construction Status</span>
                <FontAwesomeIcon icon={faChevronDown} width={12} height={12} />
              </div>
              <div className="flex flex-row items-center justify-center gap-1 text-center align-middle rounded-full bg-white border border-[#ebecf0] px-3 py-1 text-[14px] leading-[24px] font-normal text-[#42526e] cursor-pointer">
                <span>Posted By</span>
                <FontAwesomeIcon icon={faChevronDown} width={12} height={12} />
              </div>
            </div>
          </div>
          <div className="h-4"></div>
        </div>
      )}
    </div>
  );
}
