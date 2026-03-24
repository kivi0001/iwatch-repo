import Image from "next/image";

const ImageNav = () => {
  return (
    <div>
      <Image
        src="/navy.png"
        alt="billede af et ur"
        width={500}
        height={500}
      />
      <Image
        src="/mint.png"
        alt="billede af et ur"
        width={500}
        height={500}
      />
      <Image
        src="/ocean.png"
        alt="billede af et ur"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageNav;
