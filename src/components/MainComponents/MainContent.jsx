/* "use client";
import { useState } from "react";

import Headline from "./Headline";
import BuyButton from "./BuyButton";
import ImageWatch from "./ImageWatch";
import BottomNavFull from "./BottomNavigation/BottomNavFull";

const MainContent = () => {
  const [selectedImage, setSelectedImage] =
    useState("/navy.png");
  return (
    <section className="main-content-section">
      <div className="headline-div">
        <Headline text="The Perfect Moment" />
        <Headline text="Between Past and Future." />
      </div>
      <ImageWatch src={selectedImage} />
      <BuyButton />
      <BottomNavFull
        setSelectedImage={setSelectedImage}
      />
    </section>
  );
};

export default MainContent; */
