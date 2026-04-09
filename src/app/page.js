"use client";
import { useState } from "react";

import Headline from "@/components/MainComponents/Headline";
import BuyButton from "@/components/MainComponents/BuyButton";
import ImageWatch from "@/components/MainComponents/ImageWatch";
import BottomNavFull from "@/components/MainComponents/BottomNavigation/BottomNavFull";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState("/navy.png");
  return (
    <main className="mx-auto grid max-w-250 grid-cols-(--main-grid) grid-rows-[auto]">
      <div className="self-center">
        <Headline text="The Perfect Moment" />
        <Headline text="Between Past and Future." className="font-normal" />
      </div>
      <ImageWatch
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <BuyButton />
      <BottomNavFull setSelectedImage={setSelectedImage} />
    </main>
  );
}
