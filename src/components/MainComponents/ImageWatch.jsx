import Image from "next/image";
import Dot from "../MainComponents/Dot";
import { useState } from "react";

export default function Home({
  selectedImage,
  setSelectedImage,
}) {
  return (
    <div>
      <figure>
        <Image
          src={selectedImage}
          alt="billede af et ur"
          width={500}
          height={500}
        />
      </figure>
      <div>
        <Dot
          color="#b6ccda"
          relatedImage="/ocean.png"
          setSelectedImage={setSelectedImage}
        ></Dot>
        <Dot
          color="#434558"
          relatedImage="/navy.png"
          setSelectedImage={setSelectedImage}
        ></Dot>
        <Dot
          color="#6addcc"
          relatedImage="/mint.png"
          setSelectedImage={setSelectedImage}
        ></Dot>
      </div>
    </div>
  );
}
