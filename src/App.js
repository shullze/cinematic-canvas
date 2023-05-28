import {Routes, Route} from "react-router-dom";
// Components & Pages
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <NavBar/>
        <Routes>
            <Route path='/' element={<AboutUs/>}/>
            <Route path='about' element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/work' element={<OurWork/>}/>
        </Routes>
    </div>
  );
}

export default App;
