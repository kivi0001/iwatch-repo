import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ArrowNav = () => {
  return (
    <div className="flex items-end">
      <HiOutlineArrowNarrowLeft color="white" size={25} />
      <p className="mx-4 text-[16px] font-bold text-white">1</p>
      <HiOutlineArrowNarrowRight color="white" size={25} />
    </div>
  );
};

export default ArrowNav;
