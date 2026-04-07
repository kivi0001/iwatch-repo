"use client";
import { useState } from "react";

import Headline from "@/components/MainComponents/Headline";
import BuyButton from "@/components/MainComponents/BuyButton";
import ImageWatch from "@/components/MainComponents/ImageWatch";
import BottomNavFull from "@/components/MainComponents/BottomNavigation/BottomNavFull";

export default function Home() {
  const [selectedImage, setSelectedImage] =
    useState("/navy.png");
  return (
    <main className="main-content-section">
      <div className="headline-div">
        <Headline text="The Perfect Moment" />
        <Headline text="Between Past and Future." />
      </div>
      <ImageWatch
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <BuyButton />
      <BottomNavFull
        setSelectedImage={setSelectedImage}
      />
    </main>
  );
}
