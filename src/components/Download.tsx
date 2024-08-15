import Image from "next/image";
import Link from "next/link";

export default function Download() {
  return (
    <section className="w-full pt-[30px] ">
      <div className="px-[4%] py-4">
        <div className="download-img">
          <Link href="#">
            <Image
              src="/image/download-banner.jpg"
              alt="Download App Banner"
              width={500} // Adjust the width according to the actual size of the image
              height={300} // Adjust the height according to the actual size of the image
              layout="responsive"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
