import Image from "next/image";

const ImageWatch = () => {
  return (
    <div>
      <Image
        src="/navy.png"
        alt="billede af et ur"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageWatch;
