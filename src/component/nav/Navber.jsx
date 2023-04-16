import React,{useState,useEffect} from 'react';
import './Navber.css';
import IntroPage from "../../pages/intro/IntroPage";

function Navber() {
    const [navbarColor, setNavbarColor] = useState('transparent');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 0) {
                setNavbarColor('#402659', );
            } else {
                setNavbarColor('transparent');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const isScrolled = scrollTop > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={"backgroundImage"}>
            <div className="nav" id="nav1" style={{ backgroundColor: navbarColor, "paddingBottom": scrolled ? "30px" : "20px"}}>
                <li className="navLi"><a href="/"><span>HOME</span></a></li>
                <li className="navLi"><a href="#project"><span>PROJECT</span></a></li>
                <li className="navLi"><a href="#portfolioAbout"><span>ABOUT</span></a></li>
                <li className="navLi"><a href="#contact"><span>CONTACT</span></a></li>
            </div>
                <IntroPage/>
        </div>
    );
}

export default Navber;