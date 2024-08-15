import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="pt-10 bg-[#151C22] p-0 m-0 box-border capitalize scroll-smooth no-underline border-none outline-none list-none">
      <div className="bg-[#151C22] ">
        <div className="px-[4%] py-4 ">
          <article className="gap-8 flex flex-wrap items-start">
            <div className="w-[20.9999%] xl:w-[20.9999%] lg:w-[20.9999%] md:w-1/3 sm:w-full mb-8">
              <p className="text-white text-base font-bold mb-4 ">99acres</p>
              <ul>
                {[
                  "Mobile Apps",
                  "Our Services",
                  "Price Trends",
                  "Post your Property",
                  "Real Estate Investments",
                  "Builders in India",
                  "Area Converter",
                  "Articles",
                  "Rent Receipt",
                  "Customer Service",
                  "Sitemap",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-white  font-medium mb-4 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[20.9999%]  xl:w-[20.9999%] lg:w-[20.9999%] md:w-1/3 sm:w-full mb-8">
              <p className="text-white text-base font-bold mb-4">Company</p>
              <ul>
                {[
                  "About us",
                  "Contact us",
                  "Careers with us",
                  "Terms & Conditions",
                  "Request Info",
                  "Feedback",
                  "Report a problem",
                  "Testimonials",
                  "Privacy Policy",
                  "Summons/Notices",
                  "Grievances",
                  "Safety Guide",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-white font-medium mb-4 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[20.9999%]  xl:w-[20.9999%] lg:w-[20.9999%] md:w-1/3 sm:w-full mb-8">
              <p className="text-white text-base font-bold mb-4">
                Our Partners
              </p>
              <ul>
                {[
                  "Naukri.com - Jobs in India",
                  "Naukrigulf.com - Jobs in middle east",
                  "Jeevansathi.com - Matrimonials",
                  "Brijj.com - Professional Networking",
                  "Shiksha.com - Education Career Info",
                  "Policybazaar.com - Insurance India",
                  "Meritnation.com - Online Educational ",
                  "Assessment",
                  "PaisaBazaar.com",
                  "AmbitionBox.com",
                  "FirstNaukri.com - A jobsite for campus hiring",
                  "Jobhai.com – Find Jobs Near You",
                  "Techminis.com - Tech news on the go",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-white font-medium mb-4 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full  xl:[20.9999%] lg:w-[20.9999%] md:w-full sm:w-full">
              <div className="footer-content">
                <p className="text-white text-base font-bold mb-4 leading-6">
                  Contact Us
                </p>
                <p className="text-white mb-4">Toll Free - 1800 41 99099</p>
                <p className="text-white opacity-70 text-sm font-normal mb-4">
                  Monday - Saturday (9:00AM to 11:00PM IST)
                </p>
                <p className="text-white mb-8">Email - feedback@99acres.com</p>
                <p className="text-white text-lg font-bold mb-8">
                  Connect with us
                </p>
                <div className="text-[20px] flex space-x-4 mb-4">
                  <Link href="#">
                    <i className="fa-brands fa-facebook text-white "></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-youtube text-white "></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-twitter text-white "></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-instagram text-white "></i>
                  </Link>
                </div>
                <p className="text-white text-lg font-bold mb-4">
                  Download the App
                </p>
                <div className=" flex space-x-4 mb-8">
                  <Link href="#">
                    <Image
                      src={"/image/ios.png"}
                      alt="App Store"
                      width={"160"}
                      height={"47"}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={"/image/play.png"}
                      alt="Play Store"
                      width={"160"}
                      height={"47"}
                    />
                  </Link>
                </div>
                <span className="text-white opacity-50 inline-block align-middle text-[10px]">
                  Usage of 99acres.com to upload content showing area in
                  non-standard units or which enables targeting by
                  religion/community/caste/race is prohibited. Please report
                  inappropriate content by writing to us at{" "}
                  <Link href="#" className="underline">
                    report abuse
                  </Link>
                </span>
                <div className=" text-white mt-8 w-[80%]">
                  All trademarks are the property of their respective owners.
                  <br />
                  All rights reserved - Info Edge (India) Ltd.
                  <br />A naukri.com group venture
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
