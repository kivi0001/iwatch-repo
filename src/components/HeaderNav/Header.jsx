import { FaApple } from "react-icons/fa";
import MenuButton from "./MenuButton";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <div className="mx-auto grid max-w-250 grid-cols-(--header-grid) items-center gap-8 py-8">
      <FaApple size={50} color="white" className="apple-icon" />
      <div className="flex flex-wrap justify-between gap-8">
        <MenuButton text="Mac" />
        <MenuButton text="iPhone" />
        <MenuButton text="iPad" />
        <MenuButton text="iWatch" />
        <MenuButton text="Support" />
      </div>
      <IoSearch className="justify-self-end" color="white" size={30} />
      <FiShoppingBag className="basket-icon" color="white" size={30} />
    </div>
  );
};

export default Header;
