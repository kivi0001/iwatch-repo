"use client";

const Dot = ({
  color,
  relatedImage,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <div
      onClick={() =>
        setSelectedImage(relatedImage)
      }
      style={{ backgroundColor: color }}
      className={`dot ${relatedImage == selectedImage && "myborder"}`}
    ></div>
  );
};

export default Dot;
