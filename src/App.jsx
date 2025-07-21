import HeaderComponent from "./components/HeaderComponent";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import BottomTextComponent from "./components/BottomTextComponent";
import BgCircles from "./components/BgCircles";
import Test from "./sections/Test";
import MobileNav from "./components/MobileNav";
function App() {
  return (
    <div className="flex flex-col bg-black  h-fit overflow-hidden">
      <MobileNav />
      <HeaderComponent />
      {/* <BgCircles /> */}

      <Section1 />
      <Section2 />
      <Section5 />
      {/* <BottomTextComponent text={["@MOON.INC", "www.moon-inc.com"]} />
                <BottomTextComponent text={["FULLY DIGITAL AGENCY","WHO ARE WE?","SCROLL AHEAD PLEASE"]} />


            <Section3 />
            <div className="h-[30vh]"></div>
            <Section4 />
            <div className="h-[20vh]"></div>
            */}
    </div>
  );
}

export default App;
