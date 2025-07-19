
import HeaderComponent from "./components/HeaderComponent"
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"
import Section4 from "./sections/Section4"
import Test from "./sections/Test"
function App() {


  return (
    <div className="flex flex-col " >
       <HeaderComponent />
    <Section1 />

    <Section2 />
     {/* <Test/> */}
    <Section3/>
    <Section4/>
  
   
    
    </div>
  )
}

export default App
