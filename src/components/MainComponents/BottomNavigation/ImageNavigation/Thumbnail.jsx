"use client";
import Image from "next/image";

const Thumbnail = ({
  imgsrc,
  setSelectedImage,
}) => {
  return (
    <figure
      onClick={() => setSelectedImage(imgsrc)}
    >
      <Image
        src={imgsrc}
        alt="billede af et ur"
        width={500}
        height={500}
      />
    </figure>
  );
};

export default Thumbnail;
