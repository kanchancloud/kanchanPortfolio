import './App.css';
import Navber from "./component/nav/Navber";
import Main from "./pages/Main/Main";
import IntroPage from "./pages/intro/IntroPage";
import AboutProps from "./pages/about/AboutProps";
import Contact from "./pages/contact/Contact";

function App() {
    return (
        <div className="App">
            <Navber/>
            <Main/>
             <AboutProps/>
             <Contact/>

        </div>
    );
}

export default App;
