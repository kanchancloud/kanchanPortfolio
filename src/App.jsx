import './App.css';
import Navber from "./component/nav/Navber";
import MeinPageProp from "./pages/Main/MeinPageProp";
import IntroPage from "./pages/intro/IntroPage";
import AboutPage from "./pages/about/AboutPage";
import AboutProps from "./pages/about/AboutProps";
import Contact from "./pages/contact/Contact";

function App() {
    return (
        <div className="App">
            <Navber/>
            <IntroPage/>
            <MeinPageProp/> 
             <AboutProps/> 
             <Contact/>

        </div>
    );
}

export default App;
