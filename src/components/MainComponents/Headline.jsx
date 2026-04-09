const Headline = ({ text, className = "" }) => {
  return (
    <h1 className={`text-[60px] font-bold text-white ${className}`}>{text}</h1>
  );
};

export default Headline;
