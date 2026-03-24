import Image from "next/image";
import { FaApple } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src="/mint.png"
          alt="billede af et ur"
          width={500}
          height={500}
        />
      </div>
      <FaApple size={50} />
    </div>
  );
}
