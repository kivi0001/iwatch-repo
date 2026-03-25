import Image from "next/image";

const ImageNav = () => {
  return (
    <div className="image-nav-div">
      <figure>
        <Image
          src="/navy.png"
          alt="billede af et ur"
          width={500}
          height={500}
        />
      </figure>
      <figure>
        <Image
          src="/mint.png"
          alt="billede af et ur"
          width={500}
          height={500}
        />
      </figure>
      <figure>
        <Image
          src="/ocean.png"
          alt="billede af et ur"
          width={500}
          height={500}
        />
      </figure>
    </div>
  );
};

export default ImageNav;
