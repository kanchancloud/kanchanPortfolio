import './App.css';
import Navber from "./component/nav/Navber";
import Mein from "./pages/Main/Mein";
import IntroPage from "./pages/intro/IntroPage";
import AboutProps from "./pages/about/AboutProps";
import Contact from "./pages/contact/Contact";

function App() {
    return (
        <div className="App">
            <Navber/>
            <IntroPage/>
            <Mein/>
             <AboutProps/>
             <Contact/>

        </div>
    );
}

export default App;
