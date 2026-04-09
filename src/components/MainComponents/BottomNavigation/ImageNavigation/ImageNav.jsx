"use client";
import Thumbnail from "./Thumbnail";
import Image from "next/image";

const ImageNav = ({ setSelectedImage }) => {
  return (
    <div className="col-span-[2 / 3] grid grid-cols-3 gap-16">
      <Thumbnail
        imgsrc="/navy.png"
        setSelectedImage={setSelectedImage}
      ></Thumbnail>

      <Thumbnail
        imgsrc="/mint.png"
        setSelectedImage={setSelectedImage}
      ></Thumbnail>

      <Thumbnail
        imgsrc="/ocean.png"
        setSelectedImage={setSelectedImage}
      ></Thumbnail>
    </div>
  );
};

export default ImageNav;
