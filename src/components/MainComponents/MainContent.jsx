import Headline from "./Headline";
import BuyButton from "./BuyButton";
import ImageWatch from "./ImageWatch";
import BottomNavFull from "./BottomNavigation/BottomNavFull";

const MainContent = () => {
  return (
    <section className="main-content-section">
      <div className="headline-div">
        <Headline text="The Perfect Moment" />
        <Headline text="Between Past and Future." />
      </div>
      <ImageWatch />
      <BuyButton />
      <BottomNavFull />
    </section>
  );
};

export default MainContent;
