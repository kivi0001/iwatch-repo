"use client";

const Dot = ({
  color,
  relatedImage,
  setSelectedImage,
}) => {
  return (
    <div
      onClick={() =>
        setSelectedImage(relatedImage)
      }
      style={{ backgroundColor: color }}
      className="dots myborder"
    ></div>
  );
};

export default Dot;
