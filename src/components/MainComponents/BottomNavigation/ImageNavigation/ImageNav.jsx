"use client";
import Thumbnail from "./Thumbnail";
import Image from "next/image";

const ImageNav = ({ setSelectedImage }) => {
  return (
    <div className="image-nav-div">
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
