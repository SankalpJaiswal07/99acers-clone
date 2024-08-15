import {
  faArrowRight,
  faChevronDown,
  faChevronUp,
  faPhone,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons/faHeadphones";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative top-0 w-full h-[340px] z-[999]">
      <Image
        src="/banner.jpg"
        alt="banner"
        fill
        objectFit="cover"
        className="z-0"
      />
      <div className="px-[4%] py-4">
        <div className="relative flex justify-between flex-wrap items-center">
          <nav className="flex items-center relative">
            <div className="flex items-center justify-between flex-wrap">
              <a href="#">
                <Image
                  src="/logo.png"
                  alt="99 Acres"
                  width={100}
                  height={100}
                />
              </a>
              <div className="pl-3 relative group">
                <div className="flex flex-row items-center justify-center relative before:absolute before:content-[''] before:bottom-[-6px] before:left-0 before:w-full before:h-[5px] before:inline-block before:rounded-[5px] before:border-b-[4px] before:border-[#0078db] before:transition-opacity before:duration-500 before:ease-in-out before:opacity-0 hover:before:opacity-100 gap-2">
                  <a href="#" className="">
                    All India
                  </a>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="group-hover:hidden"
                    width={12}
                    height={12}
                  />
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="hidden group-hover:inline-block"
                    width={12}
                    height={12}
                  />
                </div>
                <div className="-left-[68px] absolute top-[32px]  w-[680px] h-[442px] bg-white rounded-lg shadow-lg z-[9] invisible group-hover:visible transition-all duration-300 ease-in-out border ">
                  <div className="p-[32px] relative">
                    <div>
                      <h1 className="text-[#041533] text-[32px] font-bold leading-[48px] mb-[32px]">
                        Explore real estate in...
                      </h1>
                    </div>
                    <div>
                      <div className="pt-[16px]">
                        <div className="form-inner bg-white rounded-[4px] shadow-md flex justify-between gap-8">
                          <div className="flex items-center gap-8  w-[82%] ">
                            <div className=" inline-block my-[22px] px-[22px] py-[0] text-[14px] text-[#091E42] font-semibold border-r border-[#EBECF0]">
                              Residential
                            </div>
                            <div className="border-r border-[#EBECF0] h-5 w-full flex-wrap">
                              <input
                                type="text"
                                placeholder="City Name"
                                className="w-full bg-transparent"
                              />
                            </div>
                          </div>
                          <div className="p-[13px]">
                            <a
                              href="#"
                              className="text-[14px] inline-block py-2 px-4 font-bold border rounded bg-[#006AC2]"
                            >
                              Explore
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="page-continu pt-[32px]">
                        <p className="text-[#42526E] text-[14px] leading-[20px] font-semibold mb-[16px]">
                          Continue browsing where you left off...
                        </p>
                        <div className="flex gap-[2rem]">
                          <a
                            href="#"
                            className="btn-2 bg-[#F0F9FF] border border-[#A3DAFF] px-[16px] py-[5px] rounded-full text-[#091E42] text-[14px] font-semibold"
                          >
                            Buy in Dwarka Delhi
                          </a>
                          <a
                            href="#"
                            className="btn-2 bg-transparent border border-[#A3DAFF] px-[16px] py-[5px] rounded-full text-[#091E42] text-[14px] font-semibold"
                          >
                            Buy in North Delhi
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="page-last bg-[#F4F5F7] flex justify-between items-center mt-[70px] px-[32px] py-[8px]">
                    <ul className="flex gap-[2rem]">
                      <li className="px-4 py-2">
                        <a
                          href="#"
                          className="text-[#42526E] text-[12px] font-normal"
                        >
                          All India
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#42526E] text-[12px] font-normal"
                        >
                          Dubai
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#42526E] text-[12px] font-normal"
                        >
                          For NRI
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#42526E] text-[12px] font-normal"
                        >
                          International <br />
                          <span className="text-gray-400">
                            Powered by listglobally.com
                          </span>
                        </a>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="text-[#42526E] text-[12px] font-normal"
                    >
                      View To City
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <a href="#">
            <i className="fa-solid fa-bars-staggered text-white" id="bars"></i>
          </a>
          <div className="flex ">
            <ul className="list flex  text-white">
              <li className="relative group px-4 py-2">
                <a
                  href="#"
                  className="relative inline-block before:absolute before:content-[''] before:bottom-[-6px] before:left-0 before:w-full before:h-[5px] before:inline-block before:rounded-[5px] before:border-b-[4px] before:border-[#0078db] before:transition-opacity before:duration-500 before:ease-in-out before:opacity-0 hover:before:opacity-100"
                >
                  For Buyers
                </a>

                <div className="text-[#42526e] absolute top-[42px] -left-[112px] w-[800px] h-[330px] bg-white rounded-[10px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-fade-down animate-duration-500 flex gap-8">
                  <div className="w-[33.33%] bg-[#f4f5f7] py-[40px] px-[30px] font-medium">
                    <span>BUY A HOME</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Land/Plot</a>
                      </li>
                      <li>
                        <a href="#">COMMERCIAL</a>
                      </li>
                      <li>
                        <a href="#">POPULAR AREAS</a>
                      </li>
                      <li>
                        <a href="#">INSIGHTS</a>
                      </li>
                      <li>
                        <a href="#">ARTICLES & NEWS</a>
                      </li>
                      <li>
                        <div className="mt-4">
                          <p>Contact us toll-free on</p>
                          <span className="block text-lg">1800 41 99099</span>
                          <small className="block">(9AM-11PM IST)</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
                    <span className="">BUY A HOME</span>
                    <ul className="space-y-2 mt-2 font-medium">
                      <li>
                        <a href="#">Flats</a>
                      </li>
                      <li>
                        <a href="#">Builder Floors</a>
                      </li>
                      <li>
                        <a href="#">Independent House</a>
                      </li>
                      <li>
                        <a href="#">Plots in Dwarka Delhi</a>
                      </li>
                      <li>
                        <a href="#">Studio Apartments/1 RK Flats</a>
                      </li>
                      <li>
                        <a href="#">Farm Houses</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
                    <div className="bg-[#F0F9FF] px-4 py-5 rounded-[5px] relative">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="absolute right-5 text-[#0078DB] text-[1px] top-5 transform rotate-[-45deg]"
                        width={16}
                        height={16}
                      />
                      <div className="flex items-center gap-6 mb-5">
                        <div>
                          <Image
                            src="/image/insights_batch.png"
                            alt="insights_batch"
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="flex items-center flex-wrap align-middle">
                          <span className="text-[8px]">INTRODUCING</span>
                          <p className="mt-2 text-base font-bold text-black">
                            Insights
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-2">
                        <li>
                          <div className="flex items-center">
                            <Image
                              src="/image/InsightsUtilities1.png"
                              alt="Insights Utilities"
                              width={16}
                              height={16}
                            />
                            <a href="#" className="ml-2">
                              Understand localities
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <Image
                              src="/image/InsightsUtilities1.png"
                              alt="Insights Utilities"
                              width={16}
                              height={16}
                            />
                            <a href="#" className="ml-2 ">
                              Read Resident Reviews
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <Image
                              src="/image/InsightsUtilities1.png"
                              alt="Insights Utilities"
                              width={16}
                              height={16}
                            />
                            <a href="#" className="ml-2 ">
                              Check Price Trends
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <Image
                              src="/image/InsightsUtilities1.png"
                              alt="Insights Utilities"
                              width={16}
                              height={16}
                            />
                            <a href="#" className="ml-2">
                              Tools, Utilities & more
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-4 py-2">
                <a
                  href="#"
                  className="relative inline-block before:absolute before:content-[''] before:bottom-[-6px] before:left-0 before:w-full before:h-[5px] before:inline-block before:rounded-[5px] before:border-b-[4px] before:border-[#0078db] before:transition-opacity before:duration-500 before:ease-in-out before:opacity-0 hover:before:opacity-100"
                >
                  For Tenants
                </a>
                <div className="absolute top-[42px] -left-[225px] w-[800px] h-[365px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-fade-down animate-duration-500 flex gap-8 text-[#42526e]">
                  <div className="w-[33.33%] bg-[#f4f5f7] py-[40px] px-[30px] font-medium ">
                    <span>RENT A HOME</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Apartments</a>
                      </li>
                      <li>
                        <a href="#">Independent House</a>
                      </li>
                      <li>
                        <a href="#">Independent/Builder Floors</a>
                      </li>
                      <li>
                        <a href="#">Farm Houses</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
                    <span>TOP CITIES TO RENT</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Rent in Dwarka Delhi</a>
                      </li>
                      <li>
                        <a href="#">Rent in South Delhi</a>
                      </li>
                      <li>
                        <a href="#">Rent in North Delhi</a>
                      </li>
                    </ul>
                  </div>
                  <InsightsCard />
                </div>
              </li>
              <li className="relative group px-4 py-2">
                <a
                  href="#"
                  className="relative inline-block before:absolute before:content-[''] before:bottom-[-6px] before:left-0 before:w-full before:h-[5px] before:inline-block before:rounded-[5px] before:border-b-[4px] before:border-[#0078db] before:transition-opacity before:duration-500 before:ease-in-out before:opacity-0 hover:before:opacity-100"
                >
                  For Owners
                </a>
                <div className="absolute top-[42px] -left-[343px] w-[800px] h-[365px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-fade-down animate-duration-500 flex gap-8 text-[#42526e]">
                  <div className="w-[33.33%] bg-[#f4f5f7] py-[40px] px-[30px] font-medium">
                    <span>LIST YOUR PROPERTY</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Sell Residential Property</a>
                      </li>
                      <li>
                        <a href="#">Sell Commercial Property</a>
                      </li>
                      <li>
                        <a href="#">Sell Land/Plots</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
                    <span>POPULAR SEARCHES</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Selling Property in Dwarka</a>
                      </li>
                      <li>
                        <a href="#">Selling Property in South Delhi</a>
                      </li>
                      <li>
                        <a href="#">Selling Property in North Delhi</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
                    <div className="relative w-[240px] -left-[42px] group">
                      <div className="relative w-full h-full hover:after:opacity-100 after:absolute after:bg-[rgba(0,0,0,0.3)] after:w-full after:h-full after:top-0 after:right-0 after:transition-opacity after:duration-400 after:ease-out after:opacity-0 group">
                        <span className="absolute top-1/2 left-1/2 text-[14px] z-[2] inline-block rounded-[4px] border border-white px-[16px] py-[8px] text-white font-bold whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                          Post Property
                        </span>
                        <Image
                          className="w-full rounded-[5px]"
                          alt="post_property"
                          src="/image/post_property.png"
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative group px-4 py-2">
                <a
                  href="#"
                  className="relative inline-block before:absolute before:content-[''] before:bottom-[-6px] before:left-0 before:w-full before:h-[5px] before:inline-block before:rounded-[5px] before:border-b-[4px] before:border-[#0078db] before:transition-opacity before:duration-500 before:ease-in-out before:opacity-0 hover:before:opacity-100"
                >
                  For Dealers/Builders
                </a>
                <div className="absolute top-[42px] -left-[466px] w-[800px] h-[365px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-fade-down animate-duration-500 flex gap-8 text-[#42526e]">
                  <div className="w-[33.33%] bg-[#f4f5f7] py-[40px] px-[30px] font-medium">
                    <span>BUILD WITH US</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Partner with Us</a>
                      </li>
                      <li>
                        <a href="#">Project Management</a>
                      </li>
                      <li>
                        <a href="#">Marketing Support</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
                    <span>TOOLS & SERVICES</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Project Financing</a>
                      </li>
                      <li>
                        <a href="#">Construction Management</a>
                      </li>
                      <li>
                        <a href="#">Sales Assistance</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
                    <div className="relative w-[240px] -left-[42px] group">
                      <div className="relative w-full h-full hover:after:opacity-100 after:absolute after:bg-[rgba(0,0,0,0.3)] after:w-full after:h-full after:top-0 after:right-0 after:transition-opacity after:duration-400 after:ease-out after:opacity-0 group">
                        <span className="absolute top-1/2 left-1/2 text-[14px] z-[2] inline-block rounded-[4px] border border-white px-[16px] py-[8px] text-white font-bold whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100">
                          Post Property
                        </span>
                        <Image
                          className="w-full rounded-[5px]"
                          alt="post_property"
                          src="/image/post_property.png"
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative group px-4 py-2">
                <a
                  href="#"
                  className="relative inline-block before:absolute before:content-[''] before:bottom-[-6px] before:left-0 before:w-full before:h-[5px] before:inline-block before:rounded-[5px] before:border-b-[4px] before:border-[#0078db] before:transition-opacity before:duration-500 before:ease-in-out before:opacity-0 hover:before:opacity-100"
                >
                  Insights
                  <div className="group absolute  bottom-[10px] left-14 top-0 bg-[#d84f7a] p-[0_2px] border border-white rounded-[2px] text-[8px] font-bold leading-[12px] text-white inline-block ml-[2px] mr-[1px] overflow-hidden opacity-40 hover:opacity-100 transition-opacity duration-300">
                    NEW
                    <div className="absolute w-[115%] h-full top-0 left-[-2px] skew-x-[30deg] bg-[200%_200%] bg-no-repeat"></div>
                  </div>
                </a>
                <div className="absolute  top-[42px] -left-[650px] w-[800px] h-[365px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-fade-down animate-duration-500 flex gap-8 text-[#42526e]">
                  <div className="w-[33.33%] bg-[#f4f5f7] py-[40px] px-[30px] font-medium">
                    <span>MARKET INSIGHTS</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Real Estate Trends</a>
                      </li>
                      <li>
                        <a href="#">Property News</a>
                      </li>
                      <li>
                        <a href="#">Investment Opportunities</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
                    <span>BUYER INSIGHTS</span>
                    <ul className="space-y-2 mt-2">
                      <li>
                        <a href="#">Locality Insights</a>
                      </li>
                      <li>
                        <a href="#">Price Trends</a>
                      </li>
                      <li>
                        <a href="#">Buyer Guides</a>
                      </li>
                    </ul>
                  </div>
                  <InsightsCard />
                </div>
              </li>
              <li className="px-4 py-2">
                <div
                  data-label="LINK"
                  data-custominfo='{"custom_object":{"url":"/postproperty/"}}'
                  className="flex justify-center items-center w-[164px] h-[32px] bg-white border border-[#e5f3fd] rounded-[8px] cursor-pointer"
                >
                  <div className="style__postContainer flex justify-center items-center w-[164px] h-[32px] bg-white border border-[#e5f3fd] rounded-[8px] cursor-pointer">
                    <div className="style__post font-semibold text-[14px] leading-[20px] text-[#041533] mr-[6px] mt-[-2px]">
                      Post property
                    </div>

                    <div className="bg-[#219653] p-[5px_5px_4px_5px] text-[9px] font-bold leading-[6px] rounded-[3px] text-white inline-block relative ml-[2px] mr-[1px] overflow-hidden">
                      FREE
                      <div className="w-[115%] absolute h-full top-0 left-[-2px] skew-x-[150deg] bg-gradient-free bg-[size:200%_200%] bg-no-repeat animate-fre_backplay"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="px-4 py-2">
                <div
                  data-label="CONTACT_US_DROPDOWN"
                  className="relative cursor-pointer min-w-[44px] inline-block align-middle pr-4 theader__contactUsIcon theader__op1 group"
                >
                  <div className="relative inline-block">
                    <span className="inline-block before:absolute before:content-[''] before:bottom-[-6px] before:left-0 before:top-8 before:w-full before:h-[5px] before:inline-block before:rounded-[5px] before:border-b-[4px] before:border-[#0078db] before:transition-opacity before:duration-500 before:ease-in-out before:opacity-0 hover:before:opacity-100 ">
                      <FontAwesomeIcon
                        icon={faHeadphones}
                        width={24}
                        height={24}
                        className="inline-block"
                      />
                    </span>
                  </div>

                  <div className="absolute left-[-196px] top-10 w-[280px] max-h-[500px] pt-6 pb-4 bg-white rounded-lg shadow-[0_9px_16px_0_rgba(0,106,194,0.2)] z-9 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:animate-fade-down animate-duration-500">
                    <div className="pl-6 font-bold text-black ">CONTACT US</div>
                    <ul className="mt-2 mb-3 body_small theader__conatctNoList">
                      <li className="flex items-center justify-center mb-3">
                        <div className="mr-4">
                          <FontAwesomeIcon
                            icon={faPhone}
                            width={10}
                            height={10}
                            className="text-black"
                          />
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs font-normal theader__heading">
                            Toll Free | 9:30 AM to 6:30 PM (Mon-Sun)
                          </div>
                          <div className="text-[#253858] text-lg font-semibold theader__phoneNumber">
                            1800-41-99099
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center mb-3 relative px-4 py-2 ">
                        <div className="mr-4">
                          <FontAwesomeIcon
                            icon={faPhone}
                            width={10}
                            height={10}
                            className="text-black"
                          />
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs font-normal theader__heading">
                            For International Users
                          </div>
                          <div className="text-[#253858] text-lg font-semibold theader__phoneNumber">
                            +91-120-6637501
                          </div>
                        </div>
                        <div className="ml-auto border-solid border-transparent border-l-[#42526e] border-t-0 border-b-0 border-r-0 w-0 h-0 border-l-2 theader__arrowRight"></div>
                        <div className="absolute right-[-60px] top-6 w-[230px] opacity-0 invisible pointer-events-none bg-white rounded-lg shadow-[0_9px_16px_0_rgba(0,106,194,0.2)] transition-all duration-300 ease-in-out z-9 pt-5 theader__subMenuContent theader__login">
                          <div className="pl-6 font-bold theader__subHeading">
                            INTERNATIONAL NUMBERS
                          </div>
                          <ul className="mt-2 mb-3 body_small theader__conatctNoList">
                            <li className="flex items-center mb-3">
                              <div className="mr-4">
                                <i className="bg-[position:-96px_-160px] iconS_Common_16 icon_callBlack"></i>
                              </div>
                              <div>
                                <div className="text-gray-500 text-xs font-normal theader__heading">
                                  United Arab Emirates
                                </div>
                                <div className="text-[#253858] text-lg font-semibold theader__phoneNumber">
                                  8000 18 2956
                                </div>
                              </div>
                            </li>
                            <li className="flex items-center mb-3">
                              <div className="mr-4">
                                <i className="bg-[position:-96px_-160px] iconS_Common_16 icon_callBlack"></i>
                              </div>
                              <div>
                                <div className="text-gray-500 text-xs font-normal theader__heading">
                                  United States of America
                                </div>
                                <div className="text-[#253858] text-lg font-semibold theader__phoneNumber">
                                  1833 703-9807
                                </div>
                              </div>
                            </li>
                            <li className="flex items-center">
                              <div className="mr-4">
                                <i className="bg-[position:-96px_-160px] iconS_Common_16 icon_callBlack"></i>
                              </div>
                              <div>
                                <div className="text-gray-500 text-xs font-normal theader__heading">
                                  United Kingdom
                                </div>
                                <div className="text-[#253858] text-lg font-semibold theader__phoneNumber">
                                  8000 48 9253
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <a>
                      <button
                        type="submit"
                        className="w-[calc(100%-48px)] mx-[24px] box-border shadow-[0_1px_4px_0_rgba(0,106,194,0.2)] bg-transparent border border-[#0078db] rounded-md outline-none text-center text-[#0078db] text-sm font-bold py-2 px-4 cursor-pointer buttons__secondaryRegular buttons__bold pageComponent"
                        data-label="REQUEST_CALL_BACK_HOME"
                      >
                        <span className="inline-flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faPhoneVolume}
                            width={20}
                            height={20}
                          />
                          <span>Request a Call Back</span>
                        </span>
                      </button>
                    </a>
                    <div className="mt-2 pl-6  text-[12px]">
                      <span className="text-[#253858]">
                        To check all the FAQ{" "}
                        <span className="text-[#0078db] cursor-pointer">
                          click here
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative h-[42px] cursor-pointer flex items-center group">
                  <div className="relative inline-block">
                    <span className="flex flex-row gap-2 before:absolute before:content-[''] before:top-7 before:bottom-[-6px] before:left-0 before:w-full before:h-[5px] before:inline-block before:rounded-[5px] before:border-b-[4px] before:border-[#0078db] before:transition-opacity before:duration-500 before:ease-in-out before:opacity-0 hover:before:opacity-100 ">
                      <FontAwesomeIcon
                        icon={faUser}
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="group-hover:hidden"
                        width={12}
                        height={12}
                      />
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="hidden group-hover:inline-block"
                        width={12}
                        height={12}
                      />
                    </span>
                  </div>

                  <div className="absolute w-[192px]  pt-[20px] pb-[24px] px-[25px] h-[220px] bg-white rounded-lg -left-[120px] top-12 opacity-0 invisible group-hover:animate-fade-down animate-duration-500  pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto ">
                    <div className=" text-[#0078db] hyperlinks_medium bold spacer16 font-bold text-sm align-middle text-left mb-[12px]">
                      LOGIN / REGISTER
                    </div>
                    <ul className="text-[12px] leading-[20px] font-normal text-[#091e42] inline-block text-left align-middle mb-[12px]">
                      <li className="mb-[12px] font-semibold ml-0 py-[2px] px-1 bg-[]">
                        <a className="font-semibold">My Activity</a>
                      </li>
                      <li className="mb-[10px]">
                        <a className="font-normal leading-[20px]  ml-[12px] py-[2px] px-1 ">
                          Recently Searched
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a className="font-normal leading-[20px] mb-[10px] ml-[12px] py-[2px] px-1 ">
                          Recently Viewed
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a className="font-normal leading-[20px] mb-[10px] ml-[12px] py-[2px] px-1 ">
                          Shortlisted
                        </a>
                      </li>
                      <li className="mb-[10px]">
                        <a className="font-normal leading-[20px] ml-[12px] py-[2px] px-1 ">
                          Contacted
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const InsightsCard = () => {
  return (
    <div className="w-[33.33%] py-[40px] px-[30px] text-[12px]">
      <div className="bg-[#F0F9FF] px-4 py-5 rounded-[5px] relative">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="absolute right-5 text-[#0078DB] text-[1px] top-5 transform rotate-[-45deg]"
          width={16}
          height={16}
        />
        <div className="flex items-center gap-6 mb-5">
          <div>
            <Image
              src="/image/insights_batch.png"
              alt="insights_batch"
              width={35}
              height={35}
            />
          </div>
          <div className="flex items-center flex-wrap align-middle">
            <span className="text-[8px]">INTRODUCING</span>
            <p className="mt-2 text-base font-bold text-black">Insights</p>
          </div>
        </div>
        <ul className="space-y-2 mt-2">
          <li>
            <div className="flex items-center">
              <Image
                src="/image/InsightsUtilities1.png"
                alt="Insights Utilities"
                width={16}
                height={16}
              />
              <a href="#" className="ml-2">
                Understand localities
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Image
                src="/image/InsightsUtilities1.png"
                alt="Insights Utilities"
                width={16}
                height={16}
              />
              <a href="#" className="ml-2">
                Read Resident Reviews
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Image
                src="/image/InsightsUtilities1.png"
                alt="Insights Utilities"
                width={16}
                height={16}
              />
              <a href="#" className="ml-2">
                Check Price Trends
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Image
                src="/image/InsightsUtilities1.png"
                alt="Insights Utilities"
                width={16}
                height={16}
              />
              <a href="#" className="ml-2">
                Tools, Utilities & more
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
