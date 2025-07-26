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
import Bglights from "./components/Bglights";
function App() {

    return (
        // h-auto
        <div className="flex  flex-col bg-black h-[700vh] w-screen overflow-none  ">
                 <Bglights />
            <HeaderComponent />
             <MobileNav />
       

            <Section1 />
       
             <BottomTextComponent text={["@MOON.INC", "www.moon-inc.com"]} />
            <Section2 />
      
             <BottomTextComponent text={["FULLY DIGITAL AGENCY","WHO ARE WE?","SCROLL AHEAD PLEASE"]} />
             <Section3 />
                <Section4 />
             <Section5 />
           
        </div>

)}

export default App;
