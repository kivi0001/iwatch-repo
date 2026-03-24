import { FaApple } from "react-icons/fa";
import MenuButton from "./MenuButton";
import SearchBarAndBasket from "./SearchBarAndBasket";

const Header = () => {
  return (
    <div className="header">
      <FaApple size={50} />
      <div className="nav-bar">
        <MenuButton text="Mac" />
        <MenuButton text="iPhone" />
        <MenuButton text="iPad" />
        <MenuButton text="iWatch" />
        <MenuButton text="Support" />
      </div>
      <SearchBarAndBasket />
    </div>
  );
};

export default Header;
