import Image from "next/image";
import Dot from "../MainComponents/Dot";
import { useState } from "react";

export default function Home({
  selectedImage,
  setSelectedImage,
}) {
  return (
    <div className="image-watch-dots-div">
      <figure>
        <Image
          src={selectedImage}
          alt="billede af et ur"
          width={500}
          height={500}
        />
      </figure>
      <div className="color-selection-div">
        <Dot
          color="#434558"
          relatedImage="/navy.png"
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        ></Dot>
        <hr className="dotted-line"></hr>
        <Dot
          color="#6addcc"
          relatedImage="/mint.png"
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        ></Dot>
        <hr className="dotted-line"></hr>
        <Dot
          color="#c4f0f9"
          relatedImage="/ocean.png"
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        ></Dot>
      </div>
    </div>
  );
}
