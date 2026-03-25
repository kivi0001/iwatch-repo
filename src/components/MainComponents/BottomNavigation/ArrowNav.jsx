import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ArrowNav = () => {
  return (
    <div className="arrow-div">
      <HiOutlineArrowNarrowLeft
        color="white"
        size={25}
      />
      <p>1</p>
      <HiOutlineArrowNarrowRight
        color="white"
        size={25}
      />
    </div>
  );
};

export default ArrowNav;
