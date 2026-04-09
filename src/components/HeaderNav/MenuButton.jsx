const MenuButton = ({ text }) => {
  return (
    <button className="px-[2em] py-[0.5em] font-semibold text-white hover:rounded-[20px] hover:border-x hover:border-white hover:bg-white hover:text-[#b6ccda]">
      {text}
    </button>
  );
};

export default MenuButton;
