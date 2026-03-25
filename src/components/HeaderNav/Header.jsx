import { FaApple } from "react-icons/fa";
import MenuButton from "./MenuButton";
import SearchBarAndBasket from "./SearchBarAndBasket";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <FaApple
        size={50}
        color="white"
        className="apple-icon"
      />
      <div className="nav-bar">
        <MenuButton text="Mac" />
        <MenuButton text="iPhone" />
        <MenuButton text="iPad" />
        <MenuButton text="iWatch" />
        <MenuButton text="Support" />
      </div>
      <IoSearch
        className="search-icon"
        color="white"
        size={30}
      />
      <FiShoppingBag
        className="basket-icon"
        color="white"
        size={30}
      />
    </div>
  );
};

export default Header;
