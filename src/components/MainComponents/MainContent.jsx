import Headline from "./Headline";
import BuyButton from "./BuyButton";
import ImageWatch from "./ImageWatch";

const MainContent = () => {
  return (
    <div>
      <div>
        <Headline text="The Perfect Moment" />
        <Headline text="Between Past and Future" />
      </div>
      <ImageWatch />
      <BuyButton />
    </div>
  );
};

export default MainContent;
