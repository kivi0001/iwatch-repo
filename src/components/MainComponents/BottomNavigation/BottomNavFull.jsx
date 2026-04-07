"use client";
import ImageNav from "./ImageNavigation/ImageNav";
import ArrowNav from "./ArrowNav";

const BottomNavFull = ({ setSelectedImage }) => {
  return (
    <div className="bottom-nav">
      <ArrowNav />
      <ImageNav
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
};

export default BottomNavFull;
