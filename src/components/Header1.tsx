import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative w-full h-[340px]">
      <Image src="/banner.jpg" alt="banner" fill objectFit="cover" />
      <div className="grid grid-flow-col justify-items-center justify-between absolute top-0 left-0 py-5 px-[50px] font-semibold text-[14px] leading-5 w-full">
        <div className=" ">
          <div className="pr-4 h-[43px] inline-block align-middle w-[108px] ">
            <Image
              src="/logo.png"
              alt="logo"
              width="100"
              height="18"
              objectFit="cover"
            />
          </div>
          <span>All india</span>
        </div>
        <div className="float-right grid grid-flow-col gap-1">
          <div>
            <Link href={""}>For Buyers</Link>
          </div>
          <div></div>
          <div>
            <Link href={""}>For Buyers</Link>
          </div>
          <div></div>
          <div>
            <Link href={""}>For Buyers</Link>
          </div>
          <div></div>
          <div>
            <Link href={""}>For Buyers</Link>
          </div>
          <div></div>
          <div>
            <Link href={""}>For Buyers</Link>
          </div>
          <div></div>
        </div>
        <div className="inline-block pr-4">
          <div className="flex items-center justify-center w-[164px] h-8 bg-white border border-solid rounded-lg "></div>
        </div>
      </div>
    </div>
  );
}
