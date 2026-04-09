"use client";
import Image from "next/image";

const Thumbnail = ({ imgsrc, setSelectedImage }) => {
  return (
    <figure
      className="relative isolate before:absolute before:bottom-[-1rem] before:left-[-1rem] before:z-[-1] before:h-20 before:w-[140%] before:rounded-[10px] before:bg-[#434558] before:opacity-60 before:content-[''] nth-of-type-2:before:bg-[#6addcc] nth-of-type-3:before:bg-[#c4f0f9]"
      onClick={() => setSelectedImage(imgsrc)}
    >
      <Image
        src={imgsrc}
        alt="billede af et ur"
        width={500}
        height={500}
        className="w-full"
      />
    </figure>
  );
};

export default Thumbnail;
