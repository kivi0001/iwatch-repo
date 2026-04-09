"use client";
import ImageNav from "./ImageNavigation/ImageNav";
import ArrowNav from "./ArrowNav";

const BottomNavFull = ({ setSelectedImage }) => {
  return (
    <div className="col-span-full row-3 my-8 grid grid-cols-subgrid">
      <ArrowNav />
      <ImageNav setSelectedImage={setSelectedImage} />
    </div>
  );
};

export default BottomNavFull;
