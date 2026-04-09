"use client";

const Dot = ({ color, relatedImage, selectedImage, setSelectedImage }) => {
  return (
    <div
      onClick={() => setSelectedImage(relatedImage)}
      style={{ backgroundColor: color }}
      className={`hover:shadow-[#17171748 0 2px 5px] h-(--dot-height) w-(--dot-width) rounded-full border border-white hover:cursor-pointer ${relatedImage == selectedImage && "w-[clamp(28px, 19.5px + 1.125cqi, 35px)] h-[clamp(28px, 19.5px + 1.125cqi, 35px)] border-[3px] border-white"}`}
    ></div>
  );
};

export default Dot;
