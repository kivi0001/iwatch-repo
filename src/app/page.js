import Header from "@/components/HeaderNav/Header";
import MainContent from "@/components/MainComponents/MainContent";
import BottomNavFull from "@/components/MainComponents/BottomNavigation/BottomNavFull";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <MainContent />
        <BottomNavFull />
      </main>
    </div>
  );
}
